import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './components/Checkout'
import Login from './components/Login';
import Orders from './components/Orders';
import { auth } from './firebase'
import { useStateValue } from './StateProvider';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_JlbU8siwaS0BodJRr1Gb7wFx');

function App() {

  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  // Creating a listener to keep track of who's signed in
  useEffect(() => {
    // will run only once when the app component loads...
    
    // As soon as the app loads below code will attach the listener
    auth.onAuthStateChanged(authUser => {

      if(authUser) {
        // The user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      }
      else {
        // The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          
          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>

          <Route path="/payments">
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>

          <Route path="/orders">
            <Header/>
            <Orders/>
          </Route>

          <Route path="/">
            <Header/>
            <Home/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
