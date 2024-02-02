import ActionAreaCard from './CommonCard';
import './style.css';
function CardDisplay({headline, cards}) {
    return (
        <div className="garage">
            <h2>{headline}</h2>
            <div className="car-card">
                { cards.map((c)=><ActionAreaCard/>) }
            </div>
        </div>
    );
}

export default CardDisplay;