import "./login.css"
import {Link} from "react-router-dom"
import ButtonPrimary from "../shared/ButtonPrimary/ButtonPrimary"

function Login() {
    return (
        <div className="login">
            <h1 className="login__title">Login</h1>
            <form className="login__form" action="" method="post"> {/*Дописать action куда отправляем данные формы*/}
                <input className="login__input" type="text" placeholder="Email or username*" />
                <input className="login__input" type="password" placeholder="Password*" />
                <div className="login__checkbox">
                    <input type="checkbox" id="remember" name="remember" />
                    <label htmlFor="remember">Remember Me</label>
                </div>
                <ButtonPrimary>Login</ButtonPrimary>
                <Link className="login__link" to="/">Lost your password?</Link>
            </form>
        </div>
    )
}

export default Login