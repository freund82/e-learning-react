import "./mobileMenu.css"
import {NavLink} from "react-router-dom";
import { useState } from "react";
import NavSubmenu from "../NavSubmenu/NavSubmenu";

function MobileMenu({ onClose }) {

    const [showNavSubMenu, setShowNavSubMenu] = useState(false);

    const handlePageClick = (e) => {
        e.preventDefault(); // Предотвращаем переход по ссылке
        setShowNavSubMenu(prev => !prev);
    }

    const handleSubmenuLinkClick = () => {
        setShowNavSubMenu(false); // Закрываем подменю
        onClose(); // Закрываем мобильное меню
    }

    return (
        <div className="mobileMenu">
            <div className="mobileMenu__inner">
                <div className="mobileMenu__header">
                    <h2 className="mobileMenu__title">Menu</h2>
                    <button className="mobileMenu__close" onClick={onClose} aria-label="Close menu"></button>
                </div>
                <nav className="mobileMenu__nav">
                    <ul className="mobileMenu__list">
                        <li className="mobileMenu__item">
                            <NavLink to="/" className={({ isActive }) => `mobileMenu__link ${isActive ? "active" : ""}`} onClick={onClose}>Home</NavLink>
                        </li>
                        <li className="mobileMenu__item">
                            <NavLink to="/courses" className={({ isActive }) => `mobileMenu__link ${isActive ? "active" : ""}`} onClick={onClose}>Courses</NavLink>
                        </li>
                        <li className="mobileMenu__item">
                            <NavLink to="/blog" className={({ isActive }) => `mobileMenu__link ${isActive ? "active" : ""}`} onClick={onClose}>Blog</NavLink>
                        </li>
                        <li className="mobileMenu__item mobileMenu__item--with-submenu">
                            <div 
                                className={`mobileMenu__link mobileMenu__link--parent ${showNavSubMenu ? "expanded" : ""}`}
                                onClick={handlePageClick}
                            >
                                Page
                                <span className="mobileMenu__arrow">{showNavSubMenu ? "▲" : "▼"}</span>
                            </div>
                            <div className="mobileMenu__submenu">
                                <NavSubmenu show={showNavSubMenu} onLinkClick={handleSubmenuLinkClick} />
                            </div>
                        </li>
                    </ul>
                    <div className="mobileMenu__auth">
                        <NavLink to="/loginregister" className={({ isActive }) => `mobileMenu__link ${isActive ? "active" : ""}`} onClick={onClose}>Login / Register</NavLink>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default MobileMenu;