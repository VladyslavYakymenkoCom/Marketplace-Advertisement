import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './components/Index/Index.jsx';
import CreateAds from './components/EditView/CreateAdd.jsx';
import Logout from './components/Logout/Logout.jsx'
import AddView from './components/AddView/AddView.jsx' 

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Index} />
            <Route   path="/edit" component={CreateAds} /> 
            <Route   path="/logout" component={Logout} />   
            <Route   path="/:id/" component={AddView} />
        </Switch>
    </Router>,
    document.querySelector("main")
)
