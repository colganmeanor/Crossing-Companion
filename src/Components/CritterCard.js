import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import greenCheck from '../images/green-check-mark.svg'
import '../Styles/CritterCard.css'

const CritterCard = ({critter, caughtCritters, handleCritterChange }) => {
    
    const [caughtStatus, setStatus] = useState(false)
    
    const caughtTracker = (arr) => {
        arr.includes(critter.displayName) ? setStatus(true) : setStatus(false)
    }

    useEffect(() => {
        caughtTracker(caughtCritters)
    }, [caughtCritters])
    
    return (
        <div className="critter-card" onClick={() => handleCritterChange(critter.displayName)}>
            <div className="critter-image-container">
                {caughtStatus && <img className='critter-caught-checkmark' src={greenCheck}></img>}
                <img className="critter-icon" src={critter['icon_uri']}></img>
            </div>
            <p>{critter.displayName}</p>
        </div>
    )
}

CritterCard.propTypes = {
    critter: PropTypes.shape({
        'icon_uri': PropTypes.string,
        displayName: PropTypes.string
      }).isRequired,
    caughtCritters: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleCritterChange: PropTypes.func.isRequired
}

export default CritterCard


