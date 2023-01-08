import React, {useContext, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {AppContext} from "../../provider/appContext";
import classes from "../autentufication/menu.module.scss";
import {NOT_LOGGED_IN} from "../../authStatus";

const Links = () => {
    const appContext = useContext(AppContext)
    const {
        data,
        authUser,
        authStatus
    } = appContext

    const [admin, setAdmin] = useState(false)

    useEffect(() => {
        test()
    }, [data, authUser, authStatus])

    const test = () => {
        if (data === undefined && authUser === undefined) {
            setAdmin(false)
        } else if (authUser === undefined && authStatus !== NOT_LOGGED_IN) {
            // console.log(data.admin)
            let z = data.admin
            setAdmin(z)
        } else if (authStatus === NOT_LOGGED_IN) {
            setAdmin(false)
        } else {
            // console.log(authUser.admin)
            let z = authUser.admin
            setAdmin(z)
        }
    }

    const user_id = () => {
        if (data === undefined && authUser === undefined) {
            return null
        } else if (authUser === undefined) {
            return data.id
        } else {
            return authUser.id
        }
    }

    return (
        <>
            <div className={`${classes.bloc} ${classes.bloc1}`}><Link to={`/`}>
                <button className={classes.link}>Главная</button>
            </Link></div>
            {admin === true ?
                <div className={`${classes.bloc} ${classes.bloc2}`}>
                    <Link to={`/${user_id()}`}>
                        <button className={classes.link}>Кабинет</button>
                    </Link>
                </div> :
                null
            }
            <div className={`${classes.bloc} ${classes.bloc4}`}>
                <div className={classes.teg}>Окна</div>
                <Link className={classes.rehau} to={"/window/rehau"}>Rehau</Link>
                <Link className={classes.veka} to={"/window/veka"}>Veka</Link>
                <Link className={classes.gealan} to={"/window/gealan"}>Gealan</Link>
            </div>
            <div className={`${classes.bloc} ${classes.bloc5}`}>
                <div className={classes.teg}>Ворота</div>
                <Link className={classes.rehau} to={"/gate/sidign_gates"}>Откатные Ворота</Link>
                <Link className={classes.veka} to={"/gate/SectionalGarageDoors"}>Секционные Ворота</Link>
                <Link className={classes.gealan} to={"/gate/rollerShutters"}>Рольставни</Link>
                <Link className={classes.rollerGates} to={"/gate/rollerGates"}>Роллетные Ворота</Link>
            </div>
            <div className={`${classes.bloc} ${classes.bloc3}`}><Link to={`/choice`}>
                <button className={classes.link}>Выбор</button>
            </Link></div>
            {/*<Link to={`/${user_id()}`}><button>Кабинет</button></Link>*/}
            {/*<Link to={`/canvas`}><button>Canvas</button></Link>*/}
            {/*<Link to={`/test`}><button>Test</button></Link>*/}
            {/*<Link to={`/choice`}><button>Выбор</button></Link>*/}
        </>
    );
};

export default Links;
