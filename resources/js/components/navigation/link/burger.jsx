import React, {useContext, useEffect, useState} from 'react';
import classes from "./burger.module.scss"
import {AppContext} from "../../provider/appContext";
import {NOT_LOGGED_IN} from "../../authStatus";
import {Link} from "react-router-dom";

const Burger = () => {
    const [isActive, setIsActive] = useState(false)
    // useEffect(()=>{
    //     console.log(isActive)
    // },[isActive])
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
    const onActive = () => {
        setIsActive((isActive) => !isActive)
    }

    return (
        <div className={isActive === true ? classes.body : null}>
            <div onClick={onActive} className={`${classes.burger} ${isActive === true ?  classes.Open : null}`}>
                <span/>
            </div>
            <div className={isActive === true ? classes.newLinks : null}>
                <div className={isActive === true ? classes.nav : null}/>
                <div className={isActive === true ? classes.blockLinks : null}>
                    {isActive === true ?
                        <div className={classes.size}>
                            <div><Link to={`/`}>
                                <button className={classes.button}>Главная</button>
                            </Link></div>
                            {admin === true ?
                                <div>
                                    <Link to={`/${user_id()}`}>
                                        <button className={classes.button}>Кабинет</button>
                                    </Link>
                                </div> :
                                null
                            }
                            <div><Link to={`/choice`}>
                                <button className={classes.button}>Выбор</button>
                            </Link></div>
                            <div className={`${classes.bloc} ${classes.bloc4}`}>
                                <div className={classes.teg}><div>Окна</div></div>
                                <div className={classes.path}>
                                    <div><Link className={`${classes.rehau} ${classes.Link}`} to={"/window/rehau"}>Rehau</Link></div>
                                    <div><Link className={`${classes.veka} ${classes.Link}`} to={"/window/veka"}>Veka</Link></div>
                                    <div><Link className={`${classes.gealan} ${classes.Link}`} to={"/window/gealan"}>Gealan</Link></div>
                                </div>
                            </div>
                            <div className={`${classes.bloc} ${classes.bloc5}`}>
                                <div className={classes.teg}><div>Ворота</div></div>
                                <div className={classes.path}>
                                    <div><Link className={`${classes.rehau} ${classes.Link}`} to={"/gate/sidign_gates"}>Откатные Ворота</Link></div>
                                    <div><Link className={`${classes.veka} ${classes.Link}`} to={"/gate/SectionalGarageDoors"}>Секционные Ворота</Link></div>
                                    <div><Link className={`${classes.gealan} ${classes.Link}`} to={"/gate/rollerShutters"}>Рольставни</Link></div>
                                    <div><Link className={`${classes.rollerGates} ${classes.Link}`} to={"/gate/rollerGates"}>Роллетные Ворота</Link></div>
                                </div>
                            </div>
                        </div>
                        : null}
                </div>
            </div>
        </div>
    );
};

export default Burger;
