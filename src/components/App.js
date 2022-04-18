import './App.css';
import ArticlesGrid from '../pages/ArticlesGrid';
import ArticleDetail from '../pages/ArticleDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/:articleUid'>
          <ArticleDetail />
        </Route>
        <Route path='/'>
          <ArticlesGrid />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
