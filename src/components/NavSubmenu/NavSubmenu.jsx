import "./navSubmenu.css"
import {NavLink} from "react-router-dom";
import Contact from "../Contact/Contact";

function NavSubmenu() {
    return (
        <ul className="nav-submenu">
            <li className="nav-submenu__item">
                <NavLink to="/page/contact" className={({ isActive }) =>`header__link ${isActive ? "active" : ""}`}  href="#">Contact</NavLink>
            </li>
        </ul>
    );
}

export default NavSubmenu;