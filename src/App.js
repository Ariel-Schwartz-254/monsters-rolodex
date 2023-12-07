import { useState, useEffect } from 'react';

import './App.css';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

const App = () => {
  console.log('render');
  const [searchField, setsearchField] = useState(''); //[value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log(searchField);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setMonsters(users);
      } catch(error) {
        console.log(error);
      }
    }
    getUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField); 
    });
    setFilteredMonsters(newFilteredMonsters)
  }, [searchField, monsters]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setsearchField(searchFieldString);
  }

  return(
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox 
          className = 'monsters-search-box'
          onChangeHandler={onSearchChange} 
          placeholder='Search Monsters'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
}

export default App;
