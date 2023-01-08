import React from 'react';
import classes from "./sectionalGarageDoors.module.scss"
import Damast from "./part/damast";
import Alutech from "./part/alutech";

const SectionalGarageDoors = () => {
    return (
        <div style={{ cursor:'default', textAlign:"center"}} className={classes.text}>
            <div className={classes.head}>СЕКЦИОННЫЕ ГАРАЖНЫЕ ВОРОТА</div>
            <div className={classes.photos}>
                <div className={classes.margin}>
                    <div className={classes.photosBox}>
                        <img src={`http://otdushi-na-okna/photos/gate/UNADJUSTEDNONRAW_thumb_869.jpg`} alt="Нет"/>
                        <div className={classes.photosText}><a href="#TREND">TREND</a></div>
                    </div>
                </div>
                <div className={classes.margin}>
                    <div className={classes.photosBox}>
                        <img src={`http://otdushi-na-okna/photos/gate/UNADJUSTEDNONRAW_thumb_125.jpg`} alt="Нет"/>
                        <div className={classes.photosText}><a href="#PRESTIGE">PRESTIGE</a></div>
                    </div>
                </div>
                <div className={classes.margin}>
                    <div className={classes.photosBox}>
                        <img src={`http://otdushi-na-okna/photos/gate/UNADJUSTEDNONRAW_thumb_10f.jpg`} alt="Нет"/>
                        <div className={classes.photosText}><a href="#DAMAST">DAMAST</a></div>
                    </div>
                </div>
            </div>
            <Alutech TREND={"TREND"} PRESTIGE={"PRESTIGE"}/>
            <Damast DAMAST={"DAMAST"}/>
        </div>
    );
};

export default SectionalGarageDoors;
