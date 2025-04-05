import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ProjectDashboard from './pages/ProjectDashboard'
import ProjectDetail from './pages/ProjectDetail'
import CreateProject from './pages/CreateProject'
function App() {
  return (
    <div className='bg-black'>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/dashboard" element={<ProjectDashboard/>} />
          <Route path='/dashboard/:id' element={<ProjectDetail/>} />
          <Route path='/create-project' element={<CreateProject/>} />
        </Routes>
        </Router>
     </div>
  )
}

export default App