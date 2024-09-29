import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/NavBar';
import AboutPage from './Components/AboutPage';
import HomePage from './Components/HomePage';
import Tool from './Components/Tool'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={HomePage} />
          <Route path='/tool' element={<Tool />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
