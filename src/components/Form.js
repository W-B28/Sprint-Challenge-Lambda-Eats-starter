import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'reactstrap';
import axios from "axios";
import * as yup from "yup";


export default function Form() {
  // state for whether our button should be disabled or not.
  const [buttonDisabled, setButtonDisabled] = useState(true);

  // managing state for our form inputs
  const [formState, setFormState] = useState({
    name: "",
    size: "",
    toppings: "",
    instructions: "",
    specInstr:""
  });

  // state for our errors
  const [errors, setErrors] = useState({
    name: "",
    size: "",
    toppings: "",
    instructions: "",
    specInstr:""
  });

  // new state to set our post request too.
  // So we can console.log and see it.
  const [post, setPost] = useState([]);

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

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
    setFormState({...formState, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
  });
  console.log(formState)
}

const formSchema = yup.object().shape({
  name: yup.string().required("Name is a required field."),
});


//button disabled
   useEffect(() => {
       formSchema.isValid(formState).then(valid => {
         setButtonDisabled(!valid);
       });
     }, [formState]);


   //validate changes
   const validateChange = e => {
       yup
         .reach(formSchema, e.target.name)
         .validate(e.target.value)
         .then(valid => {
           setErrors({
             ...errors,
             [e.target.name]: ""
           });
         })
         .catch(err => {
           setErrors({
             ...errors,
             [e.target.name]: err.errors[0]
           });
         });
     };



   //on submit
   const formSubmit = e => {
       e.preventDefault();
       axios
         .post("https://reqres.in/api/users", formState)
         .then(res => {
           setPost(res.data);
           console.log("success", post);
           console.log(res.data.size)
           setFormState({
               name: "",
               size: res.data.size,
               pepperoni: false,
               mushrooms: false,
               peppers: false,
               sausage: false,
               specInstr: ""
           });
         })
         .catch(err => console.log(err.response));
     };

     function myFunction() {
       return alert(JSON.stringify(formState));
     }

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
  <select id="sizes" name="sizes" onChange={handleChange}
  >
  <option
  onChange={handleChange}
  value="small">Small
  </option>
  <option
  onChange={handleChange}
  value="medium">Medium
  </option>
  <option
  onChange={handleChange}
  value="large">Large
  </option>
  <option
  onChange={handleChange}
  value="extra large">Extra Large
  </option>
  </select>
  </label>

  <div className = 'toppingsChecklist'>

  <p>Select Toppings</p>

  <label htmlFor = 'pepperoni'>
  <input
  type='checkbox'
  name='pepperoni'
  id = 'pepperoniCheckBox'
  checked={formState.pepperoni}
  onChange={handleChange}
  />
  Pepperoni
  </label>
  <br/>

  <label htmlFor = 'mushrooms'>
  <input
  type='checkbox'
  name='mushrooms'
  id = 'mushroomsCheckBox'
  checked={formState.mushrooms}
  onChange={handleChange}
  />
  Mushrooms
  </label>
  <br/>

  <label htmlFor = 'peppers'>
  <input
  type='checkbox'
  name='peppers'
  id = 'peppersCheckBox'
  checked={formState.peppers}
  onChange={handleChange}
  />
  Peppers
  </label>
  <br/>

  <label htmlFor = 'sausage'>
  <input
  type='checkbox'
  name='sausage'
  id = 'sausageCheckBox'
  checked={formState.sausage}
  onChange={handleChange}
  />
  Sausage
  </label>
  <br/>

  </div>

  <label htmlFor = 'Special Instructions'>
  Special Instructions
  <br/>
  <textarea
  name = 'specInstr'
  id = 'specInstr'
  placeholder = 'Type instructions here...'
  value={formState.specInstr}
  onChange={handleChange}
  />
  </label>
  <br/>
  </form>

<button onClick={myFunction} name="orderButton" type ="submit" disabled={buttonDisabled}>Order Now!</button>
<pre>{JSON.stringify(post, null, 2)}</pre>
  </>
);
}
