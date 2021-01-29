import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Price from './components/pages/Price';
import Locations from './components/pages/Locations';
import Blog from './components/pages/Blog';
import SignUp from './components/pages/SignUp';
import Tokyo from './components/pages/Tokyo';
import NewYork from './components/pages/NewYork';
import Hamburg from './components/pages/Hamburg';
import Paris from './components/pages/Paris';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/price' exact component={Price} />
          <Route path='/locations' exact component={Locations} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/sign-up' exact component={SignUp} />
          <Route path='/tokyo' exact component={Tokyo} />
          <Route path='/newyork' exact component={NewYork} />
          <Route path='/hamburg' exact component={Hamburg} />
          <Route path='/paris' exact component={Paris} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
