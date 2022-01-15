import react from "react";
import CritterCard from "./CritterCard";

const CurrentCritters = ({ fish }) => {

    const fishCritters = fish.map((fish) => {
        return <CritterCard fish={fish} />
    })

    return (
        <div>
            {fishCritters}
        </div>
    )
}

export default CurrentCritters