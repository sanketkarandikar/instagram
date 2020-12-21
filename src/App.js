import './App.css';
import Login from './Containers/Login/Login';
import Home from './Containers/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/home">
        <Navbar/>
        <Home/>
      </Route>
      <Route exact path="/">
      <Login/>
      </Route>
      </Router>
  );
}

export default App;
