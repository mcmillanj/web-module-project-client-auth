import React,{Route} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch,Link} from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import FriendsList from './components/Friend';
 import PrivateRoute from './components/PrivateRoute';



function App() {

  const isLoggedin = localStorage.getItem('token');
  

  return (
    <Router>
      <div className="App">
          <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            {isLoggedin && <Link to='/logout'>Logout</Link>}
          </li>
           <li>
            {isLoggedin && <Link to='/protected'>Friends List</Link>}
          </li>
        </ul>
        <Switch>
          <PrivateRoute path ='/protected' component = {FriendsList} />
          <Route path ='/login' component = {Login} />
          <PrivateRoute path ='/logout' component = {Logout} />
          <Route path ='/' component = {Login} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
