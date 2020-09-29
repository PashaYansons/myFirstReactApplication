import React from 'react';
import styles2 from './header.module.css';

const obj = {
    "header" : 'header_header__8JJ5g',
    'logo' : 'header_logo__3TVTW',
}
export default function Header(){
    return (
       <header className = {obj.header}>
<p className = {obj.logo}>Social students</p>
</header> 
    )
}
