import React, {useState} from 'react';
import classes from './part.module.scss';

const S3000 = ({id}) => {
    const [displaded, setDispladed] = useState(true)

    const choose = () =>{
        setDispladed((displaded)=>!displaded)
    }
    return (
        <>
            <div id={id} className={classes.head}>S3000</div>
            <div className={classes.head1}>
                Система S3000  является базовой в линейке профилей Gealan. Каких-либо ограничений она не имеет, а это означает, что профиль отлично ламинируется, красится, имеет съемные уплотнители, может быть арочным, трапециевидным. Внутреннее армирование может быть замкнутое, а также п-образное. Универсальность системы Gealan S3000 позволяет применять ее в любых условиях и в любых типах зданий.
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
                        <p>62 мм </p>
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
                    <div>R опр. = 0,64 м2°С/Вт</div>
                    <div>Чем больше, тем лучше теплоизоляция окна</div>
                </div>

                <div className={`${classes.nextGrid0} ${classes.gary}`}>
                    <div>Толщина стеклопакета</div>
                    <div>
                        <p>Max до 34 мм</p>
                    </div>
                    <div>Толстое заполнение позволяет установить многофункциональные энергоэффективные стеклопакеты
                    </div>
                </div>
            </div>
        </>
    );
};

export default S3000;
