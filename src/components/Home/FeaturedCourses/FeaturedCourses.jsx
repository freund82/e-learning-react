import "./featuredCourses.css"
import {useState} from "react"
import Card from "../../shared/Card/Card.jsx"
import courses from "../../../data/courses.js"
import ButtonSecondary from "../../shared/ButtonSecondary/ButtonSecondary"
 

function FeaturedCourses() {
    
    const [showAll, setShowAll] = useState(false)

    const featuredCourses = courses.filter((item) => item.featured)

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
                        <Card courses={visibleFeaturedCourses}/>
                    </div>
                </div>
        </div>
    )
}

export default FeaturedCourses