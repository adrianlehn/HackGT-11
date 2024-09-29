import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/NavBar';
import AboutPage from './Components/AboutPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<h1>Home Page</h1>} exact />
          {/* Route for the About Page */}
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
