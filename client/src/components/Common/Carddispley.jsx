import Dabba from './Dabba.jsx';
import ActionAreaCard from './Commoncard.jsx';
import axios from 'axios';
import './style.css';

function CardDisplay({ headline, cards }) {

    return (
        <div style={{margin: "0 20px"}}>
            <div className="garage">
                <h1 className="heading">{headline}</h1>
                <div className="car-cards">
                    {cards.map((car, index) => (
                        <Dabba key={index} carid={car} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CardDisplay;
