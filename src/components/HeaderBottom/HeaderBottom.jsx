import "./headerBottom.css";
import { useLocation } from "react-router-dom";


function HeaderBottom({courseTitle }) {
    const currentLocation = useLocation();
    
    let pathName = "";
    
    if (currentLocation.pathname.startsWith('/courses/') && courseTitle) {
        pathName = `Course`
    } else if (currentLocation.pathname.startsWith('/courses')) {
        pathName = 'Courses';
    } else if (currentLocation.pathname.startsWith('/blog')) {
        pathName = 'Blog';
    }
    
    return (
        <div className="header__bottom">
            <div className="container">
                <div className="header__bottom--inner">
                     <span className="header__bottom--text">Homepage </span> <svg className="arrowIcon" width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.175 0L0 1.175L3.81667 5L0 8.825L1.175 10L6.175 5L1.175 0Z"/>
</svg><span className="header__bottom--text pathText">{pathName}<svg className={`arrowIcon ${pathName === 'Courses' ? 'noIcon' : ''}`} width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.175 0L0 1.175L3.81667 5L0 8.825L1.175 10L6.175 5L1.175 0Z"/>
</svg>{courseTitle}</span>
                </div>
            </div>
        </div>
    );
}

export default HeaderBottom;