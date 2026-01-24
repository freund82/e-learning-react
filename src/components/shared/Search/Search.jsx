import "./search.css"
import { useState } from "react"
import SearchIcon from "../../../assets/icons/search.svg"

function Search({activeIconValue}) {

    const [activeIcon, setActiveIcon] = useState(false);

    const handleIconClick = (value) => {
        setActiveIcon(value);
        activeIconValue(value);
    };

    return (
        <div className="search">
            <div className="search__input-block">
                <input className="search__input" type="text" placeholder="Search" />
                <img className="search__icon" src={SearchIcon} alt="search" />
            </div>
            <div className="search__style-blocks">
                <svg
                    onClick={() => handleIconClick(false)}
                    className={`svgIconBlock ${!activeIcon ? 'activeSearch' : ''}`}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  
                >
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.5 2.5V9.16667H9.16667V2.5H2.5ZM2.5 10.8333V17.5H9.16667V10.8333H2.5ZM10.8333 2.5V9.16667H17.5V2.5H10.8333ZM10.8333 10.8333V17.5H17.5V10.8333H10.8333Z" />
                </svg>
                <svg
                    onClick={() => handleIconClick(true)}
                    className={`svgIconList ${activeIcon ? 'activeSearch' : ''}`}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_2202_1589)">
                        <path d="M2.2915 11.0417H4.58317V8.75002H2.2915V11.0417ZM2.2915 15H4.58317V12.7084H2.2915V15ZM2.2915 7.08335H4.58317V4.79169H2.2915V7.08335ZM6.24984 11.0417H17.7082V8.75002H6.24984V11.0417ZM6.24984 15H17.7082V12.7084H6.24984V15ZM6.24984 4.79169V7.08335H17.7082V4.79169H6.24984Z"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_2202_1589">
                            <rect width="20" height="20" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
        
        </div>
    );
}

export default Search;