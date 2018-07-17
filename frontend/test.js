import gql from 'graphql-tag';

gql`
  query {
    currentUser {
      id
    }
  }
`;
