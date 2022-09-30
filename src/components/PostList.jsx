import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, title }) => {
    return (
        <div>
            <h1 style={ {textAlign: 'center'} } > { title } </h1>
            { posts.map( (post, i) =>
                <div>
                    <PostItem post={post} key={i} index={i} />
                </div>
            ) }
        </div>
    )
}

export default PostList;