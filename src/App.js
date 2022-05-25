import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages/index";
import Login from "./pages/login";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/index" element={<Index />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
