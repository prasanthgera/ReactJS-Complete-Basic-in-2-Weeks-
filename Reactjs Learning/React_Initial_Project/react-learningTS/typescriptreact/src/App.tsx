
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Dashboard from './E-commerce/bashboard'
import HomePage from './E-commerce/navbar'

function App() {

  return (
      <div>
        <Routes>

          <Route path="/home" element={<HomePage />} />


         
          <Route path="/" element={<Dashboard/>}/>
        </Routes>
  
      </div>
    
  )
}

export default App
