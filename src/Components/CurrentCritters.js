import react from "react";
import CritterCard from "./CritterCard";
import { findCurrentCritters } from "../utilities";


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
            <div className="current-fish">
                <p>FISH:</p>
                {currentFishies}
            </div>
            <div className="current-seacreatures">
                <p>SEACREATURES:</p>
                {currentSeaCreatures}
            </div>
            <div className="current-bugs">
                <p>BUGS:</p>
                {currentBugs}
            </div>
        </main>
    )
}

export default CurrentCritters
