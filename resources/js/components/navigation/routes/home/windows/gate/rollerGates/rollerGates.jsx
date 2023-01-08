import React from 'react';
import classes from './rollerGates.module.scss'
import Trend from "./trend";
import Prestige from "./prestige";

const RollerGates = () => {
    return (
        <div  style={{ cursor:'default', textAlign:"center"}} className={classes.text}>
            <div className={classes.hight}>
                РОЛЛЕТНЫЕ ВОРОТА
            </div>
            <div className={classes.head}>
                Роллетные ворота состоят из алюминиевых профилей, которые сворачиваются в компактный рулон вверху проема. Они станут оптимальным решением на случай, если пространство внутри гаража или перед ним ограничено. Конструкции отличаются взломостойкостью, обеспечивают защиту от ветра и осадков.
            </div>
            <Trend/>
            <Prestige/>
        </div>
    );
};

export default RollerGates;
