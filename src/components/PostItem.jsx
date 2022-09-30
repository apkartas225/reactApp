import React from "react";


const PostItem = ( props ) => {
        return (
            <div className='container'>
                <div className='post'>
                    <div className='id'>{props.index + 1}</div>
                    <div className='title'>{props.post.title}</div>
                    <div className='description'>{props.post.desc}</div>
                    <div className='remove_post'>удалить</div>
                </div>
          </div>
        )
}
export default PostItem