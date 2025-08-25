
import './App.css'
import { useRoutes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Courses from './pages/Courses/Courses'
import Blog from './pages/Blog/Blog'


function App() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/courses', element: <Courses /> },
    { path: '/blog', element: <Blog /> },
  ])

  return routes
}

export default App
