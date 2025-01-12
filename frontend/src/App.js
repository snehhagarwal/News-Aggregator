import "./App.css";
import AnimatedComponent from "./Components/AnimatedComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Headlines from "./Components/Headlines";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AnimatedComponent />} />
          <Route path="/countries" element={<Headlines/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
