import "./tabPanel.css";
import { useState } from "react";
import Curriculum from "./Curriculum/Curriculum";
import Instructor from "./Instructor/Instructor";
import FAQs from "./FAQs/FAQs";
import Reviews from "./Reviews/Reviews";

function TabPanel({ course }) {
    const [activeTab, setActiveTab] = useState('Overview');

    const tabs = ['Overview', 'Curriculum', 'Instructor', 'FAQs', 'Reviews'];

    const renderContent = () => {
        switch(activeTab){
            case 'Overview':
                return (
                    <div className="tab-content">
                        <p>{course.overview}</p>
                    </div>
                );
            case 'Curriculum':
                return (
                    <div>
                        <Curriculum course={course} />
                    </div>
                );
            case 'Instructor':
                return (
                    <div>
                        <Instructor course={course} />
                    </div>
                );
            case 'FAQs':
                return (
                    <div>
                        <FAQs />
                    </div>
                );
            case 'Reviews':
                return (
                    <div>
                        <Reviews course={course} />
                    </div>
                );
            default:
                return null;
        }
    }
    return (
        <>
            <div className="container">
                <div className="course-tabs-container">
                    <div className="tabs-header">
                        {tabs.map(tab=>(
                                <button key={tab} className={`tab-button ${activeTab === tab ? 'active' : ''}`} onClick={()=>setActiveTab(tab)}>{tab}</button>
                            ))
                        }
                    </div>
                    <div className="tab-content-wrapper">{renderContent()}</div>
                </div>
            </div>  
        </>
    );
};



export default TabPanel;