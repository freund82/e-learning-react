import "./header.css";
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Logo from "../../../assets/images/logo.svg";
import Search from "../../../assets/images/search.svg";
import MobileMenu from "../../MobileMenu/MobileMenu";
import NavSubmenu from "../../NavSubmenu/NavSubmenu";

function Header() {
    const [showNavSubMenu, setShowNavSubMenu] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const submenuRef = useRef(null);
    const pageLinkRef = useRef(null);

    const handleMouseEnter = () => {
        setShowNavSubMenu(true);
    };

    const handleMouseLeave = () => {
        setShowNavSubMenu(false);
    };

    const handleBurgerMenuClick = () => {
        setShowMobileMenu(showMobileMenu => !showMobileMenu);
    };

    const handleCloseMobileMenu = () => {
        setShowMobileMenu(false);
    };

    // Закрытие подменю при клике вне его области
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                submenuRef.current &&
                !submenuRef.current.contains(event.target) &&
                pageLinkRef.current &&
                !pageLinkRef.current.contains(event.target)
            ) {
                setShowNavSubMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="header">
            <div className="header__inner">
                <div className="header__logo">
                    <img src={Logo} alt="logo" />
                </div>
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__item">
                            <NavLink
                                to="/"
                                className={({ isActive }) => `header__link ${isActive ? "active" : ""}`}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="header__item">
                            <NavLink
                                to="/courses"
                                className={({ isActive }) => `header__link ${isActive ? "active" : ""}`}
                            >
                                Courses
                            </NavLink>
                        </li>
                        <li className="header__item">
                            <NavLink
                                to="/blog"
                                className={({ isActive }) => `header__link ${isActive ? "active" : ""}`}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li
                            className="header__item header__item--with-submenu"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            ref={pageLinkRef}
                        >
                            <NavLink
                                to="/page/contact"
                                className="header__link submenu__link"
                            >
                                Page
                            </NavLink>
                            <div ref={submenuRef}>
                                <NavSubmenu show={showNavSubMenu} />
                            </div>
                        </li>
                    </ul>
                    <div className="nav__burger--menu" onClick={handleBurgerMenuClick}></div>
                    <div className="header__auth">
                        <li className="header__item">
                            <NavLink
                                to="/loginregister"
                                className={({ isActive }) => `header__link ${isActive ? "active" : ""}`}
                            >
                                Login / Register
                            </NavLink>
                        </li>
                        <div className="header__search">
                            <img src={Search} alt="search" />
                        </div>
                    </div>
                </nav>
            </div>
            {showMobileMenu && <MobileMenu onClose={handleCloseMobileMenu} />}
        </div>
    );
}

export default Header;