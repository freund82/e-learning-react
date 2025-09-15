import "./articles.css"
import {useState} from "react"
import {Link} from "react-router-dom"
import articles from "../../../data/articles"
import ButtonSecondary from "../../shared/ButtonSecondary/ButtonSecondary"
import CalendarIcon from "../../../assets/icons/calendar.svg"
import { formatDate } from "../../../utils/formatDate"
 

function Articles() {
    
    const [showAll, setShowAll] = useState(false)

    const visibleArticles = showAll ? articles : articles.slice(0, 3);

    return (
        <div className="articles">
                <div className="articles__inner">
                    <div className="articles__inner--block">
                        <div className="articles__inner--title">
                              <h2 className="articles__title">Latest articles</h2>
                              <p className="articles__text">Explore our Free Acticles</p>
                        </div>
                    <div className="articles__btn">
                         <ButtonSecondary showAllCategories={() => setShowAll(true)}>All Articles</ButtonSecondary>
                    </div>
                    </div>
                    <div className="articles__list">
                        {
                            visibleArticles.map((item) => (
                                <div className="articles__item--card" key={item.id}>
                                    <img className="articles__item--img" src={item.img} alt={item.title} />
                                    <div className="articles__item--inner">
                                        <h3 className="articles__item--title">{item.title}</h3>
                                        <div className="articles__item--info">
                                            <img src={CalendarIcon} alt="calendar" />
                                            <span className="articles__item--text">{formatDate(item.date)}</span>
                                        </div>
                                        <div className="articles__item--text">
                                            <span className="articles__item--text">{item.text.length>68 ? item.text.slice(0, 68) + "..." : item.text}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
        </div>
    )
}

export default Articles