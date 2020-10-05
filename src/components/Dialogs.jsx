import React from 'react';
import styles from './dialogs.module.css'
import DialogItem from './dialogItem'
import Message from './message'
import MessageOwn from './messageOwn'

const style = {
    "content": "dialogs_content__Plzvb",
	"dialogsContainer": "dialogs_dialogsContainer__3GFzO",
	"leftContainer": "dialogs_leftContainer__3ISry",
    "currentDialogContainer": "dialogs_currentDialogContainer__3ZEsg",
 "dialogItem": "dialogs_dialogItem__26Wmr"
}
  

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogsData.map(el =>  <DialogItem id = {el.id} name={el.name} img = {el.img}/>)
    let messagesElements = props.state.messagesData.map (el => <Message name = {el.name} message = {el.message} img ={el.img} id = {el.id}/>)

return (
    <div className = {style.dialogsContainer}>
        <div className = {style.leftContainer}>
            {dialogsElements}
        </div>
        <div className = {style.currentDialogContainer}>
            {messagesElements}
        </div>
    </div>
)
}

export default Dialogs;