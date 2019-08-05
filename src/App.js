import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect,Switch, Route} from 'react-router-dom';
import LoginPage from './components/auth/login/login';
import ResgisterPage from './components/auth/register/register';
import ForgotPassword from './components/auth/forgot-password/forgot-password';
// import Dashboard from './components/dashboard/dashboard';
import './App.css';
import Layout from './components/dashboard/layout/layout';
import Notfound from './components/auth/notfound';

class App extends Component {
  name = "Md Mahedi Hasan Shipra";
  isLogedIn = false;
  render() {
    return (
      <Router>
      <div className="App">
        <Switch>
            <Route exact path='/' component={LoginPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/register' component={ResgisterPage} />
            <Route path='/forgot-password' component={ForgotPassword} />
            <Route path='/dashboard' component={Layout} />
            <Route path='/dashboard/users' component={Layout} />
            
            <Redirect from='*' to='/dashboard' component={Layout} />
            
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
