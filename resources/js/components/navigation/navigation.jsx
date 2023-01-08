import React, {useContext} from 'react';
import {AppContext} from "../provider/appContext";
import AuthContainer from "../authContainer";

const Navigation = () => {

    const appContext = useContext(AppContext)
    const {
        user
    }=appContext;

    return (
        <>
            <AuthContainer user={user}/>
        </>
    );
};

export default Navigation;
