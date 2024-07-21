import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Content from './components/layouts/components/Content/Content'
import Roadmap from './pages/Roadmap/Roadmap'
import SidebarContent from './components/layouts/components/Content/SidebarContent/SidebarContent'
import CourseDescription from './pages/CourseDescription/CourseDescription'
import CourseDetails from './pages/CourseDetail/CourseDetail'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Content />}>
            <Route path="/" element={<SidebarContent />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/course/c" element={<CourseDescription />} />
          </Route>
          <Route path="/a" element={<CourseDetails />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
