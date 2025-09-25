import "./articles.css"
import {useState} from "react"
import articles from "../../../data/articles"
import ButtonSecondary from "../../shared/ButtonSecondary/ButtonSecondary"
import CalendarIcon from "../../../assets/icons/calendar.svg"
import { formatDate } from "../../../utils/formatDate"

function Articles() {
    const [showAll, setShowAll] = useState(false)
    const [expandedArticles, setExpandedArticles] = useState({})

    const visibleArticles = showAll ? articles : articles.slice(0, 3)


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

    return (
        <div className="articles">
            <div className="articles__inner">
                <div className="articles__inner--block">
                    <div className="articles__inner--title">
                        <h2 className="articles__title">Latest articles</h2>
                        <p className="articles__text">Explore our Free Articles</p>
                    </div>
                    <div className="articles__btn">
                        <ButtonSecondary showAllCategories={() => setShowAll(true)}>All Articles</ButtonSecondary>
                    </div>
                </div>
                <div className="articles__list">
                    {visibleArticles.map((item) => (
                        <div className={`articles__item--card ${item.text.length > 68 ? (expandedArticles[item.id] ? 'expanded' : 'collapsed') : ''}`}  key={item.id}>
                            <img className="articles__item--img" src={item.img} alt={item.title} />
                            <div className="articles__item--inner">
                                <h3 className="articles__item--title">{item.title}</h3>
                                <div className="articles__item--info">
                                    <img src={CalendarIcon} alt="calendar" />
                                    <span className="articles__item--text">{formatDate(item.date)}</span>
                                </div>
                                <div className="articles__item--text">
                                    <span 
                                        className="articles__item--text"
                                        onClick={() => handleShow(item.id)}
                                        style={{cursor: 'pointer'}}
                                    >
                                        {getDisplayText(item)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Articles