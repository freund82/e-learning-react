import "./reviews.css"
import StarYellow from "../../../assets/icons/fullStar.svg"
import StarGrey from "../../../assets/icons/emptyStar.svg"

function Reviews({ course }) {
    const average = course.rating.average;
    
    // Функция для отображения звездочек рейтинга
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const emptyStars = 5 - fullStars;
        
        return (
            <>
                {[...Array(fullStars)].map((_, i) => (
                    <img key={`full-${i}`} src={StarYellow} alt="Full star" />
                ))}
                {[...Array(emptyStars)].map((_, i) => (
                    <img key={`empty-${i}`} src={StarGrey} alt="Empty star" />
                ))}
            </>
        );
    };

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
                <span className="stars-container">
                    <img className="star"  src={StarYellow} alt="Full star" />
                    <img className="star" src={StarYellow} alt="Full star" />
                    <img className="star"  src={StarYellow} alt="Full star" />
                    <img className="star"  src={StarYellow} alt="Full star" />
                    <img className="star"  src={StarYellow} alt="Full star" />
                </span>
                <span>{((course.rating.breakdown[5]/course.rating.count===0)?0:(course.rating.breakdown[5]/course.rating.count)*100).toFixed(0)}%</span>
                <span className="rating-line"></span>
            </div>
            <div className="stars-block">
                <span className="stars-container">
                    <img className="star"  src={StarYellow} alt="Full star" />
                    <img className="star" src={StarYellow} alt="Full star" />
                    <img className="star"  src={StarYellow} alt="Full star" />
                    <img className="star"  src={StarYellow} alt="Full star" />
                    <img className="star"  src={StarGrey} alt="Empty star" />
                </span>
                <span>{((course.rating.breakdown[4]/course.rating.count===0)?0:(course.rating.breakdown[4]/course.rating.count)*100).toFixed(0)}%</span>
                <span className="rating-line"></span>
            </div>
            <div className="stars-block">
                <span className="stars-container">
                    <img className="star"  src={StarYellow} alt="Full star" />
                    <img className="star" src={StarYellow} alt="Full star" />
                    <img className="star"  src={StarYellow} alt="Full star" />
                    <img className="star"  src={StarGrey} alt="Empty star" />
                    <img className="star"  src={StarGrey} alt="Empty star" />
                </span>
                <span>{((course.rating.breakdown[3]/course.rating.count===0)?0:(course.rating.breakdown[3]/course.rating.count)*100).toFixed(0)}%</span>
                <span className="rating-line"></span>
            </div>
            <div className="stars-block">
                <span className="stars-container">
                    <img className="star"  src={StarYellow} alt="Full star" />
                    <img className="star" src={StarYellow} alt="Full star" />
                    <img className="star"  src={StarGrey} alt="Empty star" />
                    <img className="star"  src={StarGrey} alt="Empty star" />
                    <img className="star"  src={StarGrey} alt="Empty star" />
                </span>
                <span>{((course.rating.breakdown[2]/course.rating.count===0)?0:(course.rating.breakdown[2]/course.rating.count)*100).toFixed(0)}%</span>
                <span className="rating-line"></span>
            </div>
            <div className="stars-block">
                <span className="stars-container">
                    <img className="star"  src={StarYellow} alt="Full star" />
                    <img className="star"  src={StarGrey} alt="Empty star" />
                    <img className="star"  src={StarGrey} alt="Empty star" />
                    <img className="star"  src={StarGrey} alt="Empty star" />
                   <img className="star"  src={StarGrey} alt="Empty star" />
                </span>
                <span>{((course.rating.breakdown[1]/course.rating.count===0)?0:(course.rating.breakdown[1]/course.rating.count)*100).toFixed(0)}%</span>
                <span className="rating-line"></span>
            </div>
        </div>
    );
}

export default Reviews;