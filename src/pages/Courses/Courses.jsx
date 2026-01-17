import "./courses.css"
import Card from "../../components/shared/Card/Card.jsx"
import courses from "../../data/courses.js"



function Courses() {


    return (
        <section className="all-courses">
            <div className="container">
                    <div className="all-courses__inner">
                        <div className="left-section"> 
                            <h1>All Courses</h1>
                        </div>
                        <div className="courses-row">
                            <Card courses={courses}/>
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