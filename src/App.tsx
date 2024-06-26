import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Content from './components/layouts/components/Content/Content'
import Roadmap from './pages/Roadmap/Roadmap'
import SidebarContent from './components/layouts/components/Content/SidebarContent/SidebarContent'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Content />}>
            <Route path="/" element={<SidebarContent />} />
            <Route path="/roadmap" element={<Roadmap />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
