import "./card.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import WeeksIcon from "../../../assets/icons/weeks.svg"
import StudentsIcon from "../../../assets/icons/students.svg"
import GraphIcon from "../../../assets/icons/graph.svg"
import LessonsIcon from "../../../assets/icons/lessons.svg"
import Calendar from "../../../assets/icons/calendar.svg"
import {formatDate} from "../../../utils/formatDate"

function Card({ courses, isList, coursesCardWidth, borderRadius, priceBlockWidth, type, featuredCoursesHeight, featuredCoursesWidth }) {
   

    const renderCourseCard = () => {
        return courses.map((item) => (
            <div className={`cardCourses__item--card cardCourses__item--cardHeight ${featuredCoursesHeight&& "cardCourses__item--featuredCoursesHeight"} ${isList && "cardCourses__item--list"}`} key={item.id} style={{ maxWidth: `${coursesCardWidth}rem`, borderRadius: `${borderRadius}rem` }}>
                <img className={`cardCourses__item--img ${isList && "cardCourses__item--listImg"}`} src={item.img} alt={item.title} />
                <div className="cardCourses__item--inner">
                    <p>by <span className="cardCourses__item--author">{item.author}</span></p>
                    <h3 className={`cardCourses__item--title ${featuredCoursesWidth && "cardCourses__item--featuredCoursesWidth"}`}>{item.title}</h3>
                    <div className="cardCourses__item--info">
                        <div className="cardCourses__item--block">
                            <img src={WeeksIcon} alt="weeks" />
                            <span className="cardCourses__item--text">{item.length} Weeks</span>
                        </div>
                        <div className="cardCourses__item--block">
                            <img src={StudentsIcon} alt="students" />
                            <span className="cardCourses__item--text">{item.students} Students</span>
                        </div>
                        {isList && 
                            <>
                                <div className="cardCourses__item--block">
                                    <img src={GraphIcon} alt="levels" />
                                    <span className="cardCourses__item--text">{item.levels !== "All" ? item.levels : "All Levels"}</span>
                                </div>
                                <div className="cardCourses__item--block">
                                    <img src={LessonsIcon} alt="lessons" />
                                    <span className="cardCourses__item--text">{item.lessons} Lessons</span>
                                </div>
                            </>
                        }
                    </div>
                    <div className={`cardCourses__item--price ${isList && "cardCourses__item--listPrice"}`} style={{ maxWidth: `${priceBlockWidth}rem` }}>
                        <div>
                            <span className="cardCourses__item--text price" style={item.free || !!item.newPrice ? { textDecoration: "line-through", fontSize: "var(--font-size18)", color: "var(--gray)", fontWeight: "400" } : undefined}>
                                ${item.price.toFixed(1)}
                            </span>
                            {item.free == true && <span className="cardCourses__item--text" style={{ marginLeft: "0.6rem", color: "var(--green)", fontSize: "var(--font-size18)", fontWeight: "600" }}>Free</span>}
                            {item.newPrice && <span className="cardCourses__item--text" style={{ color: "var(--red)", fontSize: "var(--font-size18)", fontWeight: "600", marginLeft: "0.6rem" }}>${item.newPrice.toFixed(1)}</span>}
                        </div>
                        <Link to={`/courses/${item.id}`} className="cardCourses__item--link" style={{ fontSize: "var(--font-size18)", fontWeight: "600", color: "var(--black)" }}>View More</Link>
                    </div>
                </div>
            </div>
        ))
    }

    //Для раскрытия текста в карточках на странице "Blog"

    const [expandedArticles, setExpandedArticles] = useState({})
      const handleShow = (id) => {
        setExpandedArticles(prev => ({
            ...prev,
            [id]: !prev[id] // переключаем состояние для конкретной статьи (и получается если было значение true, то станет false и наоборот)
        }))
    }

    const getDisplayText = (item) => {
        // Если текст короткий, всегда показываем полностью
        if (item.text.length <= 68) return item.text
        
        // Если статья развернута, показываем полный текст
        if (expandedArticles[item.id]) return item.text
        
        // Иначе показываем сокращенный текст
        return item.text.slice(0, 68) + "..."

    }

    const renderBlogArticleCard = () => {
        return courses.map((item) => (
            
            <div className={`cardCourses__item--card ${isList && "cardCourses__item--list"}`} key={item.id} style={{ maxWidth: `${coursesCardWidth}rem`, borderRadius: `${borderRadius}rem` }}>
                <img className={`cardCourses__item--img ${isList && "cardCourses__item--listImg"}`} src={item.img} alt={item.title} />
                <div className={`cardCourses__item--inner blogCard__item--inner ${isList && "blogCard__item--innerList"}`}>
                    <Link to={`/blog/${item.id}`} className="cardCourses__item--link" key={item.id}>
                    <h3 className="cardCourses__item--title blogCard__item--title">{item.title}</h3>
                    </Link>
                    <p className="cardCourses__item--date"> <img className="cardCourses__item--calendar" src={Calendar} alt="calendar" />{formatDate(item.date)}</p>
                    <p className="cardCourses__item--blogArticleText" onClick={() => handleShow(item.id)} style={{cursor: 'pointer'}}>{getDisplayText(item)}</p>
                </div>
            </div>
        ))
    }

    return (
        <div className="cardCourses">
            <div className="cardCourses__inner">
                <div className="cardCourses__inner--block">
                </div>
                <div className="cardCourses__list">
                    {(() => {
                        switch(type) {
                            case "courseCard":
                                return renderCourseCard()
                            case "blogArticleCard":
                                return renderBlogArticleCard()
                            default:
                                return null
                        }
                    })()}
                </div>
            </div>
        </div>
    )
}

export default Card