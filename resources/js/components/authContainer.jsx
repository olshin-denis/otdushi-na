import React, {useContext} from 'react';
import {AppContext} from "./provider/appContext";
import {LOG_IN_FORM, LOGGED_IN, NOT_LOGGED_IN, SIGN_UP_FORM} from "./authStatus";
import AuthNotLoggedIn from "./navigation/autentufication/authNotLoggedIn";
import AuthLogin from "./navigation/autentufication/authLogin";
import AuthSignUp from "./navigation/autentufication/authSignUp";
import AuthLogout from "./navigation/autentufication/authLogout";

const AuthContainer = () => {
    const appContext = useContext(AppContext);
    const {
        authStatus
    } = appContext;
    // const showNoLoggedIn = authStatus === NOT_LOGGED_IN ? "see" : "hidden";
    // const showLoginForm = authStatus === LOG_IN_FORM ? "see" : "hidden";
    // const showSignUpForm = authStatus === SIGN_UP_FORM ? "see" : "hidden";
    // const showLoggedIn = authStatus === LOGGED_IN ? "see" : "hidden";

    return (
        <>
            {authStatus === NOT_LOGGED_IN ? <AuthNotLoggedIn/> : null}

            {authStatus === LOG_IN_FORM ? <AuthLogin/> : null}

            {authStatus === SIGN_UP_FORM ? <AuthSignUp/> : null}

            {authStatus === LOGGED_IN ? <AuthLogout/> : null}
        </>
    );
};

export default AuthContainer;
