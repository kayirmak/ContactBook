import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';

const Router = () => {
    
        return (
            <BrowserRouter>
                <NavBar />
                <Route path="/" exact component={() => <Home page="List"/>}></Route>
                <Route path="/add" component={() => <Home page="Add"/>}></Route>
            </BrowserRouter>
        );
    
}

export default Router;
