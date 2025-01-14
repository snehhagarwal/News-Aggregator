import "./App.css";
import AnimatedComponent from "./Components/AnimatedComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Headlines from "./Components/Headlines";
import Countries from "./Components/Countries";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AnimatedComponent />} />
          <Route
            path="/countries/:countrycode"
            element={
              <>
                <Header />
                <Countries />
                <Footer />
              </>
            }
          />
          <Route path="/Headlines/:headline" element={
            <>
            <Header />
            <Headlines />
            <Footer />
          </>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
