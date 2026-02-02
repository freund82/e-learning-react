import "./courses.css"
import Card from "../../components/shared/Card/Card.jsx"
import courses from "../../data/courses.js"
import Search from "../../components/shared/Search/Search.jsx"
import Pagination from "../../components/shared/Pagination/Pagination.jsx"
import { useState, useMemo } from "react"
import Filters from "../../components/Filters/Filters.jsx"



function Courses() {

    const [listStyle, setListStyle] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [coursesPerPage] = useState(6)

    // Переменные состояния для фильтров
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedInstructors, setSelectedInstructors] = useState([]);
    const [coursesPriceFilter, setCoursesPriceFilter] = useState([]);
    const [ratingFilter, setRatingFilter] = useState([]);
    const [levelsFilter, setLevelsFilter] = useState([]);

// Функция для подсчета категорий
const getCategoryCounts = (courses) => {
  return courses.reduce((acc, course) => {
    const category = course.category || 'Без категории';
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});
};

// Функция для подсчета авторов
const getInstructorsCounts = (courses) => {
  return courses.reduce((acc, course) => {
    const instructor = course.instructor || 'Без автора';
    acc[instructor] = (acc[instructor] || 0) + 1;
    return acc;
  }, {});
}

// Функция для подсчета ценовых категорий Free и Paid
const getCoursesPriceCounts = (courses) => {
  return courses.reduce((acc, course) => {
    const price = course.free ? 'Free' : 'Paid';
    acc[price] = (acc[price] || 0) + 1;
    return acc;
  }, {});
}

// Функция для подсчета рейтингов
const getRatingsCounts = useMemo(() => {
  return courses.reduce((acc, course) => {
    const avg = course.rating.average;
    
    // Диапазоны среднего рейтинга
    if (avg >= 4.5) {
      acc['5'] = (acc['5'] || 0) + 1; // 4.5 - 5.0
    } else if (avg >= 3.5 && avg < 4.5) {
      acc['4'] = (acc['4'] || 0) + 1; // 4.0 - 4.49
    } else if (avg >= 2.5 && avg < 3.5) {
      acc['3'] = (acc['3'] || 0) + 1; // 3.0 - 3.99
    } else if (avg >= 1.5 && avg < 2.5) {
      acc['2'] = (acc['2'] || 0) + 1; // 2.0 - 2.99
    } else if (avg >= 1.0 && avg < 1.5) {
      acc['1'] = (acc['1'] || 0) + 1; // 1.0 - 1.99
    }
    
    return acc;
  }, {});
}, [courses]);

const getLevelsCounts = (courses) => {
  return courses.reduce((acc, course) => {
    const level = course.levels;
    acc[level] = (acc[level] || 0) + 1;
    return acc;
  }, {});
}

// Использование:
const coursesCategoryFilter = getCategoryCounts(courses);
// Результат: { Shop: 2, Academy: 2, Business: 1 }

const getInstructors = getInstructorsCounts(courses);

//Количество курсов платных и количество бесплатных курсов. Пример: { Free: 2, Paid: 1 }
const getCoursePrice = getCoursesPriceCounts(courses);

const getLevels= getLevelsCounts(courses);

//Фильтрация курсов по выбранным категориям, инструкторам, цене и рейтингу
    const filteredCourses = useMemo(() => {
        return courses.filter(course => {
            // Фильтр по категориям
            const categoryMatch = selectedCategories.length === 0 || 
                selectedCategories.includes(course.category);
            
            // Фильтр по авторам
            const instructorMatch = selectedInstructors.length === 0 || 
                selectedInstructors.includes(course.instructor);

            // Фильтр по цене
            const priceMatch = coursesPriceFilter.length === 0 ||
                coursesPriceFilter.includes(course.free ? 'Free' : 'Paid');

            // Фильтр по рейтингу
             const ratingMatch = ratingFilter.length === 0 ||
      ratingFilter.some(ratingValue => {
        const rating = parseInt(ratingValue);
        const avg = course.rating.average;
        
        // Определяем диапазоны для каждой звезды
        switch(rating) {
          case 5:
            return avg >= 4.5; // 4.5 - 5.0
          case 4:
            return avg >= 3.5 && avg < 4.5; // 3.5 - 4.49
          case 3:
            return avg >= 2.5 && avg < 3.5; // 2.5 - 3.49
          case 2:
            return avg >= 1.5 && avg < 2.5; // 1.5 - 2.49
          case 1:
            return avg >= 1.0 && avg < 1.5; // 1.0 - 1.49
          default:
            return false;
        }
      });

      // Фильтр по уровням
      const levelMatch = levelsFilter.length === 0 || levelsFilter.includes(course.levels);
            
            // Курс должен соответствовать ВСЕМ выбранным фильтрам
            return categoryMatch && instructorMatch && priceMatch && ratingMatch && levelMatch;
        });
    }, [courses, selectedCategories, selectedInstructors, coursesPriceFilter, ratingFilter, levelsFilter]);

//Функция для обработки изменения категорий
const handleCategoryChange = (categoryName, isChecked) => {
  setSelectedCategories(prev => {
            if(isChecked) {
                // Добавление категории
                return [...prev, categoryName];
            } else {
                // Удаление категории
                return prev.filter(category => category !== categoryName);
            }
        });
        // Сбрасываем на первую страницу при изменении фильтра
        setCurrentPage(1);
    };

    const handleInstructorChange = (instructorName, isChecked) => {
        setSelectedInstructors(prev => {
            if(isChecked) {
                return [...prev, instructorName];
            } else {
                return prev.filter(instructor => instructor !== instructorName);
            }
        });
        setCurrentPage(1);
    };

    const handleCoursePriceTypeChange = (priceType, isChecked) => {
        // Если выбран "All"
        if (priceType === "All") {
            if (isChecked) {
                // Если "All" выбран, очищаем фильтр по цене
                setCoursesPriceFilter([]);
            }
        } else {
            // Обработка выбора "Free" или "Paid"
            setCoursesPriceFilter(prev => {
                if(isChecked) {
                return [...prev, priceType];
            } else {
                return prev.filter(free => free !== priceType);
            }
            });
        }
        setCurrentPage(1);
    };

  const handleRatingChange = (rating, isChecked) => {
  setRatingFilter(prev => {
    if(isChecked) {
      return [...prev, parseInt(rating)];
    } else {
      return prev.filter(r => r !== parseInt(rating));
    }
  });
  setCurrentPage(1);
};

const handleLevelChange = (level, isChecked) => {
   // Если выбран "All"
        if (level === "All") {
            if (isChecked) {
                // Если "All" выбран, очищаем фильтр по уровню
                setLevelsFilter([]);
            }
        } else {
          setLevelsFilter(prev => {
    if(isChecked) {
      return [...prev, level];
    } else {
      return prev.filter(l => l !== level);
    }
  });
        }
  setCurrentPage(1);
}

    const activeIconValue = (value) => {
       setListStyle(value);
    };

    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <section className="all-courses">
            <div className="container">
                    <div className="all-courses__inner">
                        <div className="left-section">
                            <h1 style={{fontSize: "var(--font-size32)"}}>All Courses</h1>
                            <Search activeIconValue={activeIconValue}/>
                        </div>
                        <div className={`courses-row ${listStyle ? "list" : ""}`}>
                            <Card courses={currentCourses} isList={listStyle} coursesCardWidth={48} borderRadius={3}/>
                        </div>
                        <div className="courses-pagination">
                            {filteredCourses.length > coursesPerPage && <Pagination
                            currentPage={currentPage}
                            coursesPerPage={coursesPerPage}
                            totalCourses={filteredCourses.length}
                            paginate={paginate}
                        />}
                        </div>
                        <div className="right-section">
                           
                            <Filters coursesCategoryFilter={coursesCategoryFilter}
                                     selectedCategories={selectedCategories}
                                     onCategoryChange={handleCategoryChange}
                                     selectedInstructors={selectedInstructors}
                                     getInstructors={getInstructors}
                                     onInstructorChange={handleInstructorChange}
                                     getCoursePrice={getCoursePrice}
                                     coursesPriceFilter={coursesPriceFilter}
                                     onCoursePriceTypeChange={handleCoursePriceTypeChange}
                                     getRatingsCounts={getRatingsCounts}
                                     ratingFilter={ratingFilter}
                                     onRatingChange={handleRatingChange}
                                     getLevels={getLevels}
                                     levelsFilter={levelsFilter}
                                     onLevelChange={handleLevelChange}/>
             
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default Courses