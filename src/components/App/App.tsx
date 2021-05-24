import React from 'react';
import './App.scss';
import {LayoutBar} from "../Layout/LayoutBar/LayoutBar";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import {ProjectList} from "../Project/ProjectList/ProjectList";

const App = () => {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      <Router>
        <LayoutBar/>
        <div className='content-wrapper'>
          {/*<Route path='/' component={}/>*/}
          <ProjectList/>
        </div>
      </Router>
    </div>
  );
};

export default App;
