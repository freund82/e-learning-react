import "./blogDetail.css";
import comments from "../../data/comments";
import { useParams, Link } from "react-router-dom";
import {useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Author from "../../assets/icons/author.svg"
import Calendar from "../../assets/icons/calendar.svg"
import Comments from "../../assets/icons/comments.svg"
import { formatDate } from "../../utils/formatDate"


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

  // Найдем комментарии для статей
 const articlesComments = comments.filter(comment => parseInt(comment.articlesId) === parseInt(course.id));
 
  console.log("Комментарии:", articlesComments);

  return (
    <>
      <div className="blog-detail">
        <div className="container">
          <h1 className="blog-detail--title">{course.title}</h1>
          <div className="blog-detail--header">
            <div className="blog-detail--item">
              <img src={Author} alt="author" />
              <span className="blog-detail--item--title">{course.author}</span>
            </div>
            <div className="blog-detail--item">
              <img src={Calendar} alt="calendar" />
              <span className="blog-detail--item--title">{formatDate(course.date)}</span>
            </div>
            <div className="blog-detail--item">
              <img src={Comments} alt="comments" />
              <span className="blog-detail--item--title">{articlesComments.length} Comments</span>
            </div>
          </div>
          <img className="blog-detail--img" src={"../" + course.img} alt={course.title} />
          <p>{course.text}</p>
        </div>
      </div>
    </>
  );
}

export default BlogDetail;