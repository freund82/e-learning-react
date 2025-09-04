import "./learnPressBanner.css"
import ButtonPrimary from "../../shared/ButtonPrimary/ButtonPrimary"

function LearnPressBanner() {
    return (
        <div className="learnPressBanner">
            <div className="learnPressBanner__inner">
                <div className="learnPressBanner__inner--block">
                    <h5 className="learnPressBanner__suptitle">GET MORE POWER FROM</h5>
                    <h2 className="learnPressBanner__title">LearnPress Add-Ons</h2>
                    <p className="learnPressBanner__text">The next level of LearnPress - LMS WordPress Plugin. More Powerful, Flexible and Magical Inside.</p>
                    <ButtonPrimary>Explorer course</ButtonPrimary>
                </div>
            </div>
        </div>
    )
}

export default LearnPressBanner