import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Context/Context'
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({ children }) => {
    const { user, lodar } = useContext(AuthContext)
    const location = useLocation()

    if (lodar) {
        return <Spinner animation="border" />;
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;
}

export default PrivateRoute
