import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

import { createPrismicLink } from 'apollo-link-prismic';

const client = new ApolloClient({
  link: createPrismicLink({
  uri: `${process.env.REACT_APP_API_URL}`,
  accessToken: `${process.env.REACT_APP_ACCESS_TOKEN}`
}),
cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
);
