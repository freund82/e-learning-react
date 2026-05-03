import "./navSubmenu.css";
import { NavLink } from "react-router-dom";

function NavSubmenu({ show, onLinkClick }) {
    return (
        <ul className={`nav-submenu mobile-nav-submenu ${show ? "show" : ""}`}>
            <li className="nav-submenu__item">
                <NavLink
                    to="/page/contact"
                    className={({ isActive }) => `nav-submenu__link ${isActive ? "active" : ""}`}
                    onClick={onLinkClick}
                >
                    Contact
                </NavLink>
            </li>
            <li className="nav-submenu__item">
                <NavLink
                    to="/page/faqs"
                    className={({ isActive }) => `nav-submenu__link ${isActive ? "active" : ""}`}
                    onClick={onLinkClick}
                >
                    FAQs
                </NavLink>
            </li>
        </ul>
    );
}

export default NavSubmenu;