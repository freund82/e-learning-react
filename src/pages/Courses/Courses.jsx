import "./courses.css"
import Card from "../../components/shared/Card/Card.jsx"
import courses from "../../data/courses.js"
import Search from "../../components/shared/Search/Search.jsx"
import { useState } from "react"



function Courses() {

    const [listStyle, setListStyle] = useState(false)

    const activeIconValue = (value) => {
       setListStyle(value);
    };

    return (
        <section className="all-courses">
            <div className="container">
                    <div className="all-courses__inner">
                        <div className="left-section"> 
                            <h1>All Courses</h1>
                            <Search activeIconValue={activeIconValue}/>
                        </div>
                        <div className={`courses-row ${listStyle ? "list" : ""}`}>
                            <Card courses={courses}/>
                        </div>
                        <div className="courses-pagination">
                            <span>1</span>
                            <span>2</span>
                        </div>
                        <div className="right-section">
                            <h1>Course Category</h1>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default Courses