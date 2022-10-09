import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, title, remove }) => {

    return (
        <div>
            <h1 style={ {textAlign: 'center'} } > { title } </h1>
            { posts.map( (post, i) =>
                <div>
                    <PostItem remove={remove} post={post} key={post.title} index={i} />
                </div>
            ) }
        </div>
    )
}

export default PostList;