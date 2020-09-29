import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Nav from './components/nav';

import MyProfile from './components/myProfile';
function App() {
  return (
     
    <div className = "app-wrapper">
    <Header />
     <Nav />
    
      <MyProfile />
    </div>
  );
}



export default App;
