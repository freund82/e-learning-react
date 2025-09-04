import "./growUs.css"
import ButtonPrimary from "../../shared/ButtonPrimary/ButtonPrimary"

function GrowUs() {
    return (
            <div className="growUs">
                <div className="growUs__inner">
                    <h2 className="growUs__title">Grow us your skill <br></br> with LearnPress LMS</h2>
                    <p className="growUs__text">We denounce with righteous indignation and dislike men who are so beguiled and demoralized that cannot trouble.</p>
                    <ul className="growUs__list">
                        <li>Certification</li>
                        <li>Certification</li>
                        <li>Certification</li>
                        <li>Certification</li>
                    </ul>
                    <div>
                         <ButtonPrimary>Explorer course</ButtonPrimary>
                    </div>
                </div>
            </div>
    )
}

export default GrowUs