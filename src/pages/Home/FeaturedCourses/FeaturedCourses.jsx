import "./featuredCourses.css"
import {useState} from "react"
import featuredCourses from "../../../data/featuredCourses"
import ButtonSecondary from "../../../components/shared/ButtonSecondary/ButtonSecondary"
import WeeksIcon from "../../../assets/icons/weeks.svg"
 

function FeaturedCourses() {
    
    const [showAll, setShowAll] = useState(false)

    const visibleFeaturedCourses = showAll ? featuredCourses : featuredCourses.slice(0, 6);

    return (
        <div className="featuredCourses">
                <div className="featuredCourses__inner">
                    <div className="featuredCourses__inner--block">
                        <div className="featuredCourses__inner--title">
                              <h2 className="featuredCourses__title">Featured Courses</h2>
                              <p className="featuredCourses__text">Explore our Popular Courses</p>
                        </div>
                    <div className="featuredCourses__btn">
                         <ButtonSecondary showAllCategories={() => setShowAll(true)}>All Categories</ButtonSecondary>
                    </div>
                    </div>
                    <div className="featuredCourses__list">
                        {
                            visibleFeaturedCourses.map((item) => (
                                <div className="featuredCourses__item--card" key={item.id}>
                                    <img className="featuredCourses__item--img" src={item.img} alt={item.title} />
                                    <div className="featuredCourses__item--inner">
                                        <p>by {item.author}</p>
                                        <h3 className="featuredCourses__item--title">{item.title}</h3>
                                        <span className="featuredCourses__item--text"><img src={WeeksIcon} alt="weeks" />{item.weeks} Weeks</span>
                                        <span className="featuredCourses__item--text">{item.students} Students</span>
                                        <p className="featuredCourses__item--text">{item.price} Students</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
        </div>
    )
}

export default FeaturedCourses