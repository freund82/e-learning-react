import "./home.css"
import ButtonPrimary from "../../components/shared/ButtonPrimary/ButtonPrimary"
import Categories from "../../components/Home/Categories/Categories.jsx" // здесь расширение указывать важно так как есть еще файл с расширением js
import FeaturedCourses from "../../components/Home/FeaturedCourses/FeaturedCourses.jsx"
import LearnPressBanner from "../../components/Home/LearnPressBanner/LearnPressBanner.jsx"
import StatisticCard from "../../components/StatisticCard/StatisticCard.jsx"
import GrowUs from "../../components/Home/GrowUs/GrowUs.jsx"
import EducationBanner from "../../components/Home/EducationBanner/EducationBanner.jsx"
import Blockquote from "../../components/Home/Blockquote/Blockquote.jsx"
import comments from "../../data/comments"

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
        <section className="educationBanner__section">
            <div className="container">
                <EducationBanner />
            </div>
        </section>
        <section className="blockquote__section">
            <div className="container">
                    <h3 className="blockquote__title">Student Feedbacks</h3>
                    <p className="blockquote__subText">What Students Say About Academy LMS</p>
                    <div className="blockquote__block">
                        {
                    comments.map((comment) => (
                        <Blockquote key={comment.id} quote={comment} />
                    ))
                }
                    </div>
            </div>
        </section>
        </>
    )
}

export default Home