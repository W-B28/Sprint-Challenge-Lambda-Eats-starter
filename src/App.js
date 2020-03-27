import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'reactstrap';
import Home from './components/Home';
import Form from './components/Form';



const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <div className="nav-links">
        <Link exact className="home-link" to="/">
          Home
        </Link>
        <Link className="pizza-link" to="/pizza">
        Order Form
        </Link>
        <Route

         path="/"
        component={Home}
        />
        <Route

        exact path="/pizza"
        component={Form}
        />

      </div>
      </>
  );
};
export default App;
