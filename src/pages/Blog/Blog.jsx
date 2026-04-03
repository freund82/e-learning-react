import "./blog.css"
import Card from "../../components/shared/Card/Card.jsx"
import courses from "../../data/articles.js"
import Search from "../../components/shared/Search/Search.jsx"
import Pagination from "../../components/shared/Pagination/Pagination.jsx"
import { useState, useMemo } from "react"
import Filters from "../../components/Filters/Filters.jsx"

function Blog() {
    

    const [listStyle, setListStyle] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [coursesPerPage] = useState(6)

    //Последние три статьи
    const recentArticles = courses.slice(courses.length - 3)

    // Переменные состояния для фильтров
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);


    //Переменные состояния для поиска
    const [inputSearchValue, setSearchInputValue] = useState("");

    //Получаем теги из articles.js я переменную в import назвал courses а не articles
    const tags = [...new Set(courses.map(course => course.tags).flat())];
    

// Функция для подсчета категорий
const getCategoryCounts = (courses) => {
  return courses.reduce((acc, course) => {
    const category = course.category || 'Без категории';
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});
};



//Функция для получения текста из поля поиска
const getSearchText = (text) => {
  setCurrentPage(1); // Сбрасываем на первую страницу при изменении поискового запроса. Без этого если я на другой странице не ищет.
  setSearchInputValue(text);
}

// Использование:
const coursesCategoryFilter = getCategoryCounts(courses);
// Результат: { Shop: 2, Academy: 2, Business: 1 }


//Фильтрация курсов по выбранным категориям, инструкторам, цене и рейтингу
    const filteredCourses = useMemo(() => {
        return courses.filter(course => {
            // Фильтр по категориям
            const categoryMatch = selectedCategories.length === 0 ||
                selectedCategories.includes(course.category);

      // Фильтр по поиску
      const searchMatch = inputSearchValue.length === 0 ||
        course.title.toLowerCase().includes(inputSearchValue.toLowerCase()) ||
        course.instructor.toLowerCase().includes(inputSearchValue.toLowerCase()) ||
        course.category.toLowerCase().includes(inputSearchValue.toLowerCase());

      // Фильтр по тегам
      const tagMatch = selectedTags.length === 0 ||
        selectedTags.some(tag => course.tags.includes(tag));
            
            // Курс должен соответствовать ВСЕМ выбранным фильтрам
            return categoryMatch && searchMatch && tagMatch;
        });
    }, [courses, selectedCategories, inputSearchValue, selectedTags]);

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

//Функция для обработки изменения тегов
const handleTagChange = (newSelectedTags) => {
    setSelectedTags(newSelectedTags);
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
                            <h1 style={{fontSize: "var(--font-size32)"}}>All Articles</h1>
                            <Search activeIconValue={activeIconValue} getSearchText={getSearchText}/>
                        </div>
                        <div className={`courses-row ${listStyle ? "list" : ""}`}>
                            <Card type={"blogArticleCard"} courses={currentCourses} isList={listStyle} coursesCardWidth={48} priceBlockWidth={44} borderRadius={3}/>
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
                           
                            <Filters
                                     type={"blogFilters"}
                                     coursesCategoryFilter={coursesCategoryFilter}
                                     selectedCategories={selectedCategories}
                                     onCategoryChange={handleCategoryChange}
                                     recentArticles={recentArticles}
                                     tags={tags}
                                     onTagChange={handleTagChange}
                                     selectedTags={selectedTags}
                                     setSelectedTags={setSelectedTags}
                                     />
                        </div>
                    </div>
            </div>
        </section>
    )
}  

export default Blog