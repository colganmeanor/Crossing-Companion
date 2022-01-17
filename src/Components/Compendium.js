import CritterCard from "./CritterCard";
import '../Styles/CurrentCritters.css'

const Compendium = ({ fish, seaCreatures, bugs }) => {

    const allFish = fish.map((fish) => {
        return <CritterCard key={fish.id} critter={fish} />
    })

    const allSeaCreatures = seaCreatures.map((seaCreatures) => {
        return <CritterCard key={seaCreatures.id} critter={seaCreatures} />
    })

    const allBugs = bugs.map((bugs) => {
        return <CritterCard key={bugs.id} critter={bugs} />
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

export default Compendium