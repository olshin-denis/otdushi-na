import React, {useState} from 'react';
import classes from "../rollerGates/rollerGates.module.scss";

const Trend = ({TREND}) => {
    const [displaed, setDisplaed] = useState(true)

    const choose = () => {
        setDisplaed((displaed)=>!displaed)
    }
    return (
        <>
            <div id={TREND} className={classes.text1}>Преимущества серии TREND</div>
            <div className={classes.box}>
                <div>
                    <p className={classes.p1}>Высокое качество по выгодной цене</p>
                    <p>Рольставни Trend изготавливаются из алюминиевых профилей, что делает конструкции одновременно лёгкими и надёжными. За счет равномерного пенозаполнения профилей роллет не подвержены деформации в процессе использования.</p>
                </div>
                <div>
                    <p className={classes.p1}>Базовая антивандальная защита</p>
                    <p>Рольставни Trend надежны и безотказны в работе. Они оптимально подойдут для частных домов или квартир, не нуждающихся в повышенных мерах защиты от взлома.</p>
                </div>
                <div>
                    <p className={classes.p1}>Чувствуйте себя в безопасности</p>
                    <p>Рольставни производятся из прочных материалов и комплектующих и могут быть доукомлектованы различными системами для повышения безопасности.</p>
                </div>
                <div>
                    <p className={classes.p1}>С заботой о вашем комфорте</p>
                    <p>Рольставни Trend позволят вам ощутить удовольствие от жизни в собственном доме в полной мере. Изделия не требуют особого ухода — они не добавят вам лишних хлопот.</p>
                </div>
                <div>
                    <p className={classes.p1}>Комфортный микроклимат</p>
                    <p>Полотно рольставней не пропускает УФ-излучение, защищая комнаты от перегрева, а мебель — от выгорания. Наслаждайтесь приятной прохладой в доме, даже если на улице жара.</p>
                </div>
                <div>
                    <p className={classes.p1}>Энергосбережение и шумоизоляция</p>
                    <p>Рольставни снижают уровень шума в 2-3 раза. После их установки вы сможете лучше высыпаться ночью, ведь звуки с улицы не потревожат сон. Насколько выгодным вложением станет приобретение рольставней, вы можете рассчитать на калькуляторе энергосбережения и шумоизоляции.</p>
                </div>
            </div>
            <div className={classes.text2}>
                <button onClick={choose}>ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ TREND</button>
            </div>
            <div className={!displaed===true? classes.flex: classes.flexZero}>
                <div className={classes.flex1}>
                    Толщина алюминиевой ленты от 0,23 мм
                </div>
                <div className={classes.flex2}>
                    Толщина стенок направляющих шин от 0,9 мм
                </div>
                <div className={classes.flex1}>
                    Базовая антивандальная защита
                </div>
                <div className={classes.flex2}>
                    Устойчивы к ветровым и ударным нагрузкам на проемах шириной до 3,1 м
                </div>
                <div className={classes.flex1}>
                    Базовая палитра до 10 цветов
                </div>
                <div className={classes.flex2}>
                    Формы коробов: скрытый и 45°
                </div>
                <div className={classes.flex1}>
                    Сокращают нагрев помещения до 70% летом, сохраняют тепло зимой до 30%
                </div>
                <div className={classes.flex2}>
                    Увеличивают шумоизоляцию на 10 дБ
                </div>
            </div>
        </>
    );
};

export default Trend;
