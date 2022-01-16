// import react from "react";
import CritterCard from "./CritterCard";
import { findCurrentCritters } from "../utilities";
import '../Styles/CurrentCritters.css'


const CurrentCritters = ({ fish, seaCreatures, bugs, currentTime }) => {
      
    const currentFishies = findCurrentCritters(fish, currentTime, 'northern') 
    .map((fish) => {
        return <CritterCard key={fish.id} critter={fish} />
    })
    const currentSeaCreatures = findCurrentCritters(seaCreatures, currentTime, 'northern')
    .map((seaCreatures) => {
        return <CritterCard key={seaCreatures.id} critter={seaCreatures} />
    })
    const currentBugs = findCurrentCritters(bugs, currentTime, 'northern')
    .map((bugs) => {
        return <CritterCard key={bugs.id} critter={bugs} />
    })
    
    // console.log('Current Fish',currentFishies)
    // console.log('Current Sea Creatures', currentSeaCreatures)
    // console.log('Current Bugs', currentBugs)

    return (
        <main>
            <p className="critter-title">FISH:</p>
            <div className="current-critters">
                {currentFishies}
            </div>
            <p className="critter-title">SEA CREATURES:</p>
            <div className="current-critters">
                {currentSeaCreatures}
            </div>
            <p className="critter-title">BUGS:</p>
            <div className="current-critters">
                {currentBugs}
            </div>
        </main>
    )
}

export default CurrentCritters
