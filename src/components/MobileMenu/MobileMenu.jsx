import "./mobileMenu.css"
import {NavLink, Link} from "react-router-dom";
import { useState } from "react";
import NavSubmenu from "../NavSubmenu/NavSubmenu";

function MobileMenu() {

     const [showNavSubMenu, setShowNavSubMenu] = useState(false);
     

    const handleMouseClick = () => {
        setShowNavSubMenu(showNavSubMenu => !showNavSubMenu);
    }


    return (
        <div className="mobileMenu">
                <div className="mobileMenu__inner">
                <nav className="mobileMenu__nav">
                    <ul className="mobileMenu__list">
                        <li className="mobileMenu__item">
                            <NavLink to="/" className={({ isActive }) =>`mobileMenu__link ${isActive ? "active" : ""}`} href="#">Home</NavLink>
                        </li>
                        <li className="mobileMenu__item">
                            <NavLink to="/courses" className={({ isActive }) =>`mobileMenu__link ${isActive ? "active" : ""}`} href="#">Courses</NavLink>
                        </li>
                        <li className="mobileMenu__item">
                            <NavLink to="/blog" className={({ isActive }) =>`mobileMenu__link ${isActive ? "active" : ""}`}  href="#">Blog</NavLink>
                        </li>
                        <li className="mobileMenu__item">
                            <NavLink to="/page/contact" className="mobileMenu__link submenu__link" onClick={handleMouseClick}>Page</NavLink>
                           
                        </li>
                         {showNavSubMenu && <NavSubmenu />}
                    </ul>
                    <div className="mobileMenu__auth">
                         <li className="mobileMenu__item">
                            <NavLink to="/loginregister" className={({ isActive }) =>`header__link ${isActive ? "active" : ""}`}  href="#">Login / Register</NavLink>
                        </li>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default MobileMenu;