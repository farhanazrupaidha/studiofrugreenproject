import { GraphQLClient } from 'graphql-request';

const hygraph = new GraphQLClient(
  'https://api-ap-southeast-2.hygraph.com/v2/clijsrvoy05qk01t9f56qa446/master'
);

export { hygraph };