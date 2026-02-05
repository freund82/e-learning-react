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
                    getRatingsCounts,
                    onRatingChange,
                    levelsFilter,
                    onLevelChange,
                    getLevels}) {
             

   const entries = Object.entries(coursesCategoryFilter);
   const instructors = Object.entries(getInstructors);
   const coursePriceType = Object.entries(getCoursePrice);
   const levels = Object.entries(getLevels);

   const handleCheckboxChange = (filterName, e) => onCategoryChange(filterName, e.target.checked)
   const handleInstructorChange = (filterName, e) => onInstructorChange(filterName, e.target.checked)
   const handleCoursePriceTypeChange = (filterName, isChecked) => onCoursePriceTypeChange(filterName, isChecked)
   const handleRatingChange = (filterName, isChecked) => onRatingChange(filterName, isChecked)
   const handleLevelChange = (filterName, isChecked) => onLevelChange(filterName, isChecked)


    
    return (
            <div className="filters">
                <h2 className="filters__title firstTitle">Course Category</h2>
                {/*Фильтр по категориям*/}
        {entries.map(([name, count]) => {
            const isChecked = selectedCategories.includes(name);
            return (
                <div key={name}>
                    <div className="filters__block" key={name}>
                        <div className="filters__checkbox">
                        <input className="filters__checkbox"
                            type="checkbox"
                            id={name}
                            name={name}
                            checked={isChecked}
                            onChange={(e) => handleCheckboxChange(name, e)}
                        />
                            <label className="filters__label" htmlFor={name}>
                                {name}
                            </label>
                            </div>
                                <span className={`filters__count ${isChecked ? 'filters__count--checked' : ''}`}>{count}</span>
                    </div>
                    
                </div>
            );
        })}

        {/*Фильтр по инструкторам*/}
        <h2 className="filters__title">Instructors</h2>
        {instructors.map(([name, count]) => {
            const isChecked = selectedInstructors.includes(name);
            return (
                <div key={name}>
                    <div className="filters__block" key={name}>
                        <div className="filters__checkbox">
                            <input className="filters__checkbox"
                                type="checkbox" 
                                id={name} 
                                name={name} 
                                checked={isChecked} 
                                onChange={(e) => handleInstructorChange(name, e)} 
                            />
                                <label className="filters__label" htmlFor={name}>
                                    {name}
                                </label>
                        </div>
                                <span className={`filters__count ${isChecked ? 'filters__count--checked' : ''}`}>{count}</span>
                    </div>
                    
                </div>
            );
        })}
        {/*Фильтр по типу цены курса*/}
        <h2 className="filters__title">Price</h2>
        <div>
            <div className="filters__block">
                <div className="filters__checkbox">
                        <input
                            type="checkbox"
                            id="All"
                            name="All"
                            checked={coursesPriceFilter.length === 0}
                            onChange={(e) => handleCoursePriceTypeChange("All", e.target.checked)}
                        />
                    <label className="filters__label" htmlFor="All">All</label>
                </div>
                    <span className={`filters__count ${coursesPriceFilter.length === 0 ? 'filters__count--checked' : ''}`}>{courses.length}</span>
            </div>
        </div>
        {coursePriceType.map(([name, count]) => {
            const isChecked = coursesPriceFilter.includes(name);
            return (
                <div key={name}>
                    <div className="filters__block"  key={name}>
                    <div className="filters__checkbox">
                        <input
                            type="checkbox"
                            id={name}
                            name={name}
                            checked={isChecked}
                            onChange={(e) => handleCoursePriceTypeChange(name, e.target.checked)}
                        />
                        <label className="filters__label" htmlFor={name}>
                            {name}
                        </label>
                        </div>
                        <span className={`filters__count ${isChecked ? 'filters__count--checked' : ''}`}>{count}</span>
                    </div>
                </div>
            );
        })}
        {/*Фильтр по Рейтингу*/}
        <h2 className="filters__title">Review</h2>
      <div className="rating">
  {[5, 4, 3, 2, 1].map((stars) => {
    const isChecked = ratingFilter.includes(stars);
    const count = getRatingsCounts[stars] || 0;

    return (
      <div className="filters__block" key={stars}>
        <div>
        <input 
          type="checkbox" 
          id={`stars${stars}`}
          value={stars}
          checked={isChecked}
          onChange={(e) => handleRatingChange(e.target.value, e.target.checked)}
        />
        <label className="filters__label" htmlFor={`stars${stars}`}>
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
        </label>
        </div>
         <span className={`filters__count ${isChecked ? 'filters__count--checked' : ''}`}>{count}</span>
      </div>
    );
  })}
</div>
{/*Фильтр по уровню*/}
<h2 className="filters__title">Level</h2>
        <div>
           <div className="filters__block">
            <div className="filters__checkbox">
            <input
                type="checkbox"
                id="All"
                name="All"
                checked={levelsFilter.length === 0}
                onChange={(e) => handleLevelChange("All", e.target.checked)}
            />
            <label className="filters__label" htmlFor="All">
                All
            </label>
            </div>
            <span className={`filters__count ${levelsFilter.length === 0 ? 'filters__count--checked' : ''}`}>{courses.length}</span>
            </div>
        </div>
{levels.filter(([level]) => level !== "All").map(([level, count]) => {
  const isChecked = levelsFilter.includes(level);
  return (
    <div key={level}>
        <div className="filters__block"  key={level}>
            <div className="filters__checkbox">
                <input
                    type="checkbox"
                    id={level}
                    name={level}
                    checked={isChecked}
                    onChange={(e) => handleLevelChange(level, e.target.checked)}
                />
                    <label className="filters__label" htmlFor={level}>{level}</label>
            </div>
                    <span className={`filters__count ${isChecked ? 'filters__count--checked' : ''}`}>{count}</span>
        </div>
    </div>
  );
})}
    </div>
    );
}

export default Filters;