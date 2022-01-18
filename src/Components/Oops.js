import { Link } from "react-router-dom"
import '../Styles/Oops.css'

const Oops = () => {
    return (
        <div aria-label='Page Not Found' data-cy='oops-page' className='oops-page'>
            <h1>404 - Not Found</h1>
            <div aria-label='404 Help Link Section' data-cy='oops-link-section' className='oops-link-section'>
                <Link data-cy='oops-link-home' className='oops-link' to='/'>Click Here to Return Home</Link>
                <Link data-cy='oops-link-current-critters' className='oops-link' to='/current-critters'>Click Here to View Current Critters</Link>
                <Link data-cy='oops-link-all-critters' className='oops-link' to='/all-critters'>Click Here to View All Critters</Link>
            </div>
        </div>  
    )
}

export default Oops