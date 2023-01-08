import React, {useContext, useState} from 'react';
import {AppContext} from "../../provider/appContext";
import AuthMenu from "./authMenu";
import classes from "./menu.module.scss";

const AuthLogin = () => {
    const appContext = useContext(AppContext)
    const {
        userEmail,
        userPassword,
        handleUserEmail,
        handleUsersPassword,
        login,
    } = appContext;
    const [hidePassword, setHidePassword] = useState(true)
    const [newer, setNewer] = useState(true)

    const choose = () => {
        setNewer((newer) => !newer)
    }
    function togglePassword() {
        setHidePassword(!hidePassword)
    }

    function hidden() {
        if (hidePassword === true) {
            return (
                <>
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={userPassword}
                        onChange={handleUsersPassword}
                    />
                    <button
                        onClick={() => togglePassword()}
                    >
                        Показать пароль
                    </button>
                </>
            )
        } else {
            return (
                <>
                    <input
                        name="password"
                        type="text"
                        placeholder="Password"
                        value={userPassword}
                        onChange={handleUsersPassword}
                    />
                    <button
                        onClick={() => togglePassword()}
                    >
                        Скрыть пароль
                    </button>
                </>
            )
        }
    }

    return (
        <div style={{display:"flex"}}>
            <div>
                <button onClick={choose}><img className={classes.icon}
                                              src={`http://otdushi-na-okna/photos/iarluk/iarluk.png`}
                                              alt=""/></button>
            </div>
            <div style={{display:"flex", position: "absolute", left: "8rem"}}>
                {newer === true ?
                    <>
                        <div style={{display:"flex", flexDirection:"column"}}>
                            <input
                                name="email"
                                type="text"
                                placeholder="Email"
                                value={userEmail}
                                onChange={handleUserEmail}
                            />
                            {hidden()}
                        <button
                            onClick={() => login()}
                        >
                            Войти
                        </button>
                        </div>
                        <div>
                            <AuthMenu loggedIn={false}/>
                        </div>
                    </>:
                    null
                }
            </div>
        </div>
    );
};

export default AuthLogin;
