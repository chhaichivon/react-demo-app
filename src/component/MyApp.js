import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import PrivateRoute from "../route/PrivateRoute";
import CategoryList from "./CategoryList";
import CategoryDetail from "./CategoryDetail";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Profile from "./Profile";

class MyApp extends Component {

    render() {
        return (
            <>
                <Router>
                    <>
                        {/*<MenuComponent/>*/}
                        <Switch>
                            <Route path="/" exact component={Home}/>
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

export default MyApp;