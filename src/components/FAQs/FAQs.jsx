import "./faqs.css";
import faqs from "../../data/faqs";
import { useState } from "react";
import FAQsImg from "../../assets/images/faqs_img.png"

function FAQs() {

    const [activeId, setActiveId] = useState(null);

    const handleToggle = (id) => {
        setActiveId(prevId => prevId === id ? null : id);
    };

    return (
        <div className="container">
            <div className="faqs">
                <h1 className="faqs__title">FAQs</h1>
                    <ul className="faqs__list">
                        {faqs.map((faq) => (
                            <li
                                key={faq.id}
                                className={`faqs__item ${activeId === faq.id ? "active" : ""}`}
                                onClick={() => handleToggle(faq.id)}
                            >
                                <span>{faq.question}</span>
                                <svg className="faqsArrowIcon" width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.175 0L0 1.175L3.81667 5L0 8.825L1.175 10L6.175 5L1.175 0Z"/>
                                </svg>
                                <p className="faqs__answer">{faq.answer}</p>
                            </li>
                        ))}
                    </ul>
            </div>
            <img className="faqs__img" src={FAQsImg} alt="FAQs" />
        </div>
    );
}

export default FAQs;