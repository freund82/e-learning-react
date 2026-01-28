import courses from "../../data/courses";
import "./filters.css";


function Filters({coursesCategoryFilter,
                    selectedCategories,
                    onCategoryChange,
                    onInstructorChange,
                    getInstructors,
                    selectedInstructors,
                    coursesPriceFilter,
                    getCoursePrice,
                    onCoursePriceTypeChange}) {


   const entries = Object.entries(coursesCategoryFilter);
   const instructors = Object.entries(getInstructors);
   const coursePriceType = Object.entries(getCoursePrice);

   const handleCheckboxChange = (filterName, e) => onCategoryChange(filterName, e.target.checked)
   const handleInstructorChange = (filterName, e) => onInstructorChange(filterName, e.target.checked)
   const handleCoursePriceTypeChange = (filterName, isChecked) => onCoursePriceTypeChange(filterName, isChecked)
    
    return (
            <div>
                <h2>Categories</h2>
                {/*Фильтр по категориям*/}
        {entries.map(([name, count]) => {
            const isChecked = selectedCategories.includes(name);
            return (
                <div key={name}>
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
        {instructors.map(([name, count]) => {
            const isChecked = selectedInstructors.includes(name);
            return (
                <div key={name}>
                    <div key={name}>
                        <input 
                            type="checkbox" 
                            id={name} 
                            name={name} 
                            checked={isChecked} 
                            onChange={(e) => handleInstructorChange(name, e)} 
                        />
                            <label htmlFor={name}>
                                {name} {count}
                            </label>
                    </div>
                    
                </div>
            );
        })}
        {/*Фильтр по типу цены курса*/}
        <h2>Price</h2>
        <div>
            <input
                type="checkbox"
                id="All"
                name="All"
                checked={coursesPriceFilter.length === 0}
                onChange={(e) => handleCoursePriceTypeChange("All", e.target.checked)}
            />
            <label htmlFor="All">
                All ({courses.length})
            </label>
        </div>
        {coursePriceType.map(([name, count]) => {
            const isChecked = coursesPriceFilter.includes(name);
            return (
                <div key={name}>
                    <div key={name}>
                        <input
                            type="checkbox"
                            id={name}
                            name={name}
                            checked={isChecked}
                            onChange={(e) => handleCoursePriceTypeChange(name, e.target.checked)}
                        />
                        <label htmlFor={name}>
                            {name} {count}
                        </label>
                    </div>
                </div>
            );
        })}
    </div>
    );
}

export default Filters;