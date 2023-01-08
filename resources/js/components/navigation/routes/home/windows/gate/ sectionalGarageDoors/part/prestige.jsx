import React, {useEffect, useState} from 'react';
import classes from "../sectionalGarageDoors.module.scss";

const Prestige = ({PRESTIGE}) => {
    const [displaed, setDisplaed] = useState(true)

    const choose = () => {
        setDisplaed((displaed)=>!displaed)
    }

    // useEffect(()=>{
    //     console.log(PRESTIGE)
    // })

    return (
        <>
            <div id={PRESTIGE} className={classes.text2}>
                <button onClick={choose}>ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ PRESTIGE</button>
            </div>
            <div className={!displaed===true? classes.flex: classes.flexZero}>
                <div className={classes.flex1}>
                    Панели толщиной 45 мм устойчивы к экстремально низким температурам и ураганным ветрам скоростью до
                    120 км/ч.
                </div>
                <div className={classes.flex2}>
                    Комплектующие из нержавеющей стали не покроются ржавчиной даже при установке ворот в прибрежной
                    зоне.
                </div>
                <div className={classes.flex1}>
                    Двухлепестковые EPDM-уплотнители обеспечивают впечатляющие показатели герметичности, шумо- и
                    теплоизоляции ворот.
                </div>
                <div className={classes.flex2}>
                    Кронштейны с двойными роликами обеспечивают плавное движение полотна без шума и вибраций.
                </div>
                <div className={classes.flex1}>
                    Для оформления ворот предлагается широкая палитра стандартных цветов по каталогам RAL и DB, а также
                    цифровая печать на полотне.
                </div>
            </div>
        </>
    );
};

export default Prestige;
