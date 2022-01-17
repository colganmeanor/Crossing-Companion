import PropTypes from 'prop-types';
import { findOneCritter } from '../utilities';
import '../Styles/CritterCard.css'

const CritterCard = ({critter, handleCritterChange }) => {
    return (
        <div className="critter-card" onClick={() => handleCritterChange(critter.displayName)}>
            <div className="critter-image-container">
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
      }).isRequired
}

export default CritterCard

// on click functionality psuedocoding:

