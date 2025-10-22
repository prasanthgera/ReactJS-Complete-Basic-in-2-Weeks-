
import './App.css'
import Dashboard from './components/bashboard'
import Navbar from './components/navbar'
import { Route,Routes } from 'react-router-dom'

function App() {

  return (
      <div>
        <Routes>
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/mobile" element={
            <>
              <Navbar />
            </>
          } />
          <Route path="/" element={<Dashboard/>}/>
        </Routes>
  
      </div>
    
  )
}

export default App
