import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import './App.css';

class App extends Component {

  state = {
    loading: false,
    users: [],
    user: {},
    repos: [],
    showAlert: false
  };

  //async componentDidMount() {
  //  const CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
  //  const CLIENT_SECRET = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
  //  this.setState( { loading: true } ); 
  //  const data = await fetch(`https://api.github.com/users?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`);
  //  const users = await data.json();
  //  this.setState( { users, loading: false } ); 
  //}

  search = async text => {
    const CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
    const CLIENT_SECRET = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
    this.setState( { loading: true } ); 
    const data = await fetch(`https://api.github.com/search/users?q=${text}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`);
    const _users = await data.json();
    const users = _users.items;
    this.setState( { users, loading: false } ); 
  }

  getUser = async userName => {
    const CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
    const CLIENT_SECRET = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
    this.setState( { loading: true } ); 
    const data = await fetch(`https://api.github.com/users/${userName}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`);
    const user = await data.json();
    this.setState( { user, loading: false } ); 
  }

  getUserRepos = async userName => {
    const CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
    const CLIENT_SECRET = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
    this.setState( { loading: true } ); 
    const data = await fetch(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`);
    const repos = await data.json();
    this.setState( { repos, loading: false } ); 
  }

  clear = () => this.setState({loading: false, users: []});

  setAlert = () => {
    this.setState({ showAlert: true });
    setTimeout(() => this.setState({showAlert: false}), 3000);
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <div className='container'>
            <Alert showAlert={this.state.showAlert} />
            <Navbar />
              <Switch>
                <Route
                  exact
                  path='/'
                  render={ props => (
                      <Fragment>
                        <Search search={this.search} clear={this.clear} showClear={this.state.users.length > 0} setAlert={this.setAlert} />
                        <Users loading={this.state.loading} users={this.state.users}/>
                      </Fragment>
                    )
                  }
                />
                <Route exact path='/About' component={About} />
                <Route exact path='/user/:userName' render={ props => (
                  <User {...props} getUser={this.getUser} user={this.state.user} getUserRepos={this.getUserRepos} repos={this.state.repos} loading={this.state.loading} />
                )} />
              </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
