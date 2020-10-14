import React, { createContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/HomePage/Home/Home';
import './App.css'
import Login from './Components/LoginPage/Login';
import Dashboard from './Components/MainDashboard/Dashboard/Dashboard';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFound/NotFound';

export const UserContext = createContext();

const App = () => {
  const [user, setUser] = React.useState({});

  return (
    <UserContext.Provider value={[user, setUser]}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
