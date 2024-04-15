import withApollo from "next-with-apollo";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from '@apollo/client/utilities'

// Learn more about `@apollo/client` here - https://www.apollographql.com/docs/react/why-apollo
// Learn more about `next-with-apollo` here - https://github.com/lfades/next-with-apollo

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      uri: process.env.GRAPHCMS_PROJECT_API,
      cache: new InMemoryCache({
        typePolicies: {
          Query: {
            fields: {
              postsConnection: relayStylePagination(),
            },
          },
        },
      }).restore(initialState || {})
    });
  },
  {
    // providing the Apollo Client access to the pages
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    }
  }
);