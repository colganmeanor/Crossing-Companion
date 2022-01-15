import react from "react";
import '../Styles/CritterCard.css'

const CritterCard = ({critter}) => {
    return (
        <div className="critter-card">
            {critter.name['name-EUen']}
        </div>
    )
}

export default CritterCard