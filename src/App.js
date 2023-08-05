import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage.jsx";
import Service from "./components/ServicePage/ServicePage.jsx";
import ContactPage from "./components/ContactPage/ContactPage.jsx";
import FooterPage from "./components/FooterPage/FooterPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="/servicepage" element={<Service />} />
          <Route path="/contactpage" element={<ContactPage />} />
        </Routes>
        <NavigationBar />
        <FooterPage />
      </div>
    </Router>
  );
}

export default App;
