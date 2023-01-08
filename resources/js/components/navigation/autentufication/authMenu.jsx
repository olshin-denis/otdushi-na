import React, {useContext} from 'react';
import {AppContext} from "../../provider/appContext";
import {NOT_LOGGED_IN, SIGN_UP_FORM} from "../../authStatus";
import classes from "./menu.module.scss"

const AuthMenu = (props) => {
    const appContext = useContext(AppContext)
    const {
        authStatus,
        changeAuthStatusLogin,
        changeAuthStatusSignUp,
        changeMenuStatus,
    } = appContext;

    const btn = () => {
        if (authStatus === NOT_LOGGED_IN) {
            return (
                <button  className={`${classes.men} ${classes.button}`}
                    onClick={() => changeAuthStatusLogin()}
                >
                    Вход
                </button>
            )
        } else {
            return (
                <button  className={`${classes.men} ${classes.button}`}
                    onClick={() => changeMenuStatus()}
                >
                    Назад
                </button>
            )
        }
    }

    const reg = () => {
        if (authStatus === SIGN_UP_FORM) {
            return (
                <button  className={`${classes.men} ${classes.button}`}
                    onClick={() => changeAuthStatusLogin()}
                >
                    Вход
                </button>
            )
        }else {
            return (
                <button  className={`${classes.men} ${classes.button}`}
                onClick={()=>changeAuthStatusSignUp()}
                >
                    Регистрация
                </button>
            )
        }
    }

    return (
        <>
            {props.loggedIn ? null : (
                <div>
                    {reg()}
                    {btn()}
                </div>
            )}
        </>
    );
};

export default AuthMenu;
