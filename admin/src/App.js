import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthenticatonMain from './components/Authentication/AuthenticatonMain';
import DashBoardMain from './components/DashBoard/DashBoardMain';
function App() {
  return (
    <div >
     <Router>
      <Routes>
        <Route path="/" element={<AuthenticatonMain/>}/>
        <Route path="/DashBoard" element={<DashBoardMain/>}/>
      </Routes>
     </Router>

    </div>
  );
}

export default App;
