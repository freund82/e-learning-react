import "./register.css"
import { Link } from "react-router-dom"
import ButtonPrimary from "../shared/ButtonPrimary/ButtonPrimary"

function Register() {
    return (
        <div className="register">
            <h1 className="register__title">Register</h1>
            <form className="register__form" action="" method="post"> {/*Дописать action куда отправляем данные формы*/}
                <input className="register__input" type="email" placeholder="Email*" />
                <input className="register__input" type="text" placeholder="Username*" />
                <input className="register__input" type="password" placeholder="Password*" />
                <input className="register__input" type="password" placeholder="Сonfirm Password*" />
                <ButtonPrimary>Register</ButtonPrimary>
            </form>
        </div>
    )
}

export default Register