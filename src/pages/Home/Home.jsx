import "./home.css"
import ButtonPrimary from "../../components/shared/ButtonPrimary/ButtonPrimary"
import Categories from "./Categories/Categories.jsx" // здесь расширение указывать важно так как есть еще файл с расширением js
import FeaturedCourses from "./FeaturedCourses/FeaturedCourses.jsx"
import LearnPressBanner from "./LearnPressBanner/LearnPressBanner.jsx"
import StatisticCard from "../../components/StatisticCard/StatisticCard.jsx"
import GrowUs from "./GrowUs/GrowUs.jsx"

function Home({ statistic }) {

    return (
        <>
        <section className="header__main">
            <div className="container">
                <div className="header__inner--block">
                    <div className="header__main--block">
                        <h1 className="header__main--title">Build Skills with <br></br> Online Course</h1>
                        <p className="header__main--text">We denounce with righteous indignation and dislike men who are so beguiled and demoralized that cannot trouble.</p>
                        <ButtonPrimary>Posts Comment</ButtonPrimary>
                    </div>
                </div>
            </div>
        </section>
        <section className="categories">
            <div className="container">
                <Categories />
            </div>
        </section>
        <section className="featured__courses">
            <div className="container">
                <FeaturedCourses />
            </div>
        </section>
        <section className="learnPressBanner__section">
            <div className="container">
                <LearnPressBanner />
            </div>
        </section>
        <section className="statistic__section">
            <div className="container">
                <StatisticCard statistic={statistic} />
            </div>
        </section>
        <section className="growUs__section">
            <div className="container">
                <GrowUs />
            </div>
        </section>
        </>
    )
}

export default Home