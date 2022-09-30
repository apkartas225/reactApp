import React from 'react';
import { useState } from 'react'
import { Myinput } from './UI/input/Myinput'
import { Mybutton } from './UI/button/Mybutton'

export const PostForm = ( {create} ) => {
  const [ post, setNewPost ] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    setNewPost({ title: '', body: '' });
    
    e.preventDefault();
    
    setNewPost({ title: '', body: '' });
    const newPost = { ...post, id: Date.now() }
    create( newPost )

  }   

    return (
        <div>
             <form>
                <Myinput
                onChange={e => setNewPost( {...post, title: e.target.value} )}
                value={post.title} placeholder='Название поста'
                />

                <Myinput
                onChange={e => setNewPost( {...post, body: e.target.value} )}
                value={post.body} placeholder='Название поста'
                />

                <Mybutton onClick={ addNewPost } >
                Create Posts
                </Mybutton>
            </form>
        </div>
       
    )

}