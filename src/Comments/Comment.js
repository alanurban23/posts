import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Heading from '../components/atoms/Heading/Heading';
import useFetch from '../service/useFetch';

const StyledComment = styled.div`
  margin: 25px 150px 25px 70px;
  max-width: 30vw;
  position: relative;
  border-bottom: 1px solid darkgray;
`;

const Comment = ({email, body}) => {
  return (
    <div>
      <StyledComment>
        <strong>{email}</strong>
        <p>{body}</p>
      </StyledComment>
    </div>
  );
}

export default Comment;
