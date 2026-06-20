import "./accordion.css";
import Curriculum from "../TabPanel/Curriculum/Curriculum";
import Instructor from "../TabPanel/Instructor/Instructor";
import FAQs from "../TabPanel/FAQs/FAQs";
import Reviews from "../TabPanel/Reviews/Reviews";

const tabs = ['Overview', 'Curriculum', 'Instructor', 'FAQs', 'Reviews'];

function Accordion({tabs}) {


  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-header">Accordion Header</div>
        <div className="accordion-body">Accordion Body</div>
      </div>
    </div>
  );
}

export default Accordion;