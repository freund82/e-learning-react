import "./articlesReviews.css"
import {useState} from "react";
import StarYellow from "../../assets/icons/fullStar.svg"
import StarGrey from "../../assets/icons/emptyStar.svg"
import Reply from "../../assets/icons/reply.svg"
import Avatar from "../../assets/icons/avatar.svg"
import Pagination from "../shared/Pagination/Pagination.jsx";

function ArticlesReviews({ articlesComments }) {
    

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
    const currentReviews = articlesComments.slice(indexOfFirstReview, indexOfLastReview);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
   

    return (
        <div className="reviews">
            <h3 className="reviews__block">Comments</h3>
            <p className="reviews__count">{articlesComments.length} Comments</p>
            {/*Комментарии*/}
            {currentReviews.map(review => (
                <div key={review.id} className="comments blogDetailComments">
                    <div className="comment">
                        {review.studentAvatar?<img className="avatarIcon" src={review.studentAvatar} alt="avatar" />:<img className="avatarIcon" src={Avatar} alt="avatar" />}
                    </div>
                    <div className="comment-info">  
                        <div className="comment-title">
                            <h5 className="name">{review.studentName}</h5>
                            <span className="date">{formatDate(review.date)}</span>
                        </div>
                        <div>   
                            <p className="comment-text">{review.text}</p>
                            <div className="reply">
                                <img src={Reply} alt="reply" />
                                <span className="reply-text">Reply</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="courses-pagination reviewsPagination">
                            {articlesComments.length > coursesPerPage && <Pagination
                            currentPage={currentPage}
                            coursesPerPage={coursesPerPage}
                            totalCourses={reviews.length}
                            paginate={paginate}
                        />}
            </div>
        </div>
    );
}

export default ArticlesReviews;
