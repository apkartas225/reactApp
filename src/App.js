import React, { useState, useRef } from 'react'
import PostList from './components/PostList';

import { PostForm } from './components/PostForm';
import './styles/index.css'

function App() {
  
  const [ posts, setPosts ] = useState([
    {id: 1, desc: 'Кино для Варвары', title: 'js'},
    {id: 2, desc: 'Кино для уебана', title: 'css'},
  
  ]);
 
  const createPost = ( newPost ) => {
    setPosts([...posts, newPost]);
  }
 
  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList posts={ posts } title= 'список js'/>
    </div>
  );
}

export default App;
