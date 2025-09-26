import "./footer.css";
import Logo from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import facebook from "../../../assets/icons/facebook.svg";
import pinterest from "../../../assets/icons/pinterest.svg";
import instagram from "../../../assets/icons/instagram.svg";
import twitter from "../../../assets/icons/twitter.svg";
import youtube from "../../../assets/icons/youtube.svg";

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__inner--block">
                        <div>
                            <img src={Logo} alt="logo" />
                            <p className="footer__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div>
                            <h4 className="footer__title">Get help</h4>
                                <ul className="footer__list">
                                    <li><Link to="/contact" className="footer__item--link">Contact Us</Link></li>
                                    <li><Link to="/articles" className="footer__item--link">Latest Articles</Link></li>
                                    <li><Link to="/faq" className="footer__item--link">FAQ</Link></li>
                                </ul>
                        </div>
                        <div>
                             <h4 className="footer__title">Programs</h4>
                                <ul className="footer__list">
                                    <li><Link to="" className="footer__item--link">Art & Design</Link></li>
                                    <li><Link to="" className="footer__item--link">Business</Link></li>
                                    <li><Link to="" className="footer__item--link">IT & Software</Link></li>
                                    <li><Link to="" className="footer__item--link">Languages</Link></li>
                                    <li><Link to="" className="footer__item--link">Programming</Link></li>
                                </ul>
                        </div>
                        <div className="footer__contact">
                             <h4 className="footer__title">Contact us</h4>
                             <p className="footer__address">Address: 2321 New Design Str, Lorem Ipsum10 <br></br> Hudson Yards, USA</p>
                             <p className="footer__phone">
                                <Link to="tel:+12325005678988" className="footer__item--link">Tel: + (123) 2500-567-8988</Link><br></br>
                                <Link to="mailto:supportlms@gmail.com" className="footer__item--link">Mail: supportlms@gmail.com</Link>
                             </p>
                            <div>
                               <span><img className="footer__social" src={facebook} alt="facebook"/></span><span><img className="footer__social" src={pinterest} alt="pinterest"/></span><span className="footer__social"><img src={instagram} alt="instagram" /></span> <span className="footer__social"><img src={twitter} alt="twitter" /></span> <span className="footer__social"><img src={youtube} alt="youtube" /></span>
                            </div> 
                        </div>
                    </div>

                    <div className="footer__copyright">
                        <p>Copyright © 2024 LearnPress LMS | Powered by ThimPress</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;