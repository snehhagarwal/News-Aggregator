import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home.js';
import AdDashBoardMain from './components/DashBoard/Administrator/AdDashBoardMain.js';
import ReporterDashBoardMain from './components/DashBoard/Reporter/ReporterDashBoardMain.js';
function App() {
  return (
    <div >
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Administrator" element={<AdDashBoardMain/>}/>
        <Route path="/Reporter" element={<ReporterDashBoardMain/>}/>
      </Routes>
     </Router>

    </div>
  );
}

export default App;
