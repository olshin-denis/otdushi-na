import React, {useState} from 'react';
import classes from "./rollerGates.module.scss"

const Trend = () => {
    const [displaed, setDisplaed] = useState(true)

    const choose = () => {
        setDisplaed((displaed)=>!displaed)
    }
    return (
        <>
            <div className={classes.text1}>Преимущества серии TREND</div>
            <div className={classes.box}>
                <div>
                    <p className={classes.p1}>Высокое качество по выгодной цене</p>
                    <p>Роллетные ворота Trend заслуженно пользуются популярностью в странах СНГ и Европы. Использование алюминия придает конструкции жесткость и защищает от коррозии. А равномерное пенозаполнение препятствует деформации изделия в процессе использования.</p>
                </div>
                <div>
                    <p className={classes.p1}>Почувствуйте комфорт</p>
                    <p>Роллетные ворота Trend надёжны и просты в использовании. Они помогут обустроить комфортный гараж и при этом не требуют особого ухода.</p>
                </div>
                <div>
                    <p className={classes.p1}>Простота управления</p>
                    <p>Роллетные ворота открываются и закрываются без труда благодаря простым ручным или многофункциональным автоматическим приводам.</p>
                </div>
                <div>
                    <p className={classes.p1}>Защита от непогоды</p>
                    <p>При производстве роллетных ворот Trend используются профили толщиной до 19 мм с равномерным заполнением пеной высокой плотности и стандартные направляющие шины. Благодаря этому конструкции обладают хорошей ветроустойчивостью, тепло- и звукоизоляцией.</p>
                </div>
                <div>
                    <p className={classes.p1}>Компактность</p>
                    <p>Роллетные ворота не занимают места ни перед въездом в гараж, ни внутри него. Они оптимальны для небольших помещений, а также для гаражей, въезд в которые осуществляется прямо с тротуара.</p>
                </div>
                <div>
                    <p className={classes.p1}>С заботой о вашей безопасности</p>
                    <p>Роллетные ворота Trend надежны и безотказны в работе. Основная их функция — защита от непогоды. При этом изделия данной серии обеспечивают базовую антивандальную защиту.</p>
                </div>
            </div>
            <div className={classes.text2}>
                <button onClick={choose}>ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ TREND</button>
            </div>
            <div className={!displaed===true? classes.flex: classes.flexZero}>
                <div className={classes.flex1}>
                    Толщина алюминиевой ленты 0,36 мм
                </div>
                <div className={classes.flex2}>
                    Базовая защита от взлома
                </div>
                <div className={classes.flex1}>
                    Устойчивость к ветровым нагрузкам на проемах до 3,8 м
                </div>
                <div className={classes.flex2}>
                    Стандартные направляющие шины
                </div>
                <div className={classes.flex1}>
                    Равномерность цвета
                </div>
                <div className={classes.flex2}>
                    Базовая цветовая палитра
                </div>
            </div>
        </>
    );
};

export default Trend;
