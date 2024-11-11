import './App.css';

import { Routes, Route} from "react-router-dom";
import About from "./components/About";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Navbar from './components/Navbar';

import HandGesture from './components/projects/HandGesture/HandGesture';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */}
        <Route path="/" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects/handgesture" element={<HandGesture />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </div>
  );
}

export default App;
