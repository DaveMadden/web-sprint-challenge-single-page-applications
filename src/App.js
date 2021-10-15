import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import * as yup from 'yup';
import schema from './validation/formSchema';

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
};

const initialFormErrors = {
  name: "",
  size: "",
};

const initialDisabled = true;
const initialOrder = [];

const App = () => {
  //STATE
  const [order, setOrder] = useState(initialOrder);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);


  //HELPERS

const postPizza = newPizza => {
  axios.post(API_URL, newPizza)
    .then(res=> {
      console.log(res.data); //for MVP requirements
      setOrder([res.data, ...order]); //for testing to put the order in the DOM
      // console.log(order.name);
    })
    .catch(err => console.log(err))
    .finally(() => {
      setFormValues(initialFormValues)
    })
}


  //EVENT HANDLERS
  const inputChange = (name, value) => {
    // console.log('input change: ', name, value); //PLACEHOLDER
    validate(name, value);
    setFormValues({...formValues, [name]:value});
    // console.log(formValues);
  }

  const formSubmit = () => {
    // console.log("formSubmit run in App.js");
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      jalapeno: formValues.jalapeno,
      bacon: formValues.bacon,
      pineapple: formValues.pineapple,
      roasted_garlic: formValues.roasted_garlic,
      special: formValues.special.trim(),
    }
    // console.log(newPizza);
    postPizza(newPizza);
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]:''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  //SIDE EFFECTS
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues]);

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
      {
        order.map(piz => {
          return(<p key={piz.id}>{piz.name} ordered a {piz.size} pizza. (order #{piz.id})</p>)
        })
      }
    </div>
  );
};
export default App;
