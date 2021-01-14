import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Tom from './tom.js';
import Jerry from './jerry.js';


class Routing extends Component {
    render() {
return (
    <div className="wrapper">
    <Router>
    <Switch>
       <Route path='/tom' component={Tom} />
       <Route path='/jerry' component={Jerry} />
       
   
   
   </Switch>
   </Router>
   </div>
   
    );
}
}

export default Routing; 