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
    
    // Для отслеживания развернутых модулей
    const [expandedModules, setExpandedModules] = useState({});

    useEffect(()=>{
        setModulesProgram(modules.filter((module)=>module.courseId===course.id).sort((a,b)=>a.order-b.order));
    },[course.id])
    
    // Функция для переключения видимости уроков модуля
    const toggleModule = (moduleId) => {
        setExpandedModules(prev => ({
            ...prev,
            [moduleId]: !prev[moduleId]
        }));
    };

    // Функция для переключения выбранного урока (в том числе для закрытия видеоплеера)
    const toggleLesson = (lesson) => {
        setSelectedLesson(prevLesson => 
            prevLesson && prevLesson.id === lesson.id ? null : lesson
        );
    };

  return (
    <div className="curriculum">
      <p className="short-overview">{shortOverview}</p>
      
      <div>
          {modulesProgram.length>0?modulesProgram.map((module)=>(
            <div key={module.id} className="module-container">
              <div className="module-header"> 
                <h3 className={`module-title ${expandedModules[module.id] ? 'expanded' : ''}`} onClick={() => toggleModule(module.id)}><svg className="module-title--icon" width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.175 0L0 1.175L3.81667 5L0 8.825L1.175 10L6.175 5L1.175 0Z"/>
</svg>{module.title}</h3>
                    {/* Количество уроков и общее время */}
                      <div>
                        <span>{lessons.filter((lesson)=>lesson.moduleId===module.id).length>1?lessons.filter((lesson)=>lesson.moduleId===module.id).length+' Lessons':lessons.filter((lesson)=>lesson.moduleId===module.id).length+' Lesson'} </span>
                        <span>{Math.floor(lessons.filter(lesson => lesson.moduleId === module.id).reduce((acc, lesson) => {const [minutes, seconds] = lesson.duration.split(':').map(Number);
                            return acc + (minutes * 60 + seconds);
                            }, 0) / 60)} Mins
                        </span>
                </div>
              </div>
              {expandedModules[module.id] && (
                <div className="lessons-container">
                  {lessons
                    .filter((lesson)=>lesson.moduleId===module.id)
                    .map((lesson)=>(
                      <div key={lesson.id}>
                        <div 
                          className={`lesson-item ${selectedLesson?.id===lesson.id?'active':''}`}
                          onClick={()=> toggleLesson(lesson)}
                        >
                          <h4>{lesson.title}</h4>
                        </div>
                        {/* Видеоплеер отображается прямо под выбранным уроком */}
                        {selectedLesson?.id === lesson.id && (
                          <div className="video-player-section">
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
                      </div>
                    ))
                  }
                </div>
              )}
            </div>
          )):<p>Пока программа курса не создана</p>}
      </div>
    </div>
  );
}

export default Curriculum;