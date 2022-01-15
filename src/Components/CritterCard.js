import react from "react";
import '../Styles/CritterCard.css'

const CritterCard = ({critter}) => {
    return (
        <div className="critter-card">
            <div className="critter-image-container">
                <img className="critter-icon" src={critter['icon_uri']}></img>
            </div>
            <p>{critter.name['name-EUen']}</p>
        </div>
    )
}

export default CritterCard