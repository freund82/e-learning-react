import "./faqs.css"
import {useState} from "react";

function FAQs() {

    const [activeId, setActiveId] = useState(null);

    const faqsData = [
        {
            id: 1,
            title: "What Does Royalty Free Mean?",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in."
        },
        {
            id: 2,
            title: "What Does Royalty Free Mean?",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in."
        },
        {
            id: 3,
            title: "What Does Royalty Free Mean?",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in."
        },
        {
            id: 4,
            title: "What Does Royalty Free Mean?",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in."
        }
    ]

    const toggleId = (id) => setActiveId(activeId === id ? null : id);

    return (
        <div className="faqs">
           {faqsData.map((faq) => (
                <div key={faq.id} className="faqs__item" onClick={() => toggleId(faq.id)}>
                    <div className="faqs__item--block">
                        <p className="faqs__item--title">{faq.title}</p>
                        <svg className="faqs__arrowIcon" width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.175 0L0 1.175L3.81667 5L0 8.825L1.175 10L6.175 5L1.175 0Z" fill="#9D9D9D"/>
                        </svg>
                    </div>
                    {activeId === faq.id && <p className="faqs__item--text">{faq.text}</p>}
                </div>
            ))}
        </div>
    );
}

export default FAQs;
