import "./loginRegister.css"
import Login from "../../components/Login/Login"
import Register from "../../components/Register/Register"

function LoginRegister() {
    return (
        <div className="container">
            <div className="loginRegister">
                <Login />
                <Register />
            </div>
        </div>
    )
}

export default LoginRegister