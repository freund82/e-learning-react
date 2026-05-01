import "./navSubmenu.css"
import {NavLink} from "react-router-dom";
import Contact from "../Contact/Contact";
import FAQs from "../FAQs/FAQs";

function NavSubmenu() {
    return (
        <ul className="nav-submenu">
            <li className="nav-submenu__item">
                <NavLink to="/page/contact" className={({ isActive }) =>`header__link ${isActive ? "active" : ""}`}  href="#">Contact</NavLink>
                <NavLink to="/page/faqs" className={({ isActive }) =>`header__link ${isActive ? "active" : ""}`}  href="#">FAQs</NavLink>
            </li>
        </ul>
    );
}

export default NavSubmenu;