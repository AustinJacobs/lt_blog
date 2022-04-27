import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createPrismicLink } from 'apollo-link-prismic';
import GlobalStyles from './components/styles/Global';
import { ThemeProvider } from 'styled-components';
import theme from '@leisuretimeinc/lti-lib/dist/theme';

const client = new ApolloClient({
  link: createPrismicLink({
    uri: `${process.env.REACT_APP_API_URL}`,
    accessToken: `${process.env.REACT_APP_ACCESS_TOKEN}`,
  }),
  cache: new InMemoryCache(),
});

const rootElement = document.getElementById('root');
ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </ApolloProvider>,
  rootElement
);
