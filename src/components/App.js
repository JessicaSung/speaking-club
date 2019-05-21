import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Dashboard from './dash/Dashboard';
import EditProfile from './edit/EditProfile';
import Member from './members/Member';
import NavBar from './NavBar';
import Welcome from './Welcome';

const App = () => {
  return (
    <div className="app">
      <HashRouter>
        <div>
          <NavBar />
          <Container>
            <Route path="/" exact component={Welcome} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/edit" component={EditProfile} />
            <Route path="/members" component={Member} />
          </Container>
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
