import React from 'react';


import styles from './message.module.css'

const style = {
    "currentDialogContainer": "message_currentDialogContainer__2XwQs",
	"personalize": "message_personalize__TeM86",
	"message": "message_message__17fto"
}

const Message = (props) => {
    return (
        <div className ={style.currentDialogContainer}>
        <div className = {style.personalize}>
            <img src={props.img} alt=""/>
    
        </div>
        <div className = {style.message}>
        <p>{props.name}</p>
           <span> {props.message}</span>
        </div>
    </div>
    )
}
export default Message;
