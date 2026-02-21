import "./curriculum.css"
import modules from "../../../data/modules.js"
import lessons from "../../../data/lessons.js"
import {useState, useEffect} from "react"
import ReactPlayer from "react-player"


function Curriculum({ course }) {
    const shortOverview =course.overview.length>169?course.overview.substring(0,169)+'...':course.overview;


    const [modulesProgram, setModulesProgram] = useState([]);

    //Для видео уроков
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [playing, setPlaying] = useState(false);

    useEffect(()=>{
        setModulesProgram(modules.filter((module)=>module.courseId===course.id).sort((a,b)=>a.order-b.order));
    },[course.id])
    

  return (
    <div className="curriculum">
      <p>{shortOverview}</p>

        {/* Видеоплеер */}
      {selectedLesson && (
        <div className="video-player-section">
          <h3>{selectedLesson.title}</h3>
          <div className="video-container">
            <ReactPlayer
              url={selectedLesson.videoURL}
              width="100%"
              height="400px"
              controls={true}
              playing={playing}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onReady={() => console.log('Видео готово')}
              onError={(e) => console.log('Ошибка видео', e)}
            />
          </div>
        </div>
      )}
      <div>
          {modulesProgram.length>0?modulesProgram.map((module)=>(
            <div key={module.id}>
              <h3>{module.title}</h3>
              {lessons.filter((lesson)=>lesson.moduleId===module.id).map((lesson)=>(
                <div key={lesson.id} className={`lesson-item ${selectedLesson?.id===lesson.id?'active':''}`}
                  onClick={()=>{setSelectedLesson(lesson)
                    setPlaying(true)
              }}>
                    <h4>{lesson.title}</h4>
                </div>
              ))}
            </div>
          )):<p>Пока программа курса не создана</p>}
      </div>
    </div>
  );
}

export default Curriculum;