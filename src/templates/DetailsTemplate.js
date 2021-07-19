import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  max-width: 50vw;
  position: relative;

  @media (max-width: 1200px) {
    max-width: 80vw;
  }
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const DetailsTemplate = ({ pageContext, title, body }) => {
  console.log(title);
  return (
    <UserPageTemplate>
      <StyledWrapper>
        <StyledPageHeader>
          <StyledHeading big as="h1">
            {title}
          </StyledHeading>
        </StyledPageHeader>
        <Paragraph>{body}</Paragraph>
        <Button as={Link} to={`/${pageContext}`} activecolor={pageContext}>
          save / close
        </Button>
      </StyledWrapper>
    </UserPageTemplate>
  )
};

DetailsTemplate.propTypes = {
  pageContext: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  title: '',
  body: '',
};

export default withContext(DetailsTemplate);
