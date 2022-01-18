import PropTypes from 'prop-types';
import '../Styles/Clock.css'

const Clock = ({ currentTime }) => {

    const hoursMinutes = currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    const date = currentTime.toLocaleDateString()

    return(
            <div className="clock-display" data-cy='clock-display'>
                <h1 className="clock-hours-minutes" data-cy='clock-time'>{hoursMinutes}</h1>
                <h2 className="clock-date" data-cy='clock-date'>{date}</h2>
            </div>
    )
}

Clock.propTypes = {
    currentTime: PropTypes.object.isRequired
  };


export default Clock