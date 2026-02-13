import "./coursesDetail.css";
import { useParams } from "react-router-dom";
import {useEffect } from "react";
import { useOutletContext } from "react-router-dom";

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
    <div className="courses-detail">
      <h1>{course.title}</h1>
      <p>Категория: {course.category}</p>
      <p>Цена: ${course.price}</p>
      <p>Количество уроков: {course.lessons}</p>
      <p>Уровень: {course.levels}</p>
      <p>Инструктор: {course.instructor}</p>
      <p>Рейтинг: {course.rating.average} ({course.rating.count} отзывов)</p>
    </div>
  );
}

export default CoursesDetail;