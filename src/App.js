import "./App.css";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>

        <Router>
          <Routes>
            <Route path="/create" element={<Create />} />
          </Routes>
          <Routes>
            <Route path="/read" element={<Read />} />
          </Routes>
          <Routes>
            <Route path="/update" element={<Update />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
