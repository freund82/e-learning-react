import courses from "../../data/courses";
import "./filters.css";
import StarYellowSvg from "../../assets/icons/starYellow.svg"
import StarGreySvg from "../../assets/icons/starGrey.svg"


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
        {/*Рейтинг*/}
        <h2>Rating</h2>
        <div className="rating">
            {/*Пять звезд*/}
            <div>
                <span>
                    <input type="checkbox" id="stars5" name="stars"  value="5" onChange={(e) => console.log(e.target.checked, e.target.value)} />
                    <label htmlFor="stars">
                            <span>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <img
                                        key={star}
                                        src={StarYellowSvg}
                                        alt={`Star ${star}`}
                                    />
                                ))}
                            </span>
                    </label>
                </span>
            </div>
            {/*Четыре звезды*/}
            <div>
                <span>
                    <input type="checkbox" id="stars4" name="stars" value="4" onChange={(e) => console.log(e.target.checked, e.target.value)} />
                    <label htmlFor="stars">
                            <span>
                                {[1, 2, 3, 4, 5].map((star, index) => (
                                    index < 4 ? (
                                        <img
                                            key={star}
                                            src={StarYellowSvg}
                                            alt={`Star ${star}`}
                                        />
                                        ) : (
                                            <img
                                                key={star}
                                                src={StarGreySvg}
                                                alt={`Star ${star}`}
                                            />
                                        )
                                    ))}
                            </span>
                    </label>
                </span>
            </div>
            {/*Три звезды*/}
            <div>
                <span>
                    <input type="checkbox" id="stars3" name="stars" value="3" onChange={(e) => console.log(e.target.checked, e.target.value)} />
                    <label htmlFor="stars">
                            <span>
                                {[1, 2, 3, 4, 5].map((star, index) => (
                                    index < 3 ? (
                                        <img
                                            key={star}
                                            src={StarYellowSvg}
                                            alt={`Star ${star}`}
                                        />
                                        ) : (
                                            <img
                                                key={star}
                                                src={StarGreySvg}
                                                alt={`Star ${star}`}
                                            />
                                        )
                                    ))}
                            </span>
                    </label>
                </span>
            </div>
            {/*Две звезды*/}
            <div>
                <span>
                    <input type="checkbox" id="stars2" name="stars" value="2" onChange={(e) => console.log(e.target.checked, e.target.value)}/>
                    <label htmlFor="stars">
                            <span>
                                {[1, 2, 3, 4, 5].map((star, index) => (
                                    index < 2 ? (
                                        <img
                                            key={star}
                                            src={StarYellowSvg}
                                            alt={`Star ${star}`}
                                        />
                                        ) : (
                                            <img
                                                key={star}
                                                src={StarGreySvg}
                                                alt={`Star ${star}`}
                                            />
                                        )
                                    ))}
                            </span>
                    </label>
                </span>
            </div>
            {/*Одна звезда*/}
            <div>
                <span>
                    <input type="checkbox" id="stars1" name="stars" value="1" onChange={(e) => console.log(e.target.checked, e.target.value)}/>
                    <label htmlFor="stars">
                            <span>
                                {[1, 2, 3, 4, 5].map((star, index) => (
                                    index < 1 ? (
                                        <img
                                            key={star}
                                            src={StarYellowSvg}
                                            alt={`Star ${star}`}
                                        />
                                        ) : (
                                            <img
                                                key={star}
                                                src={StarGreySvg}
                                                alt={`Star ${star}`}
                                            />
                                        )
                                    ))}
                            </span>
                    </label>
                </span>
            </div>
        </div>
    </div>
    );
}

export default Filters;