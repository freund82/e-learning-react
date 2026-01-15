import "./courses.css"
import {useState} from "react"
import {Link} from "react-router-dom"
import featuredCourses from "../../data/courses.js"
import WeeksIcon from "../../assets/icons/weeks.svg"
import StudentsIcon from "../../assets/icons/students.svg"


function Courses() {

    const [showAll, setShowAll] = useState(false)

    const visibleFeaturedCourses = showAll ? featuredCourses : featuredCourses.slice(0, 6);

    return (
        <section className="all-courses">
            <div className="container">
                    <div className="all-courses__inner">
                        <div className="left-section"> 
                            <h1>All Courses</h1>
                        </div>
                        <div className="courses-row">
                            <div className="featuredCourses__list">
                                                    {
                                                        visibleFeaturedCourses.map((item) => (
                                                            <div className="featuredCourses__item--card" key={item.id}>
                                                                <img className="featuredCourses__item--img" src={item.img} alt={item.title} />
                                                                <div className="featuredCourses__item--inner">
                                                                    <p>by <span className="featuredCourses__item--author">{item.author}</span></p>
                                                                    <h3 className="featuredCourses__item--title">{item.title}</h3>
                                                                    <div className="featuredCourses__item--info">
                                                                        <img src={WeeksIcon} alt="weeks" />
                                                                        <span className="featuredCourses__item--text">{item.length}Weeks</span>
                                                                         <img src={StudentsIcon} alt="students" />
                                                                        <span className="featuredCourses__item--text">{item.students} Students</span>
                                                                    </div>
                                                                    <div className="featuredCourses__item--price">
                                                                        <div>
                                                                             <span className="featuredCourses__item--text" style={item.free || item.newPrice? {textDecoration:"line-through", fontSize:"var(--font-size18)", color:"var(--gray)", fontWeight:"400"}:""}>${item.price.toFixed(1)}</span>
                                                                        {item.free==true?<span className="featuredCourses__item--text" style={{marginLeft:"0.6rem", color:"var(--green)", fontSize:"var(--font-size18)", fontWeight:"600"}}>Free</span>:""} {/*Условный рендеринг*/}
                                                                        {item.newPrice?<span className="featuredCourses__item--text" style={{color:"var(--red)", fontSize:"var(--font-size18)", fontWeight:"600", marginLeft:"0.6rem"}}>${item.newPrice.toFixed(1)}</span>:""}
                                                                        </div>
                                                                        <Link to="/viewmore" className="featuredCourses__item--link" href="#" style={{fontSize:"var(--font-size18)", fontWeight:"600", color:"var(--black)"}}>View More</Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                        </div>
                        <div className="courses-pagination">
                            <span>1</span>
                            <span>2</span>
                        </div>
                        <div className="right-section">
                            <h1>Filters</h1>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default Courses