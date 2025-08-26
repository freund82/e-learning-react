import "./home.css"
import Layout from "../../components/Layout/Layout"
import ButtonPrimary from "../../components/shared/ButtonPrimary/ButtonPrimary"
import Categories from "./Categories/Categories.jsx" // здесь расширение указывать важно так как есть еще файл с расширением js

function Home() {

    return (
        <Layout>
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
        </Layout>
    )
}

export default Home