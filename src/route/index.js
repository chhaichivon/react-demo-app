import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "../component/Home";
import Register from "../component/Register";
import Login from "../component/Login";
import PrivateRoute from "./PrivateRoute";
import CategoryList from "../component/CategoryList";
import CategoryDetail from "../component/CategoryDetail";
import ProductList from "../component/ProductList";
import ProductDetail from "../component/ProductDetail";
import Profile from "../component/Profile";


import HomePage from "../view/home";

class AppRoute extends Component {




    render() {
        return (
            <>
                <Router>
                    <>
                        {/*<MenuComponent/>*/}
                        <Switch>
                            <Route path="/" exact component={HomePage}/>
                            <Route path="/login" exact component={Login}/>
                            <Route path="/register" exact component={Register}/>
                            <Route path='/category' exact component={CategoryList}/>
                            <Route path='/category/:id' exact component={CategoryDetail}/>
                            <Route path='/product' exact component={ProductList}/>
                            <Route path='/product/:id' exact component={ProductDetail}/>
                            <PrivateRoute path="/profile" exact component={Profile}/>
                        </Switch>
                    </>
                </Router>
            </>
        )
    }

}

export default AppRoute;