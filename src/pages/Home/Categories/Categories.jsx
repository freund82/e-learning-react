import "./categories.css"
import categories from "./categories"
import ButtonSecondary from "../../../components/shared/ButtonSecondary/ButtonSecondary"
 

function Categories() {
    return (
        <div className="categories">
                <div className="categories__inner">
                    <div className="categories__inner--block">
                        <div className="categories__inner--title">
                              <h2 className="categories__title">Top Categories</h2>
                              <p className="categories__text">Explore our Popular Categories</p>
                        </div>
                    <div className="categories__btn">
                         <ButtonSecondary>All Categories</ButtonSecondary>
                    </div>
                    </div>
                    <div className="categories__list">
                        {
                            categories.map((item) => (
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