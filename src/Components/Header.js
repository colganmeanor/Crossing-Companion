import '../Styles/Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return(
        <div className="header">
            <div className='header-link-section'>
                <NavLink to='/' className={({ isActive }) => (isActive ? 'nav-active' : 'inactive')}>Current Critters</NavLink>
                <NavLink to='/all-critters' className={({ isActive }) => (isActive ? 'nav-active' : 'inactive')}>All Critters</NavLink>
                <NavLink to='/about' className={({ isActive }) => (isActive ? 'nav-active' : 'inactive')}>About</NavLink>
            </div>
        </div>
    )
}

export default Header