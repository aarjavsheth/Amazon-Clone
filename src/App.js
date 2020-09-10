import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './components/Checkout'
import Login from './components/Login';
import { auth } from './firebase'
import { useStateValue } from './StateProvider';

function App() {

  const [{}, dispatch] = useStateValue();

  // Creating a listener to keep track of who's signed in
  useEffect(() => {
    // will run only once when the app component loads...
    
    // As soon as the app loads below code will attach the listener
    auth.onAuthStateChanged(authUser => {
      // console.log('USER :',authUser);

      if(authUser) {
        // The user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      }
      else {
        // The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="App">
        <Switch>
          
          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/checkout">
            <Header/>
            <Checkout/>
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
