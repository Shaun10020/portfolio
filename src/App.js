import './App.css';

import { Routes, Route} from "react-router-dom";
import About from "./components/About";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
