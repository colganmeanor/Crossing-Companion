import react from "react";

const Clock = ({ currentTime }) => {

    return(
        <div>
            <h1>{currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</h1>
            <h2>{currentTime.toLocaleDateString()}</h2>
        </div>
    )

}

export default Clock