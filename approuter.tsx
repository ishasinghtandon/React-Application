import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import FirstPage from './pages/FirstPage';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FirstPage} />
        {/* Add other routes here */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
