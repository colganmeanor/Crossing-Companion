import CritterCard from "./CritterCard";
import PropTypes from "prop-types";
import '../Styles/CritterContainers.css'

const Compendium = ({ critters, caughtCritters, handleCritterChange }) => {

    const allFish = critters.fish.map((fish) => {
        return <CritterCard key={fish.id} critter={fish} caughtCritters={caughtCritters} handleCritterChange={handleCritterChange} />
    })

    const allSeaCreatures = critters.seaCreatures.map((seaCreatures) => {
        return <CritterCard key={seaCreatures.id} critter={seaCreatures} caughtCritters={caughtCritters} handleCritterChange={handleCritterChange}/>
    })

    const allBugs = critters.bugs.map((bugs) => {
        return <CritterCard key={bugs.id} critter={bugs} caughtCritters={caughtCritters} handleCritterChange={handleCritterChange}/>
    })

    return (
        <main>
            <p className="critter-title">ALL FISH:</p>
            <div className="current-critters">
                {allFish}
            </div>
            <p className="critter-title">ALL SEA CREATURES:</p>
            <div className="current-critters">
                {allSeaCreatures}
            </div>
            <p className="critter-title">ALL BUGS:</p>
            <div className="current-critters">
                {allBugs}
            </div>
        </main>
    )
}

Compendium.propTypes = {
    critters: PropTypes.shape({
        fish: PropTypes.arrayOf(PropTypes.object).isRequired,
        seaCreatures: PropTypes.arrayOf(PropTypes.object).isRequired,
        bugs: PropTypes.arrayOf(PropTypes.object).isRequired
    }),
    caughtCritters: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleCritterChange: PropTypes.func.isRequired
}

export default Compendium