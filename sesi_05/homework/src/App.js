import React from "react";
import NavBar from "./components/atom/NavBar";
import Home from "./components/molekul/Home";
import CreateMeetup from "./components/molekul/CreateMeetup";
import Explore from "./components/molekul/Explore";
import Login from "./components/molekul/Login";
import Footer from "./components/atom/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/CreateMeetup" component={CreateMeetup} />
          <Route exact path="/Explore" component={Explore} />
          <Route exact path="/Login" component={Login} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
