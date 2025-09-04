import "./educationBanner.css"
import ButtonPrimary from "../../../components/shared/ButtonPrimary/ButtonPrimary"

function EducationBanner() {
    return (
        <div className="educationBanner">
            <div className="educationBanner__inner">
                <h3 className="educationBanner__suptitle">PROVIDING AMAZING</h3>
                <h2 className="educationBanner__title">Education Wordpress Theme</h2>
                <p className="educationBanner__text">The next level of LMS WordPress Theme. Learn anytime and anywhere.</p>
                <ButtonPrimary>Explorer course</ButtonPrimary>
            </div>
        </div>
    )
}

export default EducationBanner