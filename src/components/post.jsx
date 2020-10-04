import React from 'react';
import styles from '../components/post.module.css';

const style = {
    "postItem": "post_post_item__3rMlb",
	"avatarPostImg": "post_avatarPostImg__138Xu",
	"avatar-post_container": "post_avatar-post_container__2EQAG",
	"nameActionContainer": "post_nameActionContainer__3Zt38",
	"deletePost": "post_deletePost__1FdEv",
	"content": "post_content__3iyDL",
	"actions": "post_actions__1n3xj",
	"likeAction": "post_likeAction__2vGkQ",
	"likeCounter": "post_likeCounter__2ZLTF"
}
export default function ItemWall(props){
    return (
        <div className = {style.postItem}>
        <div className = {style["avatar-post_container"]}>
          <img 
          className = {style.avatarPostImg} 
          src = "https://sun9-31.userapi.com/impf/D_t3p-usj9xqCb9EUM4BQYkOJgv6h2mvWQnz1g/bge5HqSqX3I.jpg?size=200x0&quality=90&crop=135,0,1401,2048&sign=c0f6c0971ef33631d1d630645bf8c0bf&ava=1"
          ></img>
          <div className ={style.nameActionContainer}>
            <h2 className = "acc_name">
              {props.name}
            </h2>
            <p>
              posted at 21.13 PM
            </p>
          </div>
        </div>
       
        <div className = {style.deletePost}>
        <i class="fas fa-times"></i>
        </div>
      <div className = {style.content}>
        {props.text}
      </div>
      <div className ={style.actions}>
         <div className = {style.likeAction}>
         <i class="far fa-heart"></i>
         </div>
         <div className = {style.likeCounter}>
    <p>{props.likesCount}</p>
         </div>
      </div>
      </div>
    )
}