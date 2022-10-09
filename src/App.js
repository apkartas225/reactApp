import React, { useState, useRef, useMemo } from 'react'
import PostList from './components/PostList';

import { PostForm } from './components/PostForm';
import './styles/index.css'
import { MySelect } from './components/UI/select/MySelect';
import { Myinput } from './components/UI/input/Myinput';

function App() {
  const [ posts, setPosts ] = useState([
    {id: 1, desc: 'Кино для Варвары', title: 'vue', body: 'a'},
    {id: 2, desc: 'Кино для уебана', title: 'React', body: 'b'},
  ]);
  const [ selectedSort, setselectedSort ] = useState('');

  let [ searchQuery, setSearchQuery ] = useState('')

  
  const sortedPosts = useMemo( () => {
    console.log('sortedPosts')
    if ( selectedSort ) {
      return [...posts].sort( (a, b) => a[selectedSort].localeCompare( b[selectedSort] ) )
    } else {
      return posts
    } 
  }, [selectedSort, posts] );

  const sortedQueryPosts = useMemo( () => ( sortedPosts.filter( el => el.title.toLowerCase().includes(searchQuery.toLowerCase()) ) ), [searchQuery, sortedPosts] );

  const createPost = ( newPost ) => {
    setPosts([...posts, newPost]);
  }
  const removePost = ( post ) => {
    setPosts( posts.filter( el => el.id !== post.id ) );
  }
  const sortPosts = ( sort ) => {
    console.log('sort', sort)
    setselectedSort(sort)

  }



  return (
    <div className="App">
      <div>
        <Myinput
        placeholder='Поиск'
        value={ searchQuery }
        onChange={ e => setSearchQuery(e.target.value) }
        />

        <MySelect onChange={ sortPosts } value={selectedSort} options={[
           { value:'title', name: 'по Названию' },
           { value: 'body', name: 'по Описанию' }
        ]} defValue={'сортировка по'} style={{ margin: '20px' }} />
       
      </div>
      <PostForm create={ createPost } />
      { sortedQueryPosts.length ? <PostList posts={ sortedQueryPosts } remove={ removePost } title= 'список js'/> : 
        <h1 style={{ textAlign: 'center' }}>Пусто</h1>
      }
    </div>
  );
}

export default App;
