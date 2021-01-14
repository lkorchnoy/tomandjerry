import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Tom from './Tom';
import Jerry from './Jerry';


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