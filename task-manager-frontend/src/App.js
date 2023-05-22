import React, { useState } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


import SignInPage from './pages/SignInPage';
import TasksPage from './pages/TaskPage';


/*
  @TODO: Implement route guards and sign out functionality
*/
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" Component={SignInPage} />
          <Route path="/tasks" Component={TasksPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;