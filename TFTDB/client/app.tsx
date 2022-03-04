import * as React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/LoginContainer';
import NavBar from './containers/NavBarContainer';
import BuildContainer from './containers/BuildContainer';
import './scss/app.scss';


const App = () => {
  return ( 
    <React.Fragment >
      <NavBar />
      <div id="content-wrapper">
        <Routes>
          <Route path="/builder" element={<BuildContainer/>}/>
          <Route path="/comp-chooser"/>
          <Route path="/" element={<HomeContainer/>} />
          <Route path="/login" element={<LoginContainer/>}/>
          <Route path="/signup"/>
        </Routes>
      </div>
    </React.Fragment>
  )
}

export default App; 