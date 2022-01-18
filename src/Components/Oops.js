import { Link } from "react-router-dom"
import '../Styles/Oops.css'

const Oops = () => {
    return (
        <div className='oops-page'>
            <h1>404 - Not Found</h1>
            <div className='oops-link-section'>
                <Link className='oops-link' to='/'>Click Here to Return Home</Link>
                <Link className='oops-link' to='/current-critters'>Click Here to View Current Critters</Link>
                <Link className='oops-link' to='/all-critters'>Click Here to View All Critters</Link>
            </div>
        </div>  
    )
}

export default Oops