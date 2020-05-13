import React, { Component, Fragment } from 'react';
import { BrowserrRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';


class  App extends Component {
  state = {
    user: [],
    loading: false,
    alert: null
  };

   // search github users
   searchUsers = async text => {
     this.setState({ loading: true });

     const res = await axios.get(`https://api.github.com/users?client_id=$
     {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
     {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

   this.setState({ users: res.data, loading: false});

  }; // get single Github user
  getUser = async (username) => {
    this.setState({ loading: true });
    

this.setState({ user: res.data.item, loading: false });

}

  // clear users from state
  clearUser = () => this.setState({ user: [], loading: false });

  //set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: {msg, type }});

    setTimeout(() => this.setState({ alert: null}),5000);

  };

  render() {
    const { users, loading } = this.state;

  return (
    <Router>
    <div className='App'>
  
    <Navbar />
    <div className='container'>
<Alert alert={this.state.alert} />
<Switch>
  <Route exact path='/' 
  render={props => (
    <Fragment>
           <Search 
      searchUser={this.searchUsers} 
      clearUser={this.clearUser} 
      showClear={users.length > 0 ? true : false} />
      setAlert={this.setAlert} 
      />
   
    <Users loading={loading} users={users} />
    </Fragment>
  )}
  />
   <Route exact path='/about' component={About} />
</Switch>
  
     </div>
     </div>
     </Router>
  );
}
}

export default App;
