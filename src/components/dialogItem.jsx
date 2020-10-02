import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './dialogItem.module.css';

const styles = {
    "dialogItem": "dialogItem_dialogItem__1rytF"
}
const DialogItem = (props) => {
    return (
        <NavLink className = {styles.dialogItem} to = {"/dialogs/" + props.id}>
        <img src={props.img} alt=""/>
<p>{props.name}</p>
    </NavLink>
    )
}
export default DialogItem;