import react from "react";
import CritterCard from "./CritterCard";

const CurrentCritters = ({ fish, seaCreatures, bugs, currentTime }) => {

    // console.log(currentTime.getHours())
    const findCurrentCritters = (arr, time) => {
        const result = arr.filter((critter) => {
            return critter.availability['month-array-northern'].includes(time.getMonth() + 1)
        }).filter((critter) => {
            return critter.availability['time-array'].includes(time.getHours())
        })
        return result
    }
    
    
    const currentFishies = findCurrentCritters(fish, currentTime)
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