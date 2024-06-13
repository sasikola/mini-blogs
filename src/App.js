// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import NotFound from "./Pages/NotFound"; // Import the NotFound component

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();
  const hideNavBar =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div>
      {!hideNavBar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} /> {/* Wildcard route */}
      </Routes>
      {!hideNavBar && <Footer />}
    </div>
  );
}

export default App;
