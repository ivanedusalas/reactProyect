import React from "react";
import { Fragment } from "react";
import { Route, Navigate } from 'react-router-dom';


const RoutGuard = ( {children} ) => {
    
    let token = localStorage.getItem('token')

    return (   
        <Fragment>
            { token ? children : <Navigate to="/login" /> }
        </Fragment>
    )
}

export default RoutGuard;