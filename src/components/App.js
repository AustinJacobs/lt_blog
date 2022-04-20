import ArticlesGrid from '../pages/ArticlesGrid';
import ArticleDetail from '../pages/ArticleDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import GlobalStyles from './styles/Global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path='/'>
              <ArticlesGrid />
          </Route>
          <Route path='/:articleUid'>
            <ArticleDetail />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
