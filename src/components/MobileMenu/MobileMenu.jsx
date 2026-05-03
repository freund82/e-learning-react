import "./mobileMenu.css"
import {NavLink} from "react-router-dom";
import { useState } from "react";
import NavSubmenu from "../NavSubmenu/NavSubmenu";

function MobileMenu({ onClose }) {

     const [showNavSubMenu, setShowNavSubMenu] = useState(false);
      

    const handleMouseClick = () => {
        setShowNavSubMenu(showNavSubMenu => !showNavSubMenu);
    }

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('mobileMenu')) {
            onClose?.();
        }
    }


    return (
        <div className="mobileMenu" onClick={handleOverlayClick}>
                <div className="mobileMenu__inner">
                <div className="mobileMenu__header">
                    <h2 className="mobileMenu__title">Menu</h2>
                    <button className="mobileMenu__close" onClick={onClose} aria-label="Close menu"></button>
                </div>
                <nav className="mobileMenu__nav">
                    <ul className="mobileMenu__list">
                        <li className="mobileMenu__item">
                            <NavLink to="/" className={({ isActive }) =>`mobileMenu__link ${isActive ? "active" : ""}`} onClick={onClose}>Home</NavLink>
                        </li>
                        <li className="mobileMenu__item">
                            <NavLink to="/courses" className={({ isActive }) =>`mobileMenu__link ${isActive ? "active" : ""}`} onClick={onClose}>Courses</NavLink>
                        </li>
                        <li className="mobileMenu__item">
                            <NavLink to="/blog" className={({ isActive }) =>`mobileMenu__link ${isActive ? "active" : ""}`} onClick={onClose}>Blog</NavLink>
                        </li>
                        <li className="mobileMenu__item">
                            <NavLink to="/page/contact" className="mobileMenu__link submenu__link" onClick={handleMouseClick}>Page</NavLink>
                           
                        </li>
                         {showNavSubMenu && <NavSubmenu />}
                    </ul>
                    <div className="mobileMenu__auth">
                        <NavLink to="/loginregister" className={({ isActive }) =>`mobileMenu__link ${isActive ? "active" : ""}`} onClick={onClose}>Login / Register</NavLink>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default MobileMenu;