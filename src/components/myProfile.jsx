import React from 'react';
import slyles from './profile.module.css';
import ItemWall from './post.jsx';
const style = {
  'Wall': 'profile_Wall__8rBui' ,
  'avatarContainer':'profile_avatar-container__m8Njg' ,
  'Profile_information':'profile_Profile-information__YwFzN' ,
  'input_wall': 'profile_input_wall__1WrTP',
  'button': 'profile_button__2Pd17' ,
  'wallCreate' : 'profile_wall-create__3GR2c',
  'informationValue' : 'profile_information-value__1FNBP',
  'information' : 'profile_information__1IF2l ',
  'infoContainer' : 'profile_info-container__Puy1z',
  'right' : 'profile_right__16jyo',
  "myProfile": "profile_myProfile__30dfO",

}
export default function MyProfile(){
    return(
     <div className ={style.myProfile}>
       <div className = {style.Wall}>
       <div className = "left">
        <div className = {style.avatarContainer}>
           <img src = "https://sun9-31.userapi.com/impf/D_t3p-usj9xqCb9EUM4BQYkOJgv6h2mvWQnz1g/bge5HqSqX3I.jpg?size=200x0&quality=90&crop=135,0,1401,2048&sign=c0f6c0971ef33631d1d630645bf8c0bf&ava=1"></img>
         </div>
        </div>
         <div className = {style.right}>
                <div className = {style.Profile_information}>
         <div className = "name-container"> <h1>Павел Янсонс</h1></div>
         <div className = {style.infoContainer}>
    
                <div className = {style.information}>
         <p>День рождения:</p>
         <p>Место рождения:</p>
         <p>Место работы:</p>
         </div>
         <div className = {style.informationValue}>
          <p>5 августа 1999</p>
          <p>Гомель</p>
          <p>Epam Systems</p>
         </div>
         </div>
    
       
       </div>
         <div className = {style.wallCreate}>
           <textarea type = "text" className = {style.input_wall}></textarea>
           <button className = {style.button} type = "submit" >Отправить</button>
         </div>
         <ItemWall name = "Pavel Yansons" text = "Suck or not to suck that is the question"/>
         <ItemWall name = "Pavel Yansons" text = "Hello world from 603's room"/>
        
         </div>
    
       </div>
       
     </div>
    )
}

