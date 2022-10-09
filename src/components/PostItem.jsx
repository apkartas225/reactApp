import React from "react";
import { Mybutton } from "./UI/button/Mybutton";


const PostItem = ( props ) => {
   
        return (
            <div className='container'>
                <div className='post'>
                    <div className='id'>{props.index + 1}</div>
                    <div className='title'>{props.post.title}</div>
                    <div className='description'>{props.post.desc}</div>
                    <Mybutton onClick={ () => props.remove(props.post) } className='remove_post'>удалить</Mybutton>
                </div>
          </div>
        )
}
export default PostItem