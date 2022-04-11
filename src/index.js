import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import { createPrismicLink } from 'apollo-link-prismic';

const client = new ApolloClient({
  link: createPrismicLink({
  uri: `${process.env.REACT_APP_API_URL}`,
  accessToken: `${process.env.REACT_APP_ACCESS_TOKEN}`
}),
cache: new InMemoryCache(),
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
