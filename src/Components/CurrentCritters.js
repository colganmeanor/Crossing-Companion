import react from "react";
import CritterCard from "./CritterCard";
import { findCurrentCritters } from "../utilities";


const CurrentCritters = ({ fish, seaCreatures, bugs, currentTime }) => {

    // console.log(currentTime.getHours())
    
    
    
    const currentFishies = findCurrentCritters(fish, currentTime, 'southern')
    console.log(currentFishies)
    
    const fishCritters = fish.map((fish) => {
        return <CritterCard fish={fish} />
    })

    return (
        <div>
            {/* {currentFishies} */}
        </div>
    )
}

export default CurrentCritters


// need to create a helper function that runs on render. 
// function should take in an array of objects, and the currentTime
// filter through the array of objects to find matches where the month and the time of day are BOTH equal to the currentTime object.
// 