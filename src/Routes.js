import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Clientes from './pages/clientes/index';
import Home from './pages/home/index';
import Produtos from './pages/produtos/index';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/clientes' component={Clientes} />
                <Route path='/produtos' component={Produtos} />
            </Switch>
        </BrowserRouter>
    )
}