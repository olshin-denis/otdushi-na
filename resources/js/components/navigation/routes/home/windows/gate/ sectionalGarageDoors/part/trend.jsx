import React, {useState} from 'react';
import classes from "../sectionalGarageDoors.module.scss";

const Trend = ({TREND}) => {
    const [displaed, setDisplaed] = useState(true)

    const choose = () => {
        setDisplaed((displaed)=>!displaed)
    }
    return (
        <>
            <div id={TREND} className={classes.text2}>
                <button onClick={choose}>ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ TREND</button>
            </div>
            <div className={!displaed===true? classes.flex: classes.flexZero}>
                <div className={classes.flex1}>
                    Панели толщиной 40 мм — залог комфортного микроклимата в гараже для регионов с умеренно холодным климатом.
                </div>
                <div className={classes.flex2}>
                    Комплектующие из оцинкованной стали обеспечивают устойчивость к коррозии и прочность конструкции.
                </div>
                <div className={classes.flex1}>
                    Однолепестковые EPDM-уплотнители защищают от сквозняков, шума и холодного воздуха.
                </div>
                <div className={classes.flex2}>
                    Кронштейны с одинарным роликом отвечают за плавное и тихое движение полотна по направляющим.
                </div>
                <div className={classes.flex1}>
                    Ворота можно окрасить в один из стандартных цветов по каталогам RAL и DB.
                </div>
            </div>
        </>
    );
};

export default Trend;
