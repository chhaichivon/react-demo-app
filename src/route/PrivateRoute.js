import React, {Component} from 'react'
import {Redirect, Route} from 'react-router-dom'

class PrivateRoute extends Component {

    render() {
        //if (AuthenticationService.isUserLoggedIn()) {
        if(1){
            return <Route {...this.props} />
        } else {
            return <Redirect to="/login"/>
        }
    }
}

export default PrivateRoute;