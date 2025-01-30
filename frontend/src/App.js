import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AnimatedComponent from "./Components/AnimatedComponent";
import Headlines from "./Components/Headlines";
import Countries from "./Components/Countries";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import NotFoundPage from "./Components/NotFoundPage";
import ContactUs from "./Components/ContatUs";
import { useNewsContext } from "./context";
import { getNewsData } from "./API/newsData";
function App() {
  const { setNews } = useNewsContext();

  useEffect(() => {
    const fetchNewsData = async () => {
      let res = await getNewsData();
      const out = res.data.news;
      setNews(out);
    };
    fetchNewsData();
  }, [setNews]);
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
          <Route
            path="/Headlines/:headline"
            element={
              <>
                <Header />
                <Headlines />
                <Footer />
              </>
            }
          />
          <Route
            path="/aboutus"
            element={
              <>
                <Header />
                <AboutUs />
                <Footer />
              </>
            }
          />
          <Route
            path="/contactus"
            element={
              <>
                <Header />
                <ContactUs />
                <Footer />
              </>
            }
          />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
