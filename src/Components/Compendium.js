import CritterCard from "./CritterCard";
import PropTypes from "prop-types";
import '../Styles/CritterContainers.css'

const Compendium = ({ critters, caughtCritters, handleCritterChange, errorMessage }) => {


    const allFish = critters.fish.length === 0 ? errorMessage : critters.fish.map((fish) => {
        return <CritterCard key={fish.id} critter={fish} caughtCritters={caughtCritters} handleCritterChange={handleCritterChange} />
    })

    const allSeaCreatures = critters.seaCreatures.length === 0 ? errorMessage : critters.seaCreatures.map((seaCreatures) => {
        return <CritterCard key={seaCreatures.id} critter={seaCreatures} caughtCritters={caughtCritters} handleCritterChange={handleCritterChange}/>
    })

    const allBugs = critters.bugs.length === 0 ? errorMessage : critters.bugs.map((bugs) => {
        return <CritterCard key={bugs.id} critter={bugs} caughtCritters={caughtCritters} handleCritterChange={handleCritterChange}/>
    })

    return (
        <main>
            <p className="critter-title">ALL FISH:</p>
            <section aria-label ='All Fish Section' className="critter-container" data-cy='all-fish-container'>
                {allFish}
            </section>
            <p className="critter-title" >ALL SEA CREATURES:</p>
            <section aria-label ='All Sea Creatures Section' className="critter-container" data-cy='all-sea-creatures-container'>
                {allSeaCreatures}
            </section>
            <p className="critter-title">ALL BUGS:</p>
            <section aria-label ='All Bugs Section' className="critter-container" data-cy='all-bugs-container'>
                {allBugs}
            </section>
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