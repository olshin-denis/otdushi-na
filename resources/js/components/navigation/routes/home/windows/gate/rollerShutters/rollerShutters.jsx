import React from 'react';
import classes from "../rollerGates/rollerGates.module.scss";
import Trend from "./trend";
import Security from "./security";
import Prestige from "./prestige";

const RollerShutters = () => {
    return (
        <div  style={{ cursor:'default'}} className={classes.text}>
            <div className={classes.hight}>РОЛЬСТАВНИ</div>
            <div className={classes.head}>
                Роллеты состоят из легких и прочных алюминиевых профилей. Конструкции защищают дом от солнца, шума, непогоды и взлома, помогают поддерживать комфортную температуру в любое время года.
            </div>
            <div className={classes.photos}>
                <div className={classes.margin}>
                    <div className={classes.photosBox}>
                        <img src={`http://otdushi-na-okna/photos/rollet/UNADJUSTEDNONRAW_thumb_85c.jpg`} alt="Нет"/>
                        <div className={classes.photosText}><a href="#TREND">TREND</a></div>
                    </div>
                </div>
                <div className={classes.margin}>
                    <div className={classes.photosBox}>
                        <img src={`http://otdushi-na-okna/photos/rollet/UNADJUSTEDNONRAW_thumb_1e3.jpg`} alt="Нет"/>
                        <div className={classes.photosText}><a href="#PRESTIGE">PRESTIGE</a></div>
                    </div>
                </div>
            </div>
            <Trend TREND={'TREND'}/>
            {/*<Security/>*/}
            <Prestige PRESTIGE={'PRESTIGE'}/>
        </div>
    );
};

export default RollerShutters;
