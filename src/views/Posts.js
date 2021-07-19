import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';
import axios from 'axios';
import useFetch from '../service/useFetch';

const Posts = () => {
  const { data } = useFetch('http://localhost:8000/posts');
  console.log(data);

  return (
    <GridTemplate>
      {data && data.map(({ title, body, id }) => (
        <Card id={id} title={title} body={body} key={id} />
      ))}
    </GridTemplate>
  )
};

export default Posts;
