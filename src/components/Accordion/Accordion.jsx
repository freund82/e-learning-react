import "./accordion.css";
import { useState } from "react";
import Curriculum from "../TabPanel/Curriculum/Curriculum";
import Instructor from "../TabPanel/Instructor/Instructor";
import FAQs from "../TabPanel/FAQs/FAQs";
import Reviews from "../TabPanel/Reviews/Reviews";


function Accordion({course}) {

  
const tabs = [
  {label: "Overview", content: course.overview},
  {label: "Curriculum", content: <Curriculum course={course} />},
  {label: "Instructor", content: <Instructor course={course} />},
  {label: "FAQs", content: <FAQs />},
  {label: "Reviews", content: <Reviews course={course} />},
];

const [openTab, setOpenTab] = useState(null);

const toggleTab = (index) => {
  setOpenTab(openTab === index ? null : index);
};

  return (
    <div className="container">
      <div className="accordion">
        {tabs.map((tab, index) => (
          <div key={index} className="accordion-item">
            <div className={openTab === index ? "accordion-header open" : "accordion-header"} onClick={() => toggleTab(index)}>{tab.label}</div>
            {openTab === index && <div className="accordion-content">{tab.content}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;