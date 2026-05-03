import "./navSubmenu.css";
import { NavLink } from "react-router-dom";

function NavSubmenu({ show }) {
    return (
        <ul className={`nav-submenu ${show ? "show" : ""}`}>
            <li className="nav-submenu__item">
                <NavLink
                    to="/page/contact"
                    className={({ isActive }) => `nav-submenu__link ${isActive ? "active" : ""}`}
                >
                    Contact
                </NavLink>
                <NavLink
                    to="/page/faqs"
                    className={({ isActive }) => `nav-submenu__link ${isActive ? "active" : ""}`}
                >
                    FAQs
                </NavLink>
            </li>
        </ul>
    );
}

export default NavSubmenu;