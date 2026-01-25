import "./courses.css"
import Card from "../../components/shared/Card/Card.jsx"
import courses from "../../data/courses.js"
import Search from "../../components/shared/Search/Search.jsx"
import Pagination from "../../components/shared/Pagination/Pagination.jsx"
import { useState, useMemo } from "react"
import Filters from "../../components/Courses/Filters/Filters.jsx"



function Courses() {

    const [listStyle, setListStyle] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [coursesPerPage] = useState(6)

    // Переменные состояния для фильтров
    const [selectedFilter, setSelectedFilter] = useState([]);

// Функция для подсчета категорий
const getCategoryCounts = (courses) => {
  return courses.reduce((acc, course) => {
    const category = course.category || 'Без категории';
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});
};

// Использование:
const coursesCategoryFilter = getCategoryCounts(courses);
// Результат: { Shop: 2, Academy: 2, Business: 1 }

//Фильтрация курсов по выбранным категориям
    const filteredCourses = useMemo(() => {
        if(selectedFilter.length === 0) {
            return courses;
        }
        return courses.filter(course => 
            selectedFilter.includes(course.category)  // ← Убраны фигурные скобки!
        );
    }, [courses, selectedFilter]);

//Функция для обработки изменения категорий
const handleCategoryChange = (categoryName, isChecked) => {
  setSelectedFilter(prev => {
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
                            <h1>All Courses</h1>
                            <Search activeIconValue={activeIconValue}/>
                        </div>
                        <div className={`courses-row ${listStyle ? "list" : ""}`}>
                            <Card courses={currentCourses} isList={listStyle}/>
                        </div>
                        <div className="courses-pagination">
                            <Pagination
                            currentPage={currentPage}
                            coursesPerPage={coursesPerPage}
                            totalCourses={filteredCourses.length}
                            paginate={paginate}
                        />
                        </div>
                        <div className="right-section">
                            <h1>Course Category</h1>
                            <Filters coursesCategoryFilter={coursesCategoryFilter} selectedFilter={selectedFilter} onCategoryChange={handleCategoryChange}/>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default Courses