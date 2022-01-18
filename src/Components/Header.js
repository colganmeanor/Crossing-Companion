import '../Styles/Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return(
        <div data-cy='header' className="header">
            <div data-cy='header-links' className='header-link-section'>
            <NavLink data-cy='home-nav-link' to='/' className={({ isActive }) => (isActive ? 'nav-active' : 'inactive')}>Home</NavLink>
                <NavLink data-cy='current-critters-nav-link' to='/current-critters' className={({ isActive }) => (isActive ? 'nav-active' : 'inactive')}>Current Critters</NavLink>
                <NavLink data-cy='all-critters-nav-link' to='/all-critters' className={({ isActive }) => (isActive ? 'nav-active' : 'inactive')}>All Critters</NavLink>
                {/* <NavLink data-cy='about-nav-link' to='/about' className={({ isActive }) => (isActive ? 'nav-active' : 'inactive')}>About</NavLink> */}
            </div>
        </div>
    )
}

export default Header