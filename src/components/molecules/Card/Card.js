import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  :first-of-type {
    z-index: 9999;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    `}
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

class Card extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => this.setState({ redirect: true });

  render() {
    const { id, pageContext, title, body, removeItem } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${pageContext}/details/${id}`} />;
    }

    return (
      <StyledWrapper>
        <InnerWrapper activeColor={pageContext}>
          <StyledHeading>{title}</StyledHeading>
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{body}</Paragraph>
        </InnerWrapper>
        <InnerWrapper flex>
          <Button onClick={() => removeItem(pageContext, id)} secondary>
            Usuń
          </Button>
          <Button onClick={this.handleCardClick} secondary>
            Czytaj
          </Button>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  pageContext: PropTypes.oneOf(['posts']),
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  pageContext: 'posts',
};

const mapDispatchToProps = dispatch => ({
  removeItem: (itemType, id) => {
    dispatch(removeItemAction(itemType, id));
  },
});

export default connect(null, mapDispatchToProps)(withContext(Card));
