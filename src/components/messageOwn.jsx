import React from 'react';


import styles from './messageOwn.module.css'

const style = {
    "currentDialogContainer": "messageOwn_currentDialogContainer__2sqy3",
	"personalize": "messageOwn_personalize__3p2lP",
	"message": "messageOwn_message__3UBLx"
}

const MessageOwn = (props) => {
    return (
        <div className = {style.currentDialogContainer}>
        
        <div className = {style.message} >
        <p>{props.name}</p>
           <span> {props.message}</span>
        </div>
        <div className  = {style.personalize}>
            <img src={props.img} alt=""/>
    
        </div>
    </div>
    )
}
export default MessageOwn;
