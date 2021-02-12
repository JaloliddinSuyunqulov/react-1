import React from 'react';
import {TOKEN_NAME} from "../tools/constants";
import {Route} from "react-router-dom";
import NotFound from "./NotFound";

const PrivateRoute = (props) => {
    return (
        localStorage.getItem(TOKEN_NAME) ?
            <Route component={props.component} path={props.path}/>
            : <Route component={NotFound}/>
            // : <Redirect to="/login"/>
    );
};

export default PrivateRoute;