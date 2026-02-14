import "./coursesDetail.css";
import { useParams } from "react-router-dom";
import {useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import WeeksIcon from "../../assets/icons/weeks.svg"
import StudentsIcon from "../../assets/icons/students.svg"
import GraphIcon from "../../assets/icons/graph.svg"
import LessonsIcon from "../../assets/icons/lessons.svg"
import Quizzes from "../../assets/icons/quizzes.svg"

function CoursesDetail({ courses }) {
  const { id } = useParams();
  const [setCourseTitle] = useOutletContext();
  console.log("ID из URL:", id);
  
  // Найдем курс по id
  const courseId = parseInt(id);
  const course = courses.find(course => course.id === courseId);
  
  useEffect(() => {
    if (course) {
      setCourseTitle(course.title);
    }
  }, [course, setCourseTitle]);
  
  console.log("Найденный курс:", course);
  
  if (!course) {
    return <div className="courses-detail">Курс не найден</div>;
  }

  return (
    <div className="courses-detail--header">
      <div className="container">
       <div>
        <span className="courses-detail--photography">Photography</span><span className="courses-detail--by">by</span><span className="courses-detail--name">{course.photography}</span>
           <h2 className="courses-detail--title">{course.title}</h2>
           <div className="cardCourses__item--info">
                                                       <div className="cardCourses__item--block">
                                                           <img src={WeeksIcon} alt="weeks" />
                                                           <span className="cardCourses__item--text">{course.length} Weeks</span>
                                                       </div>
                                                       <div className="cardCourses__item--block">
                                                           <img src={StudentsIcon} alt="students" />
                                                           <span className="cardCourses__item--text">{course.students} Students</span>
                                                       </div>
                                                       <div className="cardCourses__item--block">
                                                            <img src={GraphIcon} alt="levels" />
                                                            <span className="cardCourses__item--text">{course.levels !== "All" ? course.levels : "All Levels"}</span>
                                                       </div>
                                                        <div className="cardCourses__item--block">
                                                            <img src={LessonsIcon} alt="lessons" />
                                                            <span className="cardCourses__item--text">{course.lessons} Lessons</span>
                                                        </div>
                                                        <div className="cardCourses__item--block">
                                                            <img src={Quizzes} alt="quizzes" />
                                                            <span className="cardCourses__item--text">{course.quizzes} Quizzes</span>
                                                        </div>
                                                   </div>
       </div>
      </div>
    </div>
  );
}

export default CoursesDetail;