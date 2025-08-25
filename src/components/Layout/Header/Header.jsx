import "./header.css";
import { Link } from "react-router-dom";
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
                            <Link to="/" className="header__link" href="#">Home</Link>
                        </li>
                        <li className="header__item">
                            <Link to="/courses" className="header__link" href="#">Courses</Link>
                        </li>
                        <li className="header__item">
                            <Link to="/blog" className="header__link" href="#">Blog</Link>
                        </li>
                    </ul>
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