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
return (
    <div className = {style.dialogsContainer}>
        <div className = {style.leftContainer}>
            <DialogItem id = "1" name="Владислав Корнев" img = "https://sun9-52.userapi.com/impg/Z-IXFmCD3dM5hdxVfhGHfZ_ql2mRalMgRhIjlA/QxbtyIxJkCA.jpg?size=50x0&quality=88&crop=0,0,1913,1913&sign=2428d67cb8e3e61db53365b18d0c7471&ava=1"/>
            <DialogItem id = "2" name="Арина Палазник" img = "https://sun9-75.userapi.com/impf/c857732/v857732465/f13d6/nNATb1FXOIE.jpg?size=50x0&quality=88&crop=173,173,1382,1382&sign=adfb10f60475c5ce22fd7aa4112f10e8&ava=1"/>
            <DialogItem id = "3" name="Олег Алисейко" img = "https://sun9-74.userapi.com/impf/c857724/v857724280/b81c5/bj_yGRQwIMc.jpg?size=50x0&quality=88&crop=142,42,322,322&sign=d4b5d830ed5a279fdb2177fc26918c01&ava=1"/>
            <DialogItem id = "4" name="Виталий Протас" img = "https://sun9-49.userapi.com/impf/c858032/v858032041/3ae14/J6banUYGfb0.jpg?size=50x0&quality=88&crop=0,341,1361,1361&sign=fff62e40b855b5f4fe733459be50735f&ava=1"/>
        </div>
        <div className = {style.currentDialogContainer}>
          <Message name = "Влад Корнев" message = "Hello world" img = "https://sun9-52.userapi.com/impg/Z-IXFmCD3dM5hdxVfhGHfZ_ql2mRalMgRhIjlA/QxbtyIxJkCA.jpg?size=50x0&quality=88&crop=0,0,1913,1913&sign=2428d67cb8e3e61db53365b18d0c7471&ava=1"/>
          <MessageOwn name = "Павел Янсонс" message = "Владик, во даёшь!" img = "https://sun9-31.userapi.com/impf/D_t3p-usj9xqCb9EUM4BQYkOJgv6h2mvWQnz1g/bge5HqSqX3I.jpg?size=50x0&quality=88&crop=275,252,1121,1121&sign=6c05496f75be0972f7fb081e39532e85&ava=1"/>
        </div>
    </div>
)
}

export default Dialogs;