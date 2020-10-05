
/* let postsData = [
    {id : 1,name : 'Павел Янсонс', text : 'Suck or not to suck that is the question',likesCount : 23 },
    {id : 2,name : 'Павел Янсонс', text : 'Hello world from 603\'s room',likesCount : 11 },
    {id : 2,name : 'Павел Янсонс', text : 'There are Gena and Galya two birbs',likesCount : 228 },
  ]
  let dialogsData = [
    {id : 1,name : 'Владислав Корнев', img : 'https://sun9-52.userapi.com/impg/Z-IXFmCD3dM5hdxVfhGHfZ_ql2mRalMgRhIjlA/QxbtyIxJkCA.jpg?size=50x0&quality=88&crop=0,0,1913,1913&sign=2428d67cb8e3e61db53365b18d0c7471&ava=1'},
    {id : 2,name : 'Арина Палазник', img : 'https://sun9-75.userapi.com/impf/c857732/v857732465/f13d6/nNATb1FXOIE.jpg?size=50x0&quality=88&crop=173,173,1382,1382&sign=adfb10f60475c5ce22fd7aa4112f10e8&ava=1'},
    {id : 3,name : 'Олег Алисейко', img : 'https://sun9-74.userapi.com/impf/c857724/v857724280/b81c5/bj_yGRQwIMc.jpg?size=50x0&quality=88&crop=142,42,322,322&sign=d4b5d830ed5a279fdb2177fc26918c01&ava=1'},
    {id : 4,name : 'Виталий Протас', img : 'https://sun9-49.userapi.com/impf/c858032/v858032041/3ae14/J6banUYGfb0.jpg?size=50x0&quality=88&crop=0,341,1361,1361&sign=fff62e40b855b5f4fe733459be50735f&ava=1'},
  ]
  
  let messagesData = [
    {id : 1, message : "Hello WOrld", name : 'Владислав Корнев', img : 'https://sun9-52.userapi.com/impg/Z-IXFmCD3dM5hdxVfhGHfZ_ql2mRalMgRhIjlA/QxbtyIxJkCA.jpg?size=50x0&quality=88&crop=0,0,1913,1913&sign=2428d67cb8e3e61db53365b18d0c7471&ava=1'},
    {id : 2, message : "Hey",         name : 'Арина Палазник',   img : 'https://sun9-75.userapi.com/impf/c857732/v857732465/f13d6/nNATb1FXOIE.jpg?size=50x0&quality=88&crop=173,173,1382,1382&sign=adfb10f60475c5ce22fd7aa4112f10e8&ava=1'},
    {id : 3, message : "Priv ",       name : 'Олег Алисейко',    img : 'https://sun9-74.userapi.com/impf/c857724/v857724280/b81c5/bj_yGRQwIMc.jpg?size=50x0&quality=88&crop=142,42,322,322&sign=d4b5d830ed5a279fdb2177fc26918c01&ava=1'},
    {id : 4, message : "Brotanchek",  name : 'Виталий Протас',   img : 'https://sun9-49.userapi.com/impf/c858032/v858032041/3ae14/J6banUYGfb0.jpg?size=50x0&quality=88&crop=0,341,1361,1361&sign=fff62e40b855b5f4fe733459be50735f&ava=1'},
  ] */
  let state = {
      profilePage : {
          postsData :  [
        {id : 1,name : 'Павел Янсонс', text : 'Suck or not to suck that is the question',likesCount : 23 },
        {id : 2,name : 'Павел Янсонс', text : 'Hello world from 603\'s room',likesCount : 11 },
        {id : 2,name : 'Павел Янсонс', text : 'There are Gena and Galya two birbs',likesCount : 228 },
],

      },
     dialogsPage: {
       messagesData : [
        {id : 1, message : "Hello WOrld", name : 'Владислав Корнев', img : 'https://sun9-52.userapi.com/impg/Z-IXFmCD3dM5hdxVfhGHfZ_ql2mRalMgRhIjlA/QxbtyIxJkCA.jpg?size=50x0&quality=88&crop=0,0,1913,1913&sign=2428d67cb8e3e61db53365b18d0c7471&ava=1'},
        {id : 2, message : "Hey",         name : 'Арина Палазник',   img : 'https://sun9-75.userapi.com/impf/c857732/v857732465/f13d6/nNATb1FXOIE.jpg?size=50x0&quality=88&crop=173,173,1382,1382&sign=adfb10f60475c5ce22fd7aa4112f10e8&ava=1'},
        {id : 3, message : "Priv ",       name : 'Олег Алисейко',    img : 'https://sun9-74.userapi.com/impf/c857724/v857724280/b81c5/bj_yGRQwIMc.jpg?size=50x0&quality=88&crop=142,42,322,322&sign=d4b5d830ed5a279fdb2177fc26918c01&ava=1'},
        {id : 4, message : "Brotanchek",  name : 'Виталий Протас',   img : 'https://sun9-49.userapi.com/impf/c858032/v858032041/3ae14/J6banUYGfb0.jpg?size=50x0&quality=88&crop=0,341,1361,1361&sign=fff62e40b855b5f4fe733459be50735f&ava=1'},
      ] ,
      dialogsData : [
        {id : 1,name : 'Владислав Корнев', img : 'https://sun9-52.userapi.com/impg/Z-IXFmCD3dM5hdxVfhGHfZ_ql2mRalMgRhIjlA/QxbtyIxJkCA.jpg?size=50x0&quality=88&crop=0,0,1913,1913&sign=2428d67cb8e3e61db53365b18d0c7471&ava=1'},
        {id : 2,name : 'Арина Палазник', img : 'https://sun9-75.userapi.com/impf/c857732/v857732465/f13d6/nNATb1FXOIE.jpg?size=50x0&quality=88&crop=173,173,1382,1382&sign=adfb10f60475c5ce22fd7aa4112f10e8&ava=1'},
        {id : 3,name : 'Олег Алисейко', img : 'https://sun9-74.userapi.com/impf/c857724/v857724280/b81c5/bj_yGRQwIMc.jpg?size=50x0&quality=88&crop=142,42,322,322&sign=d4b5d830ed5a279fdb2177fc26918c01&ava=1'},
        {id : 4,name : 'Виталий Протас', img : 'https://sun9-49.userapi.com/impf/c858032/v858032041/3ae14/J6banUYGfb0.jpg?size=50x0&quality=88&crop=0,341,1361,1361&sign=fff62e40b855b5f4fe733459be50735f&ava=1'},
      ],
      },
      
      
  }
  export default state;