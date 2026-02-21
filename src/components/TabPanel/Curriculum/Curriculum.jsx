import "./curriculum.css"
import modules from "../../../data/modules.js"
import lessons from "../../../data/lessons.js"

function Curriculum({ course }) {
    const shortOverview =course.overview.length>169?course.overview.substring(0,169)+'...':course.overview;


  return (
    <div className="curriculum">
      <p>{shortOverview}</p>
    </div>
  );
}

export default Curriculum;