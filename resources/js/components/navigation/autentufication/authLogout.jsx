import React, {useContext, useState} from 'react';
import AuthMenu from "./authMenu";
import {AppContext} from "../../provider/appContext";
import classes from "./menu.module.scss";

const AuthLogout = () => {
    const appContext = useContext(AppContext);
    const {
        logout,
        user,
        authUser
    } = appContext
    const [newer, setNewer] = useState(true);

    const choose = () => {
        setNewer((newer) => !newer)
    }
    // const name = () => {
    //     if(user === 'false' || user === undefined){
    //         return authUser.name
    //     } else {
    //         return user
    //     }
    // }

    return (
        <div style={{display:"flex"}}>
            {/*<div>*/}
            {/*    Добро пожаловать*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    {name()}*/}
            {/*</div>*/}
            <div>
                <button onClick={choose}>
                    <img className={classes.icon}
                         src={`http://otdushi-na-okna/photos/iarluk/iarluk.png`} alt=""/>
                </button>
            </div>
            {newer === true ?
                <div style={{display: "flex", position: "absolute", left: "8.5rem"}}>
                    <button
                        onClick={() => logout()}
                    >
                        Выйти
                    </button>
                </div> :
                null
            }
            <div>
                <AuthMenu loggedIn={true}/>
            </div>
        </div>
    );
};

export default AuthLogout;
