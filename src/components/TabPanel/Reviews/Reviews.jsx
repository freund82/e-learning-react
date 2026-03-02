import "./reviews.css"
import {useState} from "react";
import StarYellow from "../../../assets/icons/fullStar.svg"
import StarGrey from "../../../assets/icons/emptyStar.svg"
import reviewsData from "../../../data/reviewsData.js"
import Reply from "../../../assets/icons/reply.svg"
import Avatar from "../../../assets/icons/avatar.svg"
import Pagination from "../../shared/Pagination/Pagination.jsx";

function Reviews({ course }) {
    const average = course.rating.average;

    const reviews=reviewsData.filter(review => review.courseId === course.id);

    //Функция преобразования даты
    const formatDate = (dateString) => {
        const date = new Date(dateString); // Преобразуем строку в объект Date
        return date.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });
      };


    //Для Пагинации называю переменные как называл в курсах чтобы не создавать еще один компонент Пагинации.

    const [currentPage, setCurrentPage] = useState(1)
    const [coursesPerPage] = useState(3)

    const indexOfLastReview = currentPage * coursesPerPage;
    const indexOfFirstReview = indexOfLastReview - coursesPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    // Функция для отображения звездочек рейтинга
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const emptyStars = 5 - fullStars;
        
        return (
            <span className="stars-block">
                {[...Array(fullStars)].map((_, i) => (
                    <img key={`full-${i}`} src={StarYellow} alt="Full star" />
                ))}
                {[...Array(emptyStars)].map((_, i) => (
                    <img key={`empty-${i}`} src={StarGrey} alt="Empty star" />
                ))} 
            </span>
        );
    };

    const stars = [5,4,3,2,1];

    const renderStarsRating = (starCount, index) => {
        const fullStars = starCount;
        const emptyStars = 5 - fullStars;
        
        // Рассчитываем процент для каждого рейтинга
        const percentage = course.rating.breakdown && course.rating.count
            ? ((course.rating.breakdown[starCount] || 0) / course.rating.count * 100).toFixed(0)
            : 0;
        
        return (
            <div key={index} className="rating-row">
                <span className="starsSection">
                    {[...Array(fullStars)].map((_, i) => (
                        <img key={`full-${index}-${i}`} className="star" src={StarYellow} alt="Full star" />
                    ))}
                    {[...Array(emptyStars)].map((_, i) => (
                        <img key={`empty-${index}-${i}`} className="star" src={StarGrey} alt="Empty star" />
                    ))}
                </span>
                <span className="rating-percentage">{percentage}%</span>
                <div className="rating-line-container">
                    <div 
                        className="rating-line-fill" 
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
            </div>
        );
    }

    return (
        <div className="reviews">
            <h3>Comments</h3>
            <div className="rating-display">
                <h1 className="rating-value">{average.toFixed(1)}</h1>
                <div className="stars">
                    {renderStars(average)}
                    <p className="total-reviews">based on {course.rating.count} ratings</p>
                </div>
            </div>
            <div className="stars-block">
                <div className="stars-container">
                    {stars.map((starCount, index) => renderStarsRating(starCount, index))}
                </div>
            </div>
            {/*Комментарии*/}
            {currentReviews.map(review => (
                <div key={review.id} className="comments">
                    <div className="comment">
                        {review.studentAvatar?<img className="avatarIcon" src={review.studentAvatar} alt="avatar" />:<img className="avatarIcon" src={Avatar} alt="avatar" />}
                    </div>
                    <div className="comment-info">  
                        <div className="comment-title">
                            <h5 className="name">{review.studentName}</h5>
                            <span>{formatDate(review.date)}</span>
                        </div>
                        <div>   
                            <p>{review.text}</p>
                            <div className="reply">
                                <img src={Reply} alt="reply" />
                                <span>Reply</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="courses-pagination reviewsPagination">
                            {reviews.length > coursesPerPage && <Pagination
                            currentPage={currentPage}
                            coursesPerPage={coursesPerPage}
                            totalCourses={reviews.length}
                            paginate={paginate}
                        />}
            </div>
        </div>
    );
}

export default Reviews;
