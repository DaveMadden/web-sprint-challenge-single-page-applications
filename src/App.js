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
  jalapeno: true,
  pineapple: true,
  bacon: true,
  roasted_garlic: true,
  special: "",
};

const initialFormErrors = {
  name: "",
  size: "",
};

const initialDisabled = true;

const App = () => {
  //STATE
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);




  //HELPERS




  //EVENT HANDLERS
  const inputChange = (name, value) => {
    console.log('input change: ', name, value); //PLACEHOLDER
    // validate(name, value);
    setFormValues({...formValues, [name]:value});
    console.log(formValues);
  }

  const formSubmit = () => {
    console.log("formSubmit run in App.js");
  }

  //const validate = (name, value) => {};

  //SIDE EFFECTS

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
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </div>
  );
};
export default App;
