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
        </div>
    );
}

export default Reviews;
