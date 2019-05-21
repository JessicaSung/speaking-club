import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Dashboard from './dash/Dashboard';
import Editdash from './edit/Editdash';
import Member from './members/Member';
import NavBar from './NavBar';
import Welcome from './Welcome';

const App = () => {
  return (
    <div className="app">
      <HashRouter>
        <div>
          <NavBar />
          <Route path="/" exact component={Welcome} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/editdash" component={Editdash} />
          <Route path="/members" component={Member} />
        </div>
      </HashRouter>
    </div>
  );
};

export default App;
