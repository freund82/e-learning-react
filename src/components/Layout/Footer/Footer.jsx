import "./footer.css";
import Logo from "../../../assets/images/logo.svg";

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
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                    </div>

                    <div>
                        <p className="footer__text">Copyright © 2022 EduPress</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;