import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import { Home } from './pages/Home';
import { List } from './pages/List';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={ Home } path="/" exact />
            <Route component={ List } path="/lista" />
        </BrowserRouter>
    )
}