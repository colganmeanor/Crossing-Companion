import react from "react";
import '../Styles/Clock.css'

const Clock = ({ currentTime }) => {

    return(
        <div className="clock-display">
            <h1 className="clock-hours-minutes">{currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</h1>
            <h2 className="clock-date">{currentTime.toLocaleDateString()}</h2>
        </div>
    )

}

export default Clock