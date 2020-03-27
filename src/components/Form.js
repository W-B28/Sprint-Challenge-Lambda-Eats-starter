import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'reactstrap';
import axios from "axios";
import * as yup from "yup";


const formSchema = yup.object().shape({
  name: yup.string().required("Name is a required field."),
});


export default function Form() {
  // state for whether our button should be disabled or not.
  const [buttonDisabled, setButtonDisabled] = useState(true);

  // managing state for our form inputs
  const [formState, setFormState] = useState({
    name: "",
    size: "",
    toppings: "",
    instructions: "",
  });

// state for our errors
  const [errors, setErrors] = useState({
    name: "",
    size: "",
    toppings: "",
    instructions: "",
  });

  // new state to set our post request too.
  // So we can console.log and see it.
  const [post, setPost] = useState([]);

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const formSubmit = e => {
     e.preventDefault();
}

const addNewPizza= pizza => {
    const newPizza = {

      name: pizza.name,
      size: pizza.size,
      toppings: pizza.toppings,
      instructions: pizza.instructions,
    };
    setFormState([...formState, newPizza]);
  };

  const handleChange = e => {
    console.log(formState)
    setFormState({...formState, [e.target.name]:e.target.value})
    console.log(formState)
  }

// *******REMEMBER TO ADD onCHAGES TO INPUTS**************}
  return (
    <>
    <form onSubmit={formSubmit}>
      <label htmlFor="name">
        Order Name
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formState.name}
          minlength="2"
          required
        />
        </label>


        <label htmlFor="sizes">
               Please Select Size Below:
               <select id="sizes" name="sizes" >
                 <option value="small">Small</option>
                 <option value="medium">Medium</option>
                 <option value="large">Large</option>
                 <option value="extra large">Extra Large</option>
               </select>
             </label>

             <label htmlFor="special-instructions">
               Special Instructions
               <textarea
                 name="special-instructions"
                 rows="4"
                 cols="50"
                 // value={formState.motivation}
                 // onChange={inputChange}
               />
             </label>

    </form>

    <button type="submit" >Order Now!</button>


    </>
  );
}
