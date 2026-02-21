import "./curriculum.css"
import modules from "../../../data/modules.js"
import lessons from "../../../data/lessons.js"
import {useState, useEffect} from "react"

// Формирует корректный URL для видео (учитывает base path в Vite)
function getVideoUrl(videoURL) {
  if (!videoURL) return ''
  if (videoURL.startsWith('http://') || videoURL.startsWith('https://')) {
    return videoURL
  }
  const path = videoURL.startsWith('/') ? videoURL.slice(1) : videoURL
  return `${import.meta.env.BASE_URL}${path}`
}

function Curriculum({ course }) {
    const shortOverview =course.overview.length>169?course.overview.substring(0,169)+'...':course.overview;


    const [modulesProgram, setModulesProgram] = useState([]);

    //Для видео уроков
    const [selectedLesson, setSelectedLesson] = useState(null);

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
            <video
              key={selectedLesson.id}
              src={getVideoUrl(selectedLesson.videoURL)}
              controls
              playsInline
              width="100%"
              style={{ maxHeight: '400px', display: 'block' }}
              preload="metadata"
            >
              Ваш браузер не поддерживает воспроизведение видео.
            </video>
          </div>
        </div>
      )}
      <div>
          {modulesProgram.length>0?modulesProgram.map((module)=>(
            <div key={module.id}>
              <h3>{module.title}</h3>
              {lessons.filter((lesson)=>lesson.moduleId===module.id).map((lesson)=>(
                <div key={lesson.id} className={`lesson-item ${selectedLesson?.id===lesson.id?'active':''}`}
                  onClick={()=> setSelectedLesson(lesson)}>
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