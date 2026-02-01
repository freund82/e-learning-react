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
                    onCoursePriceTypeChange,
                    ratingFilter,
                    ratingsCounts,
                    onRatingChange,}) {
             

   const entries = Object.entries(coursesCategoryFilter);
   const instructors = Object.entries(getInstructors);
   const coursePriceType = Object.entries(getCoursePrice);

   const handleCheckboxChange = (filterName, e) => onCategoryChange(filterName, e.target.checked)
   const handleInstructorChange = (filterName, e) => onInstructorChange(filterName, e.target.checked)
   const handleCoursePriceTypeChange = (filterName, isChecked) => onCoursePriceTypeChange(filterName, isChecked)
   const handleRatingChange = (filterName, isChecked) => onRatingChange(filterName, isChecked)


    
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
  {[5, 4, 3, 2, 1].map((stars) => {
    const isChecked = ratingFilter.includes(stars);
    const count = ratingsCounts[stars] || 0;
    
    // Текстовое описание диапазона
    const getRangeLabel = (stars) => {
      switch(stars) {
        case 5: return '4.5 - 5.0';
        case 4: return '4.0 - 4.49';
        case 3: return '3.0 - 3.99';
        case 2: return '2.0 - 2.99';
        case 1: return '1.0 - 1.99';
        default: return '';
      }
    };
    
    return (
      <div key={stars}>
        <input 
          type="checkbox" 
          id={`stars${stars}`}
          value={stars}
          checked={isChecked}
          onChange={(e) => handleRatingChange(e.target.value, e.target.checked)}
        />
        <label htmlFor={`stars${stars}`}>
          {/* Звезды */}
          <span style={{ display: 'inline-block', marginRight: '8px' }}>
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src={index < stars ? StarYellowSvg : StarGreySvg}
                alt={index < stars ? "★" : "☆"}
                style={{ width: '16px', height: '16px', marginRight: '1px' }}
              />
            ))}
          </span>
          {/* Диапазон и счетчик */}
          <span>
            ({getRangeLabel(stars)}) <strong>({count})</strong>
          </span>
        </label>
      </div>
    );
  })}
</div>
    </div>
    );
}

export default Filters;