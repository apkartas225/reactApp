import React, { useState } from 'react'
import PostList from './components/PostList';
import './styles/index.css'

function App() {
  const [ posts, setPosts ] = useState([
    {id: 1, desc: 'Кино для Варвары', title: 'js'},
    {id: 2, desc: 'Кино для ', title: 'css'},
    {id: 3, desc: 'для кого то', title: 'react'},
  
  ]);
  const [ posts2, setPosts2 ] = useState([
    {id: 4, desc: 'Кино для Варвары', title: 'VUE'},
    {id: 2, desc: 'Кино для ', title: 'VUE'},
    {id: 5, desc: 'для кого то', title: 'VUE'},
  
  ]);
 
 
  return (
    <div className="App">
        <PostList posts={ posts } title= 'список js'/>

        <PostList posts={ posts2 } title={ 'список vue' }/>
    </div>
  );
}

export default App;
