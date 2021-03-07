import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Import Pages
import Start from './pages/Index';
import Quiz from './pages/Quiz';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact={true} component={Start}/>
                <Route path='/quiz' component={Quiz}/>
                <Route component = {Start}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;