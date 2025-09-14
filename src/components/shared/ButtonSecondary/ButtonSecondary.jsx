import "./buttonSecondary.css";

function ButtonSecondary({ children, showAllCategories, variant}) {
    return <button className={`button-secondary ${variant}`} onClick={showAllCategories} >{children}</button>;
}

export default ButtonSecondary;