import "./error.css"
import error from "../../assets/images/Error.png"

function Error() {
    return (
        <div className="container">
            <div className="error">
                <h1>Error</h1>
                <img className="error__img" src={error} alt="Error" />
            </div>
        </div>
    );
}

export default Error;