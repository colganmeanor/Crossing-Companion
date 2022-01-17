import PropTypes from 'prop-types';
import '../Styles/CritterCard.css'

const CritterCard = ({critter}) => {
    return (
        <div className="critter-card">
            <div className="critter-image-container">
                <img className="critter-icon" src={critter['icon_uri']}></img>
            </div>
            <p>{critter.displayName}</p>
        </div>
    )
}

CritterCard.propTypes = {
    critter: PropTypes.object.isRequired
}

export default CritterCard