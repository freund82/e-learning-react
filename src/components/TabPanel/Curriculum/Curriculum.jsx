import "./curriculum.css"
import modules from "../../../data/modules.js"
import lessons from "../../../data/lessons.js"
import {useState, useEffect} from "react"


function Curriculum({ course }) {
    const shortOverview =course.overview.length>169?course.overview.substring(0,169)+'...':course.overview;


    const [modulesProgram, setModulesProgram] = useState([]);

    useEffect(()=>{
        setModulesProgram(modules.filter((module)=>module.courseId===course.id).sort((a,b)=>a.order-b.order));
    },[course.id])
    

  return (
    <div className="curriculum">
      <p>{shortOverview}</p>
      <div>
          {modulesProgram.length>0?modulesProgram.map((module)=>(
            <div key={module.id}>
              <h3>{module.title}</h3>
              {lessons.filter((lesson)=>lesson.moduleId===module.id).map((lesson)=>(
                <div key={lesson.id}>
                 
                </div>
              ))}
            </div>
          )):<p>Пока программа курса не создана</p>}
      </div>
    </div>
  );
}

export default Curriculum;