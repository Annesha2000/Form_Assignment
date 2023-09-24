
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shadow from './components/Shadow';
import Project from './components/Project';
import Bench1 from './components/Bench1';
import Bench2 from './components/Bench2';
import Submit from './components/Submit';


function App() {
  return (
    <>

      {/* <Home /> */}

      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/shadow" element={<Shadow/>} />
          <Route path="/bench1" element={<Bench1/>} />
          <Route path="/Bench2" element={<Bench2/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/submit" element={<Submit/>} />
        </Routes>

      </Router>




    </>
  );
}

export default App;
