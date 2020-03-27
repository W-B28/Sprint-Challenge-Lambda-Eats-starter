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





  return (
    <>
    <form>
      <label htmlFor="name">
        Order Name
        <input
          type="text"
          name="name"
          minlength="2"
          required
        />
        </label>

        // *******REMEMBER TO ADD onCHAGES TO INPUTS**************

        <label htmlFor="sizes">
               Please Select Size Below:
               <select id="sizes" name="sizes" >
                 <option value="Newsletter">Newsletter</option>
                 <option value="Yard Work">Yard Work</option>
                 <option value="Administrative Work">Administrative Work</option>
                 <option value="Tabling">Tabling</option>
               </select>
             </label>



    </form>

    </>
  );
}

// {buttonDisabled}
