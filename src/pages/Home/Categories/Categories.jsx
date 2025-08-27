import "./categories.css"
import {useState} from "react"
import categories from "../../../data/categories"
import ButtonSecondary from "../../../components/shared/ButtonSecondary/ButtonSecondary"
 

function Categories() {
    
    const [showAll, setShowAll] = useState(false)

    const visibleCategories = showAll ? categories : categories.slice(0, 10);

    return (
        <div className="categories">
                <div className="categories__inner">
                    <div className="categories__inner--block">
                        <div className="categories__inner--title">
                              <h2 className="categories__title">Top Categories</h2>
                              <p className="categories__text">Explore our Popular Categories</p>
                        </div>
                    <div className="categories__btn">
                         <ButtonSecondary showAllCategories={() => setShowAll(true)}>All Categories</ButtonSecondary>
                    </div>
                    </div>
                    <div className="categories__list">
                        {
                            visibleCategories.map((item) => (
                                <div className="categories__item--card" key={item.id}>
                                    <div className="categories__item--inner">
                                        <img src={item.img} alt={item.title} />
                                        <h3 className="categories__item--title">{item.title}</h3>
                                        <p className="categories__item--text">{item.courses} Courses</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
        </div>
    )
}

export default Categories