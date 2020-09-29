import React from 'react';
import classes from './nav.module.css';


let classes2 = {
  'nav' : "nav_nav-item__2ST6o",
}
export default function Nav(){
    return (
        <nav className = "nav">
        <div className = {classes2.nav}><div className = "icon-cotainer"><i class="fas fa-user-alt"></i></div><a>Профиль</a></div>
        <div className = {classes2.nav}><div className = "icon-cotainer"><i class="fas fa-envelope"></i></div><a>Сообщения</a></div>
        <div className = {classes2.nav}><div className = "icon-cotainer"><i class="fas fa-newspaper"></i></div><a>Новости</a></div>
        <div className = {classes2.nav}><div className = "icon-cotainer"><i class="fas fa-music"></i></div><a>Музыка</a></div>
        <div className = {classes2.nav}><div className = "icon-cotainer"><i class="fas fa-cog"></i></div><a>Настройки</a></div>
      </nav>
    )
}