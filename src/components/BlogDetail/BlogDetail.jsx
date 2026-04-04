import "./blogDetail.css";
import { useParams, Link } from "react-router-dom";
import {useEffect } from "react";
import { useOutletContext } from "react-router-dom";


function BlogDetail({ courses }) {
  const { id } = useParams();
  const [setCourseTitle] = useOutletContext();
 
  
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
    <>
      <div className="courses-detail">
        <h1>{course.title}</h1>
      </div>
    </>
  );
}

export default BlogDetail;