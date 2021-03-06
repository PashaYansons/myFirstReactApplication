import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.jsx';
import Nav from './components/nav.jsx';
import Dialogs from './components/Dialogs.jsx';
import MyProfile from './components/myProfile.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
function App(props) {

  return (
     <BrowserRouter>
    <div className = "app-wrapper">
      <Header />
      <div className = "contentWrapper">
         <Nav />
      <Route  path = "/dialogs" render = { () => <Dialogs state = {props.state.dialogsPage}/>}/>
      <Route  path="/myProfile" render = { () => <MyProfile state = {props.state.profilePage}/>}/>
      </div>
     
    
    </div>
    </BrowserRouter>
  );
  
}



export default App;
