import gql from "graphql-tag";
const loginJwt = gql`
  mutation loginJwt($password: String!, $identifier: String = "public") {
    login(input: { password: $password, identifier: $identifier }) {
      jwt
    }
  }
`;
