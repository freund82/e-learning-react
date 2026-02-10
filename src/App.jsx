import './App.css'
import { useRoutes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Courses from './pages/Courses/Courses'
import courses from './data/courses.js'
import CoursesDetail from './components/CoursesDetail/CoursesDetail'
import Blog from './pages/Blog/Blog'



function App() {
 

  const statistic=[
    {
      id:1,
      title:"Active Students",
      number:25000,
    },
    {
      id:2,
      title:"Total Courses",
      number:899,
    },
    {
      id:3,
      title:"Instructor",
      number:158,
    },
    {
      id:4,
      title:"Satisfaction Rate",
      number:100,
    },
  ]

  const routes = useRoutes([
   {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home statistic={statistic} /> }, // index: true - означает что Home будет доступен по корневому маршруту
        { path: "courses", element: <Courses /> },
        { path: "blog", element: <Blog /> },
        {path: "courses/:id", element: <CoursesDetail courses={courses} />},
      ]
    }
  ])

  return routes
}

export default App
