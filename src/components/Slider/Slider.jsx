import { useState } from "react";
import "./slider.css";

function Slider({ articles }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Количество видимых статей одновременно
  const visibleCount = 2;
  
  // Функция для перехода к следующей статье
  const nextSlide = () => {
    if (currentIndex < articles.length - visibleCount) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Если достигли конца, можно вернуться к началу
      setCurrentIndex(0);
    }
  };
  
  // Функция для перехода к предыдущей статье
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      // Если в начале, можно перейти к концу
      setCurrentIndex(articles.length - visibleCount);
    }
  };
  
  // Получаем видимые статьи для отображения
  const visibleArticles = articles.slice(currentIndex, currentIndex + visibleCount);
  
  // Если осталось меньше статей, чем нужно для отображения,
  // добавляем статьи с начала массива
  if (visibleArticles.length < visibleCount && articles.length > visibleCount) {
    const needed = visibleCount - visibleArticles.length;
    visibleArticles.push(...articles.slice(0, needed));
  }

  return (
    <div className="container">
    <div className="slider-container">
      <div className="slider-navigation">
        
        <div className="slider">
             <button 
          className="slider-button prev-button" 
          onClick={prevSlide}
          aria-label="Предыдущая статья"
        >
          <svg className="arrowIcon" width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.175 1.175L5 0L0 5L5 10L6.175 8.825L2.35833 5L6.175 1.175Z"/>
</svg>
        </button>
         <button 
          className="slider-button next-button" 
          onClick={nextSlide}
          aria-label="Следующая статья"
        >
          <svg className="arrowIcon" width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.175 0L0 1.175L3.81667 5L0 8.825L1.175 10L6.175 5L1.175 0Z"/>
</svg>
        </button>
        <p className="prev-article">Prev Articles</p>
        <p className="next-article">Next Articles</p>
          {visibleArticles.map((article) => (
            <div key={article.id} className="slider__item">
              <div className="article-content">
                <h2 className="article-title">{article.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Slider;