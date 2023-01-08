import React, {useEffect, useState} from 'react';
import AuthMenu from "./authMenu";
import classes from "./menu.module.scss";
import "./menu.module.scss"

const AuthNotLoggedIn = () => {
    const [newer, setNewer] = useState(false)

    const choose = () => {
        setNewer((newer) => !newer)
    }

    return (
        <div style={{display: "flex"}}>
            <div>
                <button onClick={choose}><img className={classes.icon}
                                              src={`http://otdushi-na-okna/photos/iarluk/iarluk.png`}
                                              alt=""/></button>
            </div>
            <div style={{position: "absolute", left: "8rem"}}>
                {/*<div>*/}
                {/*    Гость*/}
                {/*</div>*/}
                {newer === true ?
                    <div className={classes.box}>
                        <AuthMenu loggedIn={false}/>
                    </div> :
                    null
                }

            </div>
        </div>
    );
};

export default AuthNotLoggedIn;
