import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";
import Routes from "../../routes";
import "./App.css";

function App() {
  return (
    <Router>
      <Helmet>
        <meta
          name="description"
          content="SolerChil Technologies is a solar refridgeration company that produces cost effiecient technology for the African market."
        />
      </Helmet>
      <Routes />
    </Router>
  );
}

export default App;
