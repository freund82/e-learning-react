import "./filters.css";
import {useState} from "react";

function Filters({coursesCategoryFilter, selectedFilter, onCategoryChange}) {


   const entries = Object.entries(coursesCategoryFilter);

   const handleCheckboxChange = (filterName, e) => onCategoryChange(filterName, e.target.checked)
   
    return (
            <div>
        {entries.map(([name, count]) => {
            const isChecked = selectedFilter.includes(name);
            return (
                <div key={name}>
                    <input 
                        type="checkbox" 
                        id={name} 
                        name={name} 
                        checked={isChecked} 
                        onChange={(e) => handleCheckboxChange(name, e)} 
                    />
                    <label htmlFor={name}>
                        {name} {count}
                    </label>
                </div>
            );
        })}
    </div>
    );
}

export default Filters;