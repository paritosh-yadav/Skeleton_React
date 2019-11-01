// src/components/NavBar.js

import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../auth0/react-auth0-spa";

const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div>
            {!isAuthenticated && (
                <button
                    onClick={() =>
                        loginWithRedirect({})
                    }
                >
                    Log in
        </button>
            )}
            {/* NEW - add a link to the home and profile pages */}
            {isAuthenticated && (
                <span>
                    <Link to="/">Home</Link>&nbsp;
        <Link to="/profile">Profile</Link>
                </span>
            )}
            {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
        </div>
    );
};

export default NavBar;