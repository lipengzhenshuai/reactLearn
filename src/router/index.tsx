import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Login from '../views/login/login';
import Layout from '../views/layout/layout';

import dashboard from '../views/dashboard/dashboard';
import trade from '../views/monitorM/trade/trade';
import editTrade from '../views/monitorM/editTrade/editTrade';


function App() {
    return (
        <Router>
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/' render={() =>
                    <Layout>
                        <Switch>
                            <Route path='/dashboard' component={dashboard}/>
                            <Route path='/monitorM/trade' component={trade}/>
                            <Route path='/monitorM/editTrade' component={editTrade}/>
                        </Switch>
                    </Layout>
                }/>
            </Switch>
        </Router>
    );
}

export default App;
