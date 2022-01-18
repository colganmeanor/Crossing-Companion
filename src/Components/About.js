import { Link } from 'react-router-dom'
import '../Styles/About.css'

const About = () => {
    return (
        <div className="about-section">
            <h3>🦋Welcome to Crossing Companion!🦋</h3> 
            <p>Crossing Companion is a reference guide for Animal Crossing New Horizons players who are looking to see exactly what critters are available right NOW!</p>
            <p>This application has two main views:</p>
            <p><Link className='about-link' to='/current-critters'>The Current Critters Section</Link> - See which critters are available right now according to your local time zone and hemisphere!</p>
            <p><Link className='about-link' to='/all-critters'>The All Critters Section</Link> - See a list of all critters available in the game, regardless of time or hemisphere.</p>
            <p>🌎 On the Current Critters Page - Choose between southern and northern hemisphere to see what's going on at the other end of the world. 🌎</p>
            <p>From either page - Click a critter card to mark it as caught for future sessions in this application. You'll see a green check mark on cards for critters you have caught.</p>
            <p>This application pulls all of its data from the public API - acnhapi.com. This application holds no official affliation with Nintendo or Animal Crossing.</p>
        </div>
    )
}

export default About