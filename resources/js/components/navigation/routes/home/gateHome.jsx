import React from 'react';
import classes from "./gate.module.scss";
import {Link} from "react-router-dom";

const GateHome = () => {
    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", cursor:'default', textAlign:"center"}}>
            <div className={`${classes.hightFlex}`}>
                <div className={classes.grid}>
                    ВОРОТА И РОЛЛЬСТАВНИ
                </div>
                <div className={`${classes.box} ${classes.flex}`}>
                    <div>
                        <div className={classes.grid1}>
                            <Link className={classes.Link} to="gate/sidign_gates">ОТКАТНЫЕ ВОРОТА</Link>
                        </div>
                        <div className={classes.grid0}>
                            <img src={`http://otdushi-na-okna/photos/gate/entranceGate.1.jpg`} alt="Нет"/>
                        </div>
                    </div>

                </div>
                <div className={`${classes.box} ${classes.flex1}`}>
                    <div>
                        <div className={classes.grid1}>
                            <Link className={classes.Link} to={'gate/SectionalGarageDoors'}>СЕКЦИОННЫЕ ВОРОТА</Link>
                        </div>
                        <div className={classes.grid0}>
                            <img src={'http://otdushi-na-okna/photos/gate/gate2.jpg'} alt="нет"/>
                        </div>
                    </div>
                </div>
                <div className={`${classes.box} ${classes.flex2}`}>
                    <div>
                        <div className={classes.grid1}>
                            <Link className={classes.Link} to={'gate/rollerShutters'}>РОЛЬСТАВНИ</Link>
                        </div>
                        <div className={classes.grid0}>
                            <img src={'http://otdushi-na-okna/photos/gate/rollet1.1.jpg'} alt="нет"/>
                        </div>
                    </div>
                </div>
                <div className={`${classes.box} ${classes.flex3}`}>
                    <div>
                        <div className={classes.grid1}>
                            <Link className={classes.Link} to={'gate/rollerGates'}>РОЛЛЕТНЫЕ ВОРОТА</Link>
                        </div>
                        <div className={classes.grid0}>
                            <img src={'http://otdushi-na-okna/photos/gate/rollGate.jpg'} alt="нет"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GateHome;
