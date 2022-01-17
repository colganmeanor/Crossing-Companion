import { useState } from "react";
import PropTypes from "prop-types";
import CritterCard from "./CritterCard";
import { findCurrentCritters } from "../utilities";
import '../Styles/CritterContainers.css'


const CurrentCritters = ({ fish, seaCreatures, bugs, currentTime }) => {

    const [hemisphere, setHemi] = useState('northern')

      
    const currentFish = findCurrentCritters(fish, currentTime, hemisphere) 
    .map((fish) => {
        return <CritterCard key={fish.id} critter={fish} />
    })
    const currentSeaCreatures = findCurrentCritters(seaCreatures, currentTime, hemisphere)
    .map((seaCreatures) => {
        return <CritterCard key={seaCreatures.id} critter={seaCreatures} />
    })
    const currentBugs = findCurrentCritters(bugs, currentTime, hemisphere)
    .map((bugs) => {
        return <CritterCard key={bugs.id} critter={bugs} />
    })
   

    return (
        <main>
            <div className="hemisphere-selection">
                <button onClick={() => {setHemi('northern')}}>Northern Hemisphere</button>
                <button onClick={() => {setHemi('southern')}}>Southern Hemisphere</button>
            </div>
            <p className="critter-title">CURRENT FISH:</p>
            <div className="current-critters">
                {currentFish}
            </div>
            <p className="critter-title">CURRENT SEA CREATURES:</p>
            <div className="current-critters">
                {currentSeaCreatures}
            </div>
            <p className="critter-title">CURRENT BUGS:</p>
            <div className="current-critters">
                {currentBugs}
            </div>
        </main>
    )
}

CurrentCritters.propTypes = {
    fish: PropTypes.array.isRequired,
    seaCreatures: PropTypes.array.isRequired,
    bugs: PropTypes.array.isRequired,
    currentTime: PropTypes.object.isRequired
}

export default CurrentCritters
