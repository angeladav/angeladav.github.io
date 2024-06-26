import './App.css';
import { Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe'
import Home from './pages/Home'
import Resume from './pages/Resume'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

export default App;
