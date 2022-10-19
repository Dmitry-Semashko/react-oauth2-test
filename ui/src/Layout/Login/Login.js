import React from 'react'
import { useAuth } from 'react-oidc-context';

const LoginPage = () => {
    const auth = useAuth();
    const handleLogin = () => {
        auth.signinRedirect();
    };

    return (
        <div>
            Login page
            <button onClick={handleLogin}>Sign In</button>
        </div>
    )
}

export default LoginPage
