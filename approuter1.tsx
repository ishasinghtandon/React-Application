import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage'; // Import the SecondPage component

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route path="/second" component={SecondPage} /> {/* Add the route for the SecondPage */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
