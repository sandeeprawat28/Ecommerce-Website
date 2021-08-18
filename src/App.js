import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import Footer from "./Footer";
import Prime from "./Prime";

const promise = loadStripe (
  //stripe url for online payment
  "pk_test_51JGICPSDMq6MFB4Eeej2th9TFkN7SiBT7BZSVPO7YmthO98wDiSRtjxUOI1M2ZfEueAxRLT7xl7JKnNYM9bjN9K800CLeUL3sB"
);
 
function App() {
  const [{}, dispatch] = useStateValue();
  //useEffect <<<<<<< POWERFUl code which runs based on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          //the user is logged in
          dispatch({
            type: "SET_USER",
            user: authUser
          })
        } else {
          //the user is logged out
          dispatch({
            type: "SET_USER",
            user: null
          })
        }
      }) 
      return () => {
        //any cleanup operations go in there
        unsubscribe();
      }
  }, []);

  return (
    <Router>
        <div className="app">
          <Switch>  
              <Route path="/orders">
                <Header/> 
                <Orders/>
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/checkout">
                <Header/>
                <Checkout/>
              </Route>    
              <Route path="/payment">
                <Header/>
                <Elements stripe={promise}>
                <Payment />
                </Elements>
              </Route>
              <Route path="/prime">
                <Header/> 
                <Prime/>
                <Footer/>
              </Route>
              <Route path="/">
                <Header/>
                <Home/>
                <Footer/>
              </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;


