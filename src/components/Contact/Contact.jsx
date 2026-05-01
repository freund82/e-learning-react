import "./contact.css"
import {Link} from "react-router-dom";
import Map from "../../assets/images/Map.png"
import CommentsForm from "../CommentsForm/CommentsForm";

function Contact() {
    return (
        <div className="container">
            <div className="contact">
                <div>
                    <h1 className="contact__title">Need a Direct Line?</h1>
                    <p className="contact__text">Cras massa et odio donec faucibus in. Vitae pretium massa dolor ullamcorper lectus elit quam.</p>
                    <div className="contact__inner">
                        <div className="contact__icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.82667 10.3867C6.74667 14.16 9.84 17.24 13.6133 19.1733L16.5467 16.24C16.9067 15.88 17.44 15.76 17.9067 15.92C19.4 16.4133 21.0133 16.68 22.6667 16.68C23.4 16.68 24 17.28 24 18.0133V22.6667C24 23.4 23.4 24 22.6667 24C10.1467 24 0 13.8533 0 1.33333C0 0.6 0.6 0 1.33333 0H6C6.73333 0 7.33333 0.6 7.33333 1.33333C7.33333 3 7.6 4.6 8.09333 6.09333C8.24 6.56 8.13333 7.08 7.76 7.45333L4.82667 10.3867Z" fill="#FF782D"/>
                            </svg>
                        </div>
                        <div className="contact__info">
                            <p className="contact__info--title">Phone</p>
                            <Link to="tel:1234567890" className="contact__info--link">(123) 456 7890</Link>
                        </div>
                    </div>
                    <div className="contact__inner">
                        <div className="contact__icon">
                            <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 0H2.66667C1.2 0 0.0133333 1.2 0.0133333 2.66667L0 18.6667C0 20.1333 1.2 21.3333 2.66667 21.3333H24C25.4667 21.3333 26.6667 20.1333 26.6667 18.6667V2.66667C26.6667 1.2 25.4667 0 24 0ZM24 5.33333L13.3333 12L2.66667 5.33333V2.66667L13.3333 9.33333L24 2.66667V5.33333Z" fill="#FF782D"/>
                            </svg>
                        </div>
                        <div className="contact__info">
                            <p className="contact__info--title">Email</p>
                            <Link to="mailto:contact@thimpress.com" className="contact__info--link">contact@thimpress.com</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={Map} alt="Map" />
                </div>
            </div>
           <CommentsForm contactLeaveAComment="contactLeaveAComment" inputContactWidth="inputContactWidth" title="Contact Us"/>
        </div>
    );
}

export default Contact;