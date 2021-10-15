import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

//custom components

import Home from "./components/Home";
import Pizza from "./components/Pizza";

const API_URL = 'https://reqres.in/api/orders';

const App = () => {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/pizza">Order Pizza</Link>
        </nav>
      </header>
      <Route path="/pizza">
        <Pizza />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </div>
  );
};
export default App;
