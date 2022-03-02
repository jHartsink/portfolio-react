import "./App.css";
import Welcome from "./Pages/Welcome/Welcome"
import HomePage from "./Pages/Home/home-page"
import About from "./Pages/About/About"
import Projects from "./Pages/Projects/Projects"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/Home" element={<HomePage />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
