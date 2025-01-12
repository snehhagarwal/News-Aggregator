import "./App.css";
import AnimatedComponent from "./Components/AnimatedComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AnimatedComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
