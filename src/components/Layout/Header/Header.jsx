import "./header.css";
import {NavLink, Link} from "react-router-dom";
import { useState } from "react";
import Logo from "../../../assets/images/logo.svg";
import Search from "../../../assets/images/search.svg";
import NavSubmenu from "../../NavSubmenu/NavSubmenu";

function Header() {

    const [showNavSubMenu, setShowNavSubMenu] = useState(false);
     

const handleMouseEnter = () => {
        setShowNavSubMenu(showNavSubMenu => !showNavSubMenu);
    }

  
    return (
        <div className="header">
                <div className="header__inner">
                <div className="header__logo">
                    <img src={Logo} alt="logo" />
                </div>
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__item">
                            <NavLink to="/" className={({ isActive }) =>`header__link ${isActive ? "active" : ""}`} href="#">Home</NavLink>
                        </li>
                        <li className="header__item">
                            <NavLink to="/courses" className={({ isActive }) =>`header__link ${isActive ? "active" : ""}`} href="#">Courses</NavLink>
                        </li>
                        <li className="header__item">
                            <NavLink to="/blog" className={({ isActive }) =>`header__link ${isActive ? "active" : ""}`}  href="#">Blog</NavLink>
                        </li>
                        <li className="header__item">
                            <NavLink to="/page/contact" className="header__link submenu__link" onMouseEnter={handleMouseEnter}>Page</NavLink>
                           
                        </li>
                         {showNavSubMenu && <NavSubmenu />}
                    </ul>
                    <div className="nav__burger--menu">
                       
                    </div>
                    <div className="header__auth">
                         <li className="header__item">
                            <NavLink to="/loginregister" className={({ isActive }) =>`header__link ${isActive ? "active" : ""}`}  href="#">Login / Register</NavLink>
                        </li>
                        <div className="header__search">
                            <img src={Search} alt="search" />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;