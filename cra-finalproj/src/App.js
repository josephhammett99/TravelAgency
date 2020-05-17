import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Careers from './Careers';
import Contact from './Contact';
import Packages from './Packages';
import Resorts from './Resorts';
import Destinations from './Destinations';
import Cities from './Cities';
import Footer from './Footer';

import Error from './Error';

const App = () => { //Pulling the react routes 
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/careers" component={Careers} />
        <Route path="/contact" component={Contact} />
        <Route path="/packages" component={Packages} />
        <Route path="/resorts" component={Resorts} />
        <Route path="/destinations" component={Destinations} />
        <Route path="/cities" component={Cities} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
