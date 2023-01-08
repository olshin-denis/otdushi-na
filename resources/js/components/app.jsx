import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {AppProvider} from "./provider/appContext";
import Navigation from "./navigation/navigation";
import AppRoutes from "./navigation/appRoutes";
import Links from "./navigation/link/links";
import "../../css/nulllStile.module.scss";
import classes from "./body.module.scss"
import "./body.module.scss"
import Burger from "./navigation/link/burger";
import Footer from "./footer";


const App = () => {
    return (
        <BrowserRouter>
            <AppProvider>
                <div className={classes.body}>
                    <div className={classes.head}>
                        <Navigation/>
                        <div className={classes.teg}>
                            <p>OTDUSHI-NA-OKNA</p>
                        </div>
                        <div className={classes.links}>
                            <Links/>
                        </div>
                        <div className={classes.burger}>
                            <Burger/>
                        </div>
                    </div>
                    <div className={classes.routes}>
                        <AppRoutes/>
                    </div>

                    <div className={classes.footer0}><Footer/></div>
                </div>
            </AppProvider>
        </BrowserRouter>
    );
};

export default App;
