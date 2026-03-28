import courses from "../../data/courses";
import "./filters.css";
import StarYellowSvg from "../../assets/icons/starYellow.svg"
import StarGreySvg from "../../assets/icons/starGrey.svg"


function Filters({
    type,
    coursesCategoryFilter,
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
    getLevels
}) {

        

    const entries = Object.entries(coursesCategoryFilter || {});
    const instructors = getInstructors && Object.entries(getInstructors);
    const coursePriceType = getCoursePrice && Object.entries(getCoursePrice);
    const levels = getLevels && Object.entries(getLevels);

    const handleCheckboxChange = (filterName, e) => onCategoryChange && onCategoryChange(filterName, e.target.checked)
    const handleInstructorChange = (filterName, e) => onInstructorChange && onInstructorChange(filterName, e.target.checked)
    const handleCoursePriceTypeChange = (filterName, isChecked) => onCoursePriceTypeChange && onCoursePriceTypeChange(filterName, isChecked)
    const handleRatingChange = (filterName, isChecked) => onRatingChange && onRatingChange(filterName, isChecked)
    const handleLevelChange = (filterName, isChecked) => onLevelChange && onLevelChange(filterName, isChecked)

    const isCourseFilters = type === "courseFilters"; // Проверяем, какой тип фильтров мы отображаем как понял в переменную записывается true или false
    const isBlogFilters = type === "blogFilters"; // Пока не используется так как фильтр по категориям общий а остальные фильтры используем только для страницы Courses.jsx

    
    return (
            <div className="filters">
                {/* Фильтр по категориям - показывается всегда */}
                <h2 className="filters__title firstTitle">Course Category</h2>
                {entries.map(([name, count]) => {
                    const isChecked = selectedCategories && selectedCategories.includes(name);
                    return (
                        <div key={name}>
                            <div className="filters__block" key={name}>
                                <div className="filters__checkbox">
                                <input className="filters__checkbox"
                                    type="checkbox"
                                    id={name}
                                    name={name}
                                    checked={isChecked || false}
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

                {/* Фильтр по инструкторам - только для курсов */}
                {isCourseFilters && instructors && (
                    <>
                        <h2 className="filters__title">Instructors</h2>
                        {instructors.map(([name, count]) => {
                            const isChecked = selectedInstructors && selectedInstructors.includes(name);
                            return (
                                <div key={name}>
                                    <div className="filters__block" key={name}>
                                        <div className="filters__checkbox">
                                            <input className="filters__checkbox"
                                                type="checkbox" 
                                                id={name} 
                                                name={name} 
                                                checked={isChecked || false} 
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
                    </>
                )}

                {/* Фильтр по типу цены курса - только для курсов */}
                {isCourseFilters && (
                    <>
                        <h2 className="filters__title">Price</h2>
                        <div>
                            <div className="filters__block">
                                <div className="filters__checkbox">
                                        <input
                                            type="checkbox"
                                            id="All"
                                            name="All"
                                            checked={coursesPriceFilter && coursesPriceFilter.length === 0}
                                            onChange={(e) => handleCoursePriceTypeChange("All", e.target.checked)}
                                        />
                                    <label className="filters__label" htmlFor="All">All</label>
                                </div>
                                    <span className={`filters__count ${coursesPriceFilter && coursesPriceFilter.length === 0 ? 'filters__count--checked' : ''}`}>{courses.length}</span>
                            </div>
                        </div>
                        {coursePriceType && coursePriceType.map(([name, count]) => {
                            const isChecked = coursesPriceFilter && coursesPriceFilter.includes(name);
                            return (
                                <div key={name}>
                                    <div className="filters__block"  key={name}>
                                    <div className="filters__checkbox">
                                        <input
                                            type="checkbox"
                                            id={name}
                                            name={name}
                                            checked={isChecked || false}
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
                    </>
                )}

                {/* Фильтр по Рейтингу - только для курсов */}
                {isCourseFilters && (
                    <>
                        <h2 className="filters__title">Review</h2>
                        <div className="rating">
                            {[5, 4, 3, 2, 1].map((stars) => {
                                const isChecked = ratingFilter && ratingFilter.includes(stars);
                                const count = getRatingsCounts && getRatingsCounts[stars] || 0;

                                return (
                                    <div className="filters__block" key={stars}>
                                        <div>
                                        <input 
                                            type="checkbox" 
                                            id={`stars${stars}`}
                                            value={stars}
                                            checked={isChecked || false}
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
                    </>
                )}

                {/* Фильтр по уровню - только для курсов */}
                {isCourseFilters && (
                    <>
                        <h2 className="filters__title">Level</h2>
                        <div>
                            <div className="filters__block">
                                <div className="filters__checkbox">
                                <input
                                    type="checkbox"
                                    id="All"
                                    name="All"
                                    checked={levelsFilter && levelsFilter.length === 0}
                                    onChange={(e) => handleLevelChange("All", e.target.checked)}
                                />
                                <label className="filters__label" htmlFor="All">
                                    All
                                </label>
                                </div>
                                <span className={`filters__count ${levelsFilter && levelsFilter.length === 0 ? 'filters__count--checked' : ''}`}>{courses.length}</span>
                            </div>
                        </div>
                        {levels && levels.filter(([level]) => level !== "All").map(([level, count]) => {
                            const isChecked = levelsFilter && levelsFilter.includes(level);
                            return (
                                <div key={level}>
                                    <div className="filters__block"  key={level}>
                                        <div className="filters__checkbox">
                                            <input
                                                type="checkbox"
                                                id={level}
                                                name={level}
                                                checked={isChecked || false}
                                                onChange={(e) => handleLevelChange(level, e.target.checked)}
                                            />
                                                <label className="filters__label" htmlFor={level}>{level}</label>
                                        </div>
                                                <span className={`filters__count ${isChecked ? 'filters__count--checked' : ''}`}>{count}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </>
                )}
            </div>
    );
}

export default Filters;