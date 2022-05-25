import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages/index";
import Login from "./pages/login";
import Map from "./pages/map";
import Clue from "./pages/clue";
import Progress from "./pages/progress";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/index" element={<Index />} />
            <Route path="/map" element={<Map />} />
            <Route path="/clue" element={<Clue />} />
            <Route path="/progress" element={<Progress />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
