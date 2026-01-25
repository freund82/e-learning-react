import "./filters.css";
import {useState} from "react";

function Filters({coursesCategoryFilter, selectedFilter, onCategoryChange, getInstructors}) {

    console.log(getInstructors)

   const entries = Object.entries(coursesCategoryFilter);

   const handleCheckboxChange = (filterName, e) => onCategoryChange(filterName, e.target.checked)
   
    return (
            <div>
                <h2>Categories</h2>
                {/*Фильтр по категориям*/}
        {entries.map(([name, count]) => {
            const isChecked = selectedFilter.includes(name);
            return (
                <div>
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
                    
                </div>
            );
        })}

        {/*Фильтр по инструкторам*/}
        <h2>Instructors</h2>
        {getInstructors.map((name) => {
            const isChecked = selectedFilter.includes(name);
            return (
                <div>
                    <div key={name}>
                        <input 
                            type="checkbox" 
                            id={name} 
                            name={name} 
                            checked={isChecked} 
                            onChange={(e) => handleCheckboxChange(name, e)} 
                        />
                            <label htmlFor={name}>
                                {name}
                            </label>
                    </div>
                    
                </div>
            );
        })}
    </div>
    );
}

export default Filters;