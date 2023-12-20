import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import AboutUsPage from './AboutUsPage';
import ContactUsPage from './ContactUsPage';
import AccountOverviewPage from './AccountOverviewPage';
import TransactionPage from './TransactionPage';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/account" component={AccountOverviewPage} />
        <Route path="/transaction" component={TransactionPage} />
        <Route path="/about" component={AboutUsPage} />
        <Route path="/contact" component={ContactUsPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
