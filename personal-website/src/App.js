import './App.css';
import { Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe'
import Home from './pages/Home'
import Resume from './pages/Resume'
import NavBar from './pages/NavBar'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>

  );
}

export default App;
