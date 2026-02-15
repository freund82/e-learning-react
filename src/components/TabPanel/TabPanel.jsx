import "./tabPanel.css";
import { useState } from "react";

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
                        <h1>Curriculum</h1>
                    </div>
                );
            case 'Instructor':
                return (
                    <div>
                        <h1>Instructor</h1>
                    </div>
                );
            case 'FAQs':
                return (
                    <div>
                        <h1>FAQs</h1>
                    </div>
                );
            case 'Reviews':
                return (
                    <div>
                        <h1>Reviews</h1>
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