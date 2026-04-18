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
          ←
        </button>
         <button 
          className="slider-button next-button" 
          onClick={nextSlide}
          aria-label="Следующая статья"
        >
          →
        </button>
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