import React, {useState} from 'react';
import classes from "./blitz.module.scss";

const Grazio = ({id}) => {
    const [displaded, setDispladed] = useState(true)

    const choose = () =>{
        setDispladed((displaded)=>!displaded)
    }
    return (
        <>
            <div id={id} className={classes.newGrid}>
                <div className={`${classes.grid0}`}><div className={classes.font}>Особенности профиля GRAZIO</div></div>
                <div className={classes.grid1}>
                    <div className={classes.d1}>Высокая теплоизоляция</div>
                    <div>Исключительно высокий уровень комфорта. Окна не пропускают холод, сквозняк, не задерживают пыль и влагу.
                    </div>
                </div>
                <div className={classes.grid2}>
                    <div className={classes.d1}>Высокое качество поверхности</div>
                    <div>Cтойкость к образованию царапин и не выгорает на солнце</div>
                </div>
                <div className={classes.grid3}>
                    <div className={classes.d1}>200+ вариантов цвета</div>
                    <div>Большое разнообразие для окон. Все плёнки прошли тщательный контроль качества при высоких нагрузках</div>
                </div>
                <div className={classes.grid4}>
                    <div className={classes.d1}>Защита от продувания</div>
                    <div>Два контура уплотнения из оригинального уплотнения REHAU RAUTUBE надежно защищают от сквозняков и протечек</div>
                </div>
                <div className={classes.grid5}>
                    <div className={classes.d1}>Баланс и грация</div>
                    <div>Отличные потребительские характеристики и разумная цена в современном дизайне</div>
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
                        <p>70 мм </p>
                    </div>
                    <div className={classes.left}>Толщина пластиковой коробки и створки</div>
                </div>

                <div className={`${classes.nextGrid0} ${classes.gary}`}>
                    <div>Число камер</div>
                    <div>5 камер</div>
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
                        <p>Max до 40 мм</p>
                    </div>
                    <div>Толстое заполнение позволяет установить многофункциональные энергоэффективные стеклопакеты</div>
                </div>

                <div className={`${classes.nextGrid0} ${classes.white}`}>
                    <div>Воздухо- и водонепроницаемость</div>
                    <div><p>Число контуров уплотнения — 2 (нахлёст уплотнений 5/8 мм внутри). Такая конструкция обеспечивает надежную защиту от сквозняков, пыли и протечек при дожде с сильным ветром</p> <br/>
                        <p>Изоляция воздушного шума (Rw) — от 39 до 45 дБ в зависимости от толщины и типа стёкол в стеклопакетах.</p>
                    </div>
                    <div>Герметичность ПВХ-системы</div>
                </div>

                <div className={`${classes.nextGrid0} ${classes.gary}`}>
                    <div>Взломобезоавсность</div>
                    <div>Возможность установки усиленных приборов запирания благодаря смещению оси приборного паза 13 мм. Такое решение увеличивает устойчивость окна к взлому</div>
                    <div>Позволяет установить надежные приборы запирания</div>
                </div>
            </div>
        </>
    );
};

export default Grazio;
