import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Signup from "./components/Signup";
import Login from "./components/Login";
import "./styles/styles.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Hero />
        <Services />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
