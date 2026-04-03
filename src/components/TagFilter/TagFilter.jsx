import "./tagFilter.css";
import {useState} from "react";

function TagFilter({ tags, onTagChange, selectedTags, setSelectedTags }) {

   
    const handleTagClick = (tag) => {
        let newSelectedTags;
        if (selectedTags.includes(tag)) {
            // Удаляем тег, если он уже выбран
            newSelectedTags = selectedTags.filter(t => t !== tag);
        } else {
            // Добавляем тег
            newSelectedTags = [...selectedTags, tag];
        }
        setSelectedTags(newSelectedTags);
        // Вызываем колбек, если он передан
        if (onTagChange) {
            onTagChange(newSelectedTags);
        }
    };

  return (
    <div className="filters__block--tags">
                            <h2 className="filters__title">Tags</h2>
                            {tags.map((tag) => (
                                <div className="filters__tag--block" key={tag}>
                                    <button
                                        type="button"
                                        className={`filters__tag--button ${selectedTags.includes(tag) ? 'active' : ''}`}
                                        onClick={() => handleTagClick(tag)}
                                    >
                                        {tag}
                                    </button>
                                </div>
                            ))}
                        </div>
  );
}

export default TagFilter;