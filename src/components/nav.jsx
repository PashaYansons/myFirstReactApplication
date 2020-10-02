import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './nav.module.css';


let classes2 = {
  "navItem": "nav_navItem__3VFr5",

	"nav": "nav_nav__3RSrj"
}
export default function Nav(){
    return (
        <nav className = {classes2.nav}>
        <div className = {classes2.navItem}><div className = "icon-cotainer"><i className="fas fa-home"></i></div><NavLink to = "/myProfile" /* activeClassName={classes2.active} */>Профиль</NavLink></div>
        <div className = {classes2.navItem}><div className = "icon-cotainer"><i className="fas fa-newspaper"></i></div><a>Новости</a></div>
        <div className = {classes2.navItem}><div className = "icon-cotainer"><i className="fas fa-envelope"></i></div><NavLink to = '/dialogs'>Сообщения</NavLink></div>
        <div className = {classes2.navItem}><div className = "icon-cotainer"><i className="fas fa-user-alt"></i></div><a>Друзья</a></div>
        <div className = {classes2.navItem}><div className = "icon-cotainer"><i className="fas fa-music"></i></div><a>Музыка</a></div>
        <div className = {classes2.navItem}><div className = "icon-cotainer"><i className="fas fa-cog"></i></div><a>Настройки</a></div>
      </nav>
    )
}