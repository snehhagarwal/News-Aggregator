import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home.js';
import AdDashBoardMain from './components/DashBoard/Administrator/AdDashBoardMain.js';
import ReporterDashBoardMain from './components/DashBoard/Reporter/ReporterDashBoardMain.js';
import AdministratorLogin from './components/Authentication/AdministratorLogin.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={
          <>
            <Header/>
            <Home/>
            <Footer/>
          </>

          } />
          <Route path="/Administrator" element={<AdDashBoardMain />} />
          <Route path="/Reporter" element={<ReporterDashBoardMain />} />
          <Route path="/Login" element={<AdministratorLogin />} />
          {/* <Route path="/SignUp" element={<Signup/>}/>  */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;