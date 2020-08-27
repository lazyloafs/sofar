import React from 'react';
import './App.css';
import Coffee from "./pages/Coffee";
import CoffeeFinder from "./pages/CoffeeFinder";
import Cigar from "./pages/Cigar";
import CigarFinder from "./pages/CigarFinder";
import Dispensary from "./pages/Dispensary";
import DispensaryFinder from "./pages/DispensaryFinder";
import Bookshop from "./pages/Bookshop";
import BookshopFinder from "./pages/BookshopFinder";
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
          <Route exact path="/Cigar" component={Cigar} />
          <Route exact path="/CigarFinder" component={CigarFinder} />
          <Route exact path="/Dispensary" component={Dispensary} />
          <Route exact path="/DispensaryFinder" component={DispensaryFinder} />
          <Route exact path="/Bookshop" component={Bookshop} />
          <Route exact path="/BookshopFinder" component={BookshopFinder} />
        </Container>
      </div>
    </Router>
  );
}

export default App;
