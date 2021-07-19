import axios from 'axios';
import React, { Component } from 'react';
import useFetch from '../service/useFetch';
import Comment from './Comment';

const CommentGroup = (state) => {
    const { postId } = state;
    const { data } = useFetch(`http://localhost:8000/posts/${postId}/comments`);
    console.log(data);

    return (
        <div>
          {data &&
            data.map(({ id, email, body }) => 
            <Comment id={id} email={email} body={body} key={id} />
            )}
        </div>
      );
}

export default CommentGroup;
