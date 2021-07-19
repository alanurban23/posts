import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import axios from 'axios';
import Comment from '../Comments/Comment';
import CommentGroup from '../Comments/CommentGroup';

class DetailsPage extends Component {
  state = {
    activeItem: {
      title: '',
      body: '',
    },
  };

  componentDidMount() {
    const { match } = this.props;
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
      .then(({ data }) => {
        this.setState({ activeItem: data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { activeItem } = this.state;
    console.log('active', activeItem);
    return (
      <div>
        <DetailsTemplate title={activeItem.title} body={activeItem.body} />
        <CommentGroup postId={activeItem.id}/>
      </div>
    );
  }
}

export default DetailsPage;
