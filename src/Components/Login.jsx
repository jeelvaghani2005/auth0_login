import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Logout from "./Logout";

const Login = () => {
    const { loginWithRedirect, user, isAuthenticated } = useAuth0();

    console.log(user);
    return isAuthenticated ? (
        <>
            <Logout />
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
        </>
    ) : (
        <>
        <button onClick={() => loginWithRedirect()}>Log In</button>
        </>
    );
};

export default Login;