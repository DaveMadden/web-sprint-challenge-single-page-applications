import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

//custom components

import Home from "./components/Home";
import Pizza from "./components/Pizza";

const API_URL = 'https://reqres.in/api/orders';

const initialFormValues = {
  name: "",
  size: "",
  jalapeno: false,
  pineapple: false,
  bacon: false,
  roasted_garlic: false,
  special: "",
}

const App = () => {
  //setting states
  const [formValues, setFormValues] = useState(initialFormValues);
  console.log(formValues);
  
  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link id="order-pizza" to="/pizza">Order Pizza</Link>
        </nav>
      </header>
      <Route path="/pizza">
        <Pizza 
          values={formValues}
        />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </div>
  );
};
export default App;
