import { Link } from 'react-router-dom'
import '../Styles/About.css'

const About = () => {
    return (
        <div aria-label='Homepage and About Section' data-cy='about-section' className="about-section">
            <h3>๐ฆWelcome to Crossing Companion!๐ฆ</h3> 
            <p>Crossing Companion is a reference guide for Animal Crossing New Horizons players who are looking to see exactly what critters are available right NOW!</p>
            <p>Crossing Companion uses data from from the public API - <a href='http://acnhapi.com'>acnhapi.com</a>. Most critters in Animal Crossing New Horizons are only available in certain months of the year, and then only during certain hours of the day. It can be tedious to try to find which ones you don't have that are available at the current moment. Therefore, Crossing Companion uses the data associated with each critter to determine which critters are currently available at any given time. </p>
            <div className='about-link-section'>
                <Link data-cy='current-critters-link' className='about-link' to='/current-critters'>The Current Critters Section</Link>
                <p>See which critters are available right now according to your local time zone and hemisphere!</p>
                <Link data-cy='all-critters-link' className='about-link' to='/all-critters'>The All Critters Section</Link>
                <p>See a list of all critters available in the game, regardless of time or hemisphere.</p>
            </div>
            <p>๐ On the Current Critters Page - Choose between southern and northern hemisphere to see what's going on at the other end of the world. ๐</p>
            <p>From either page - Click a critter card to mark it as caught for future sessions in this application. You'll see a green check mark on cards for critters you have caught.</p>
            <p>This application holds no official affiliation with Nintendo or Animal Crossing.</p>
        </div>
    )
}

export default About