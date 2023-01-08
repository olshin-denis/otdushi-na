import React, {useState} from 'react';
import classes from './part.module.scss'

const S8000 = ({id}) => {
    const [displaded, setDispladed] = useState(true)

    const choose = () =>{
        setDispladed((displaded)=>!displaded)
    }
    return (
        <>
            <div id={id} className={classes.head}>S8000</div>
            <div className={classes.head1}>
                <p>Профильная система GEALAN S8000 является следующим шагом развития профильных систем GEALAN. Основное внимание при создании системы, уделялось повышению технических характеристик, связанных с тепло и звуко изоляцией. Конструктив позволяет использовать замкнутое стальное армирование большого размера, благодаря чему достигается отличная стабильность и прочность, соответствующая требованиям строительных объектов.</p> <br/>
                <p>Наличие большого числа камер и расположение их внутри профиля обуславливает повышенное сопротивление теплопередаче и повышает показатели звукоизоляции. Большая фальцевая поверхность профиля обеспечивает лёгкий уход.</p>
            </div>

            <div className={classes.had}>
                <button onClick={choose}><div>ОСНОВНЫЕ ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ</div></button>
            </div>

            <div className={!displaded === true ?classes.nextGrid:classes.displaed}>
                <div className={`${classes.nextGrid0} ${classes.gary} ${classes.hr}`}>
                    <div>Характеристика</div>
                    <div>Значение</div>
                    <div>Объяснение</div>
                </div>
                <div className={`${classes.nextGrid0} ${classes.white}`}>
                    <div>Системная глубина</div>
                    <div>
                        <p>74 мм </p>
                    </div>
                    <div className={classes.left}>Толщина пластиковой коробки и створки</div>
                </div>

                <div className={`${classes.nextGrid0} ${classes.gary}`}>
                    <div>Число камер</div>
                    <div>6 камер</div>
                    <div>Воздушные камеры в профиле окна, промежуток между ребрами жесткости в самой раме окна</div>
                </div>

                <div className={`${classes.nextGrid0} ${classes.white}`}>
                    <div>Теплоизоляция</div>
                    <div>R опр. = 0,8 м2°С/Вт</div>
                    <div>Чем больше, тем лучше теплоизоляция окна</div>
                </div>

                <div className={`${classes.nextGrid0} ${classes.gary}`}>
                    <div>Толщина стеклопакета</div>
                    <div>
                        <p>Max до 46 мм</p>
                    </div>
                    <div>Толстое заполнение позволяет установить многофункциональные энергоэффективные стеклопакеты
                    </div>
                </div>
            </div>
        </>
    );
};

export default S8000;
