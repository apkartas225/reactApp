import React from "react";


const PostItem = ( props ) => {
    console.log('props :>> ', props);
        return (
            <div className='container'>
                <div className='post'>
                    <div className='title'>{props.post.title}</div>
                    <div className='description'>{props.post.desc}</div>
                    <div className='remove_post'>удалить</div>
                </div>
          </div>
        )
}
export default PostItem