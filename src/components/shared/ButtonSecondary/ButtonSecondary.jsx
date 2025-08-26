import "./buttonSecondary.css";

function ButtonSecondary({ children, showAllCategories }) {
    return <button className="button-secondary" onClick={showAllCategories}>{children}</button>;
}

export default ButtonSecondary;