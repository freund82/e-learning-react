import "./header.css";
import {NavLink, Link} from "react-router-dom";
import Logo from "../../../assets/images/logo.svg";
import Search from "../../../assets/images/search.svg";

function Header() {
  
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
                    </ul>
                    <div className="nav__burger--menu">
                       
                    </div>
                    <div className="header__auth">
                        <Link to="/login" className="header__link" href="#">Login</Link>
                        <span>/</span>
                        <Link to="/register" className="header__link" href="#">Register</Link>
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