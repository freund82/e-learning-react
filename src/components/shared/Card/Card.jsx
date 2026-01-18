import "./card.css"
import {Link} from "react-router-dom"
import WeeksIcon from "../../../assets/icons/weeks.svg"
import StudentsIcon from "../../../assets/icons/students.svg"
 

function Card({courses, isList}) {
  

    return (
        <div className="cardCourses">
                <div className="cardCourses__inner">
                    <div className="cardCourses__inner--block">
                    </div>
                    <div className="cardCourses__list">
                        {
                           courses.map((item) => (
                                <div className={`cardCourses__item--card ${isList && "cardCourses__item--list"}`} key={item.id}>
                                    <img className={`cardCourses__item--img ${isList && "cardCourses__item--listImg"}`} src={item.img} alt={item.title} />
                                    <div className="cardCourses__item--inner">
                                        <p>by <span className="cardCourses__item--author">{item.author}</span></p>
                                        <h3 className="cardCourses__item--title">{item.title}</h3>
                                        <div className="cardCourses__item--info">
                                            <img src={WeeksIcon} alt="weeks" />
                                            <span className="cardCourses__item--text">{item.length}Weeks</span>
                                             <img src={StudentsIcon} alt="students" />
                                            <span className="cardCourses__item--text">{item.students} Students</span>
                                        </div>
                                        <div className={`cardCourses__item--price ${isList && "cardCourses__item--listPrice"}`}>
                                            <div>
                                                 <span className="cardCourses__item--text" style={item.free || item.newPrice? {textDecoration:"line-through", fontSize:"var(--font-size18)", color:"var(--gray)", fontWeight:"400"}:""}>${item.price.toFixed(1)}</span>
                                            {item.free==true?<span className="cardCourses__item--text" style={{marginLeft:"0.6rem", color:"var(--green)", fontSize:"var(--font-size18)", fontWeight:"600"}}>Free</span>:""} {/*Условный рендеринг*/}
                                            {item.newPrice?<span className="cardCourses__item--text" style={{color:"var(--red)", fontSize:"var(--font-size18)", fontWeight:"600", marginLeft:"0.6rem"}}>${item.newPrice.toFixed(1)}</span>:""}
                                            </div>
                                            <Link to="/viewmore" className="cardCourses__item--link" href="#" style={{fontSize:"var(--font-size18)", fontWeight:"600", color:"var(--black)"}}>View More</Link>
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

export default Card