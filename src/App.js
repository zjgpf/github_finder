import React from 'react';
import Navbar from './components/layouts/Navbar';
import Alert from './components/layouts/Alert';
import User from './components/users/User';
import About from './components/pages/About';
import Home from './components/pages/Home';
import GithubState from './contexts/github/GithubState';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <GithubState>
      <BrowserRouter>
        <div className="App">
          <div className='mx-40'>
            <Alert />
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </GithubState>
  );
}

export default App;
