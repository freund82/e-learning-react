
import './App.css'
import { useRoutes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Courses from './pages/Courses/Courses'
import Blog from './pages/Blog/Blog'



function App() {
  const routes = useRoutes([
   {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> }, // index: true - означает что Home будет доступен по корневому маршруту
        { path: "courses", element: <Courses /> },
        { path: "blog", element: <Blog /> }
      ]
    }
  ])

  return routes
}

export default App
