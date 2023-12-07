import './card-list-styles.css';
import Card from '../card/card.component';
import { Monster } from '../../App';

type CardProps = {
    monsters: Monster[];
}

const CardList = ({ monsters }: CardProps) => (
    <div className="card-list">
        {monsters.map((monster) => {
            return (
                <Card monster={monster} />
            )
        })}
    </div>
)

export default CardList;