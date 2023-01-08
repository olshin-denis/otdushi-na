import React, {useEffect, useState} from 'react';
import classes from "./blitz.module.scss";

const Blitz = ({id}) => {
    const [displaded, setDispladed] = useState(true)

    const choose = () =>{
        setDispladed((displaded)=>!displaded)
    }

    return (
        <>
            <div id={id} className={classes.newGrid}>
                <div className={`${classes.grid0}`}>
                    <div className={classes.font}>Особенности профиля BLITZ</div>
                </div>
                <div className={classes.grid1}>
                    <div className={classes.d1}>Высокая теплоизоляция</div>
                    <div>Исключительно высокий уровень комфорта. Окна не пропускают холод, сквозняк, не задерживают пыль и влагу.
                    </div>
                </div>
                <div className={classes.grid2}>
                    <div className={classes.d1}>Вариативность исполнения</div>
                    <div>Подходит для изготовления окон и балконных дверей разных геометрических форм (прямоугольных, арочных,круглых и прочее) и типов открывания</div>
                </div>
                <div className={classes.grid3}>
                    <div className={classes.d1}>200+ вариантов цвета</div>
                    <div>Большое разнообразие для окон. Все плёнки прошли тщательный контроль качества при высоких нагрузках</div>
                </div>
                <div className={classes.grid4}>
                    <div className={classes.d1}>Базовое решение</div>
                    <div>Надежные окна неизменно высокого качества за умеренный бюджет</div>
                </div>
                <div className={classes.grid5}>
                    <div className={classes.d1}>Привлекательный дизайн</div>
                    <div>Оконные створки выполненны в лаконичном дизайне, делая конструкции подходящими для любого интерьера</div>
                </div>
                <div className={classes.grid6}>
                    <div className={classes.d1}>Универсальность</div>
                    <div>Рекомендован для реконструкций, ремонта  старого жилья, также оптиален для домом с низким потреблением энергии</div>
                </div>
            </div>

                <div>
                <div className={classes.flexBlock}>
                    <div>
                        <p>Области применения:</p>
                        <p>&#8211; Дома с минимальным применением энергии</p>
                        <p>&#8211; Реконструируемые объекты</p>
                        <p>&#8211; Здания класса "премиум"</p>
                    </div>
                </div>
            </div>

            <div className={classes.had}>
               <button onClick={choose}><div>ОСНОВНЫЕ ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ</div></button>
            </div>

            <div className={!displaded===true? classes.nextGrid: classes.displaed}>
                <div className={`${classes.nextGrid0} ${classes.gary} ${classes.hr}`}>
                    <div>Характеристика</div>
                    <div>Значение</div>
                    <div>Объяснение</div>
                </div>
                <div className={`${classes.nextGrid0} ${classes.white}`}>
                    <div>Системная глубина</div>
                    <div>
                        <p>60 мм </p>
                        <p>Видимая ширина комбинации профилей рамы и створки — 105 мм</p>
                    </div>
                    <div className={classes.left}>Толщина пластиковой коробки и створки</div>
                </div>

                <div className={`${classes.nextGrid0} ${classes.gary}`}>
                    <div>Число камер</div>
                    <div>3 камеры</div>
                    <div>Воздушные камеры в профиле окна, промежуток между ребрами жесткости в самой раме окна</div>
                </div>

                <div className={`${classes.nextGrid0} ${classes.white}`}>
                    <div>Теплоизоляция</div>
                    <div>R опр. = 0,70 м2°С/Вт</div>
                    <div>Чем больше, тем лучше теплоизоляция окна</div>
                </div>

                <div className={`${classes.nextGrid0} ${classes.gary}`}>
                    <div>Толщина стеклопакета</div>
                    <div>
                        <p>Max до 32 мм</p>
                        <p>Допускается установка одинарного стекла (4 или 6 мм) или однокамерного стеклопакета толщиной 24 мм</p>
                    </div>
                    <div>Толстое заполнение позволяет установить многофункциональные энергоэффективные стеклопакеты</div>
                </div>

                <div className={`${classes.nextGrid0} ${classes.white}`}>
                    <div>Воздухо- и водонепроницаемость</div>
                    <div> <p>Надёжная защита от сквозняков, пыли и воды. Количество контуров уплотнения — 2 (нахлест уплотнений по 6/8 мм снаружи и внутри).</p> <br/>
                        <p>Этого вполне достаточно для надёжной защиты от сквозняков, пыли и протечек.</p>
                    </div>
                    <div>Герметичность ПВХ-системы</div>
                </div>

                <div className={`${classes.nextGrid0} ${classes.gary}`}>
                    <div>Взломобезопасность</div>
                    <div>Установка усиленных приборов запирания благодаря смещению оси приборного паза на 13 мм</div>
                    <div>Позволяет установить надежные приборы запирания</div>
                </div>
            </div>
        </>
    );
};

export default Blitz;
