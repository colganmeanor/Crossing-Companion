import react from "react";
import CritterCard from "./CritterCard";
import { findCurrentCritters } from "../utilities";
import '../Styles/CurrentCritters.css'


const CurrentCritters = ({ fish, seaCreatures, bugs, currentTime }) => {
      
    const currentFishies = findCurrentCritters(fish, currentTime, 'northern') 
    .map((fish) => {
        return <CritterCard critter={fish} />
    })
    const currentSeaCreatures = findCurrentCritters(seaCreatures, currentTime, 'northern')
    .map((seaCreatures) => {
        return <CritterCard critter={seaCreatures} />
    })
    const currentBugs = findCurrentCritters(bugs, currentTime, 'northern')
    .map((bugs) => {
        return <CritterCard critter={bugs} />
    })
    
    console.log('Current Fish',currentFishies)
    console.log('Current Sea Creatures', currentSeaCreatures)
    console.log('Current Bugs', currentBugs)

    return (
        <main>
            <p>FISH:</p>
            <div className="current-critters">
                {currentFishies}
            </div>
            <p>SEACREATURES:</p>
            <div className="current-critters">
                {currentSeaCreatures}
            </div>
            <p>BUGS:</p>
            <div className="current-critters">
                {currentBugs}
            </div>
        </main>
    )
}

export default CurrentCritters
