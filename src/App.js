import React from 'react';
import './App.css';
import Coffee from "./pages/Coffee";
import CoffeeFinder from "./pages/CoffeeFinder";
import {BrowserRouter as Router, Route } from "react-router-dom"
import { Container } from 'react-bootstrap'



function App() {
  return (
    <Router>
      <div>
        <Container>
          <Route exact path='/' component={CoffeeFinder} />
          <Route exact path="/Coffee" component={Coffee} />
          <Route exact path="/CoffeeFinder" component={CoffeeFinder} />
        </Container>
      </div>
    </Router>
  );
}

export default App;
