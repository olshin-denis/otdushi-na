import React, {useState} from 'react';
import classes from "./rollerGates.module.scss";

const Prestige = () => {
    const [displaed, setDisplaed] = useState(true)

    const choose = () => {
        setDisplaed((displaed)=>!displaed)
    }
    return (
        <>
            <div className={classes.text1}>Преимущества серии PRESTIGE</div>
            <div className={classes.box}>
                <div>
                    <p className={classes.p1}>Универсальное решение</p>
                    <p>Максимальная ширина роллетных ворот Prestige — 7 м. Это позволяет устанавливать их даже в гаражах, рассчитанных на 2 автомобиля.</p>
                </div>
                <div>
                    <p className={classes.p1}>Ветровая устойчивость</p>
                    <p>Усиленные направляющие шины с ветровыми зацепами гарантируют высокую прочность роллетных ворот Prestige. Они выдерживают даже сильные порывы ветра.</p>
                </div>
                <div>
                    <p className={classes.p1}>Приток солнечного света</p>
                    <p>Предусмотрев в роллетных воротах смотровые экструдированные профили со специальными прозрачными вставками из поликарбоната, можно обеспечить приток в гараж естественного света.</p>
                </div>
                <div>
                    <p className={classes.p1}>Эффективная вентиляция</p>
                    <p>Использование в роллетных воротах вентиляционных экструдированных профилей поможет обеспечить в гараже воздухообмен и оптимальный уровень влажности, необходимые для комфортного микроклимата.</p>
                </div>
                <div>
                    <p className={classes.p1}>Все под контролем</p>
                    <p>При производстве роллетных ворот Prestige используются качественные комплектующие, которые обеспечивают безопасность и долгий срок службы изделий. Для максимального комфорта и спокойствия ворота можно оборудовать дополнительными системами защиты.</p>
                </div>
                <div>
                    <p className={classes.p1}>Комфорт для всей семьи</p>
                    <p>Роллетные ворота Prestige просты в использовании и не требуют особого ухода. Они обеспечивают своему владельцу комфорт в любое время суток круглый год.</p>
                </div>
            </div>
            <div className={classes.text2}>
                <button onClick={choose}>ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ PRESTIGE</button>
            </div>
            <div className={!displaed===true? classes.flex: classes.flexZero}>
                <div className={classes.flex1}>
                    Толщина алюминиевой ленты 0,49 мм
                </div>
                <div className={classes.flex2}>
                    Р3 класс защиты от взлома
                </div>
                <div className={classes.flex1}>
                    Высокая ветровая устойчивость на проемах до 7 м
                </div>
                <div className={classes.flex2}>
                    Усиленные направляющие шины с ветровыми зацепами
                </div>
                <div className={classes.flex1}>
                    Равномерность цвета
                </div>
                <div className={classes.flex2}>
                    Широкая цветовая палитра
                </div>
                <div className={classes.flex1}>
                    Установка вентиляционных и смотровых профилей
                </div>
                <div className={classes.flex2}>
                    Дополнительные системы безопасности
                </div>
            </div>
        </>
    );
};

export default Prestige;
