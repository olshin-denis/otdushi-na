import React, {useContext, useState} from 'react';
import {AppContext} from "../../provider/appContext";
import AuthMenu from "./authMenu";
import classes from "./menu.module.scss";

const AuthSignUp = () => {
    const appContext = useContext(AppContext)
    const {
        userNameInput,
        userEmail,
        userPassword,
        handleUserNameInput,
        handleUserEmail,
        handleUsersPassword,
        signup,
        errorMessage,
    } = appContext;
    const [hidePassword, setHidePassword] = useState(true);
    const [newer, setNewer] = useState(true);

    const choose = () => {
        setNewer((newer) => !newer)
    }
    function togglePassword() {
        setHidePassword(!hidePassword);
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
            {newer === true ?
                <div style={{display:"flex", position: "absolute", left: "8rem"}}>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <input
                            name="userName"
                            type="text"
                            placeholder="User Name"
                            value={userNameInput}
                            onChange={handleUserNameInput}
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={userEmail}
                            onChange={handleUserEmail}
                        />
                        {hidden()}
                    </div>
                    <div>
                        <button
                            onClick={() => signup()}
                        >
                            Зарегистрироваться
                        </button>
                        <div>
                            {errorMessage}
                        </div>
                        <AuthMenu loggedIn={false}/>
                    </div>
                </div> :
                null
            }
        </div>
    );
};

export default AuthSignUp;
