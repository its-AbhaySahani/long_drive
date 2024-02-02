import ActionAreaCard from './CommonCard';
import './style.css';
function CardDisplay({headline, cards}) {
    return (
        <div className="garage">
            <h2>{headline}</h2>
            <div className="car-cards">
                { cards.map((c, index)=><ActionAreaCard key={index}/>) }
            </div>
        </div>
    );
}

export default CardDisplay;