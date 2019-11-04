// src/screens/NavBar.js

import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../auth0/react-auth0-spa";

const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout, loading } = useAuth0();
    if (loading) {
        return (
            <div>Loading...</div>
        );
    }
    return (
        <div>
            {!isAuthenticated && (
                <div>
                    <button
                        onClick={() =>
                            loginWithRedirect({})
                        }
                    >
                        Log in
        </button>&nbsp;
        <Link to="/settings">Settings</Link>
                </div>
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
