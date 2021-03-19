import React from 'react';
import './App.css';

import Header from "./components/header/header";
import Body from "./components/body/body";
import Home from "./components/home/home";
import Contact from "./components/contact/contact";

import Login from "./components/login/login";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import useToken from './useToken';


function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main-container">
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            
            <Route path="/body">
              <Body />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
