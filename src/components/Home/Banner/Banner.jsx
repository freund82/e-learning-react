import "./banner.css"
import StudentSvg from "../../../assets/icons/student.svg"
import ButtonSecondary from "../../shared/ButtonSecondary/ButtonSecondary"
import ButtonPrimary from "../../shared/ButtonPrimary/ButtonPrimary"

function Banner() {
    return (
            <div className="banner">
                <div className="banner__inner">
                    <div className="banner__inner--block">
                        <div>
                            <img src={StudentSvg} alt="student" />
                        </div>
                        <div>
                            <h4 className="banner__inner--title">Let’s Start With Academy LMS</h4>
                        </div>
                    </div>
                    <div className="banner__inner--btn">
                        <div>
                            <ButtonSecondary variant={"orange"}>I'm A Student</ButtonSecondary>
                        </div>
                        <div>
                            <ButtonPrimary>Become An Instructor</ButtonPrimary>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Banner