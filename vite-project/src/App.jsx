
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css'

import Navbar from './Components/NavBar'

function App() {

  
  return (
    <>
      <Router> 
        
      <Navbar/>
        <Routes>
            <Route path='/' exact/>
         
        </Routes>
      
      
      </Router>
    </>
  )
}

export default App
