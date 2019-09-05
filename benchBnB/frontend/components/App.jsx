import React from "react";
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './form/login_form_container';
import SignupFormContainer from './form/signup_form_container';
import { AuthRoute } from '../util/routes_util';

const App = () => (
  <div>
    <header>
      <h1>benchBnB</h1>
      <GreetingContainer />
    </header>
    
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />

  </div>
);

export default App;