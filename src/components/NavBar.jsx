import { Link as RouterLink } from "react-router-dom";
import logo from '../assets/reciperadar.png';
import { Link as ScrollLink } from 'react-scroll';


const NavBar = () => {

    const navOptions =
        <>
            <li>
                <RouterLink to="/" >
                    Home
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/recipe">
                    Recipes
                </RouterLink>
            </li>
            <li>
                <ScrollLink to="about" smooth={true} duration={300}>
                    About
                </ScrollLink>
            </li>
            <li>
                <ScrollLink to="blog" smooth={true} duration={300}>
                    Blog
                </ScrollLink>
            </li>
            <li>
                <ScrollLink to="contact" smooth={true} duration={300}>
                    Contact
                </ScrollLink>
            </li>
        </>

    return (
        <>
            <div className="navbar flex justify-evenly bg-stone-400 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>

                    <div className="flex items-center gap-2">
                        <img src={logo} alt="Recipe Radar Logo" className="h-10 w-10 rounded-full" />
                        <a href="/" className="font-bold text-xl">Recipe Radar</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default NavBar;