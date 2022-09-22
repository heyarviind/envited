import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages/index";
import Event from "./pages/event";
import CreateEvent from "./pages/create";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </Router>
  );
}

export default App;
