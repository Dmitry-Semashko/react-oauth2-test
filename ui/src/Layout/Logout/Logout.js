import React from 'react'
import { useAuth } from 'react-oidc-context';
import { useNavigate } from 'react-router';

const LogoutPage = () => {
    const navigate = useNavigate();
    const auth = useAuth();
    const logout = () => {
        auth.removeUser();
        navigate({ to: "/" });
    };

    return (
        <div>
            Logout page
            <button onClick={logout}>Sign Out</button>
        </div>
    )
}

export default LogoutPage
