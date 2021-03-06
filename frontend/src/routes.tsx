import React from 'react';
import {BrowserRouter, Redirect, Route} from 'react-router-dom';

//Import Pages
import Start from './pages/Index';
import Quiz from './pages/Quiz';

function Routes(){
    return(
        <BrowserRouter>
            <Route path='/' exact={true} component={Start}/>
            <Route path='/quiz' component={Quiz}/>
            <Redirect to='/'/>
        </BrowserRouter>
    )
}

export default Routes;