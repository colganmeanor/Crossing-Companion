import { useState } from "react";
import PropTypes from "prop-types";
import CritterCard from "./CritterCard";
import { findCurrentCritters } from "../utilities";
import '../Styles/CritterContainers.css'


const CurrentCritters = ({ critters, currentTime, caughtCritters, handleCritterChange }) => {

    const [hemisphere, setHemi] = useState('northern')

      
    const currentFish = findCurrentCritters(critters.fish, currentTime, hemisphere) 
    .map((fish) => {
        return <CritterCard key={fish.id} critter={fish} caughtCritters={caughtCritters} handleCritterChange={handleCritterChange} />
    })
    const currentSeaCreatures = findCurrentCritters(critters.seaCreatures, currentTime, hemisphere)
    .map((seaCreatures) => {
        return <CritterCard key={seaCreatures.id} critter={seaCreatures} caughtCritters={caughtCritters} handleCritterChange={handleCritterChange}/>
    })
    const currentBugs = findCurrentCritters(critters.bugs, currentTime, hemisphere)
    .map((bugs) => {
        return <CritterCard key={bugs.id} critter={bugs} caughtCritters={caughtCritters} handleCritterChange={handleCritterChange}/>
    })
   

    return (
        <main>
            <div className="hemisphere-selection">
                <button data-cy='set-northern' onClick={() => {setHemi('northern')}}>Northern Hemisphere</button>
                <button data-cy='set-southern' onClick={() => {setHemi('southern')}}>Southern Hemisphere</button>
            </div>
            <p className="critter-title" data-cy='current-fish-container'>CURRENT FISH:</p>
            <div className="current-critters">
                {currentFish}
            </div>
            <p className="critter-title" data-cy='current-sea-creatures-container'>CURRENT SEA CREATURES:</p>
            <div className="current-critters">
                {currentSeaCreatures}
            </div>
            <p className="critter-title" data-cy='current-bugs-container'>CURRENT BUGS:</p>
            <div className="current-critters">
                {currentBugs}
            </div>
        </main>
    )
}

CurrentCritters.propTypes = {
    critters: PropTypes.shape({
        fish: PropTypes.arrayOf(PropTypes.object).isRequired,
        seaCreatures: PropTypes.arrayOf(PropTypes.object).isRequired,
        bugs: PropTypes.arrayOf(PropTypes.object).isRequired
    }),
    currentTime: PropTypes.object.isRequired,
    caughtCritters: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleCritterChange: PropTypes.func.isRequired
}

export default CurrentCritters
