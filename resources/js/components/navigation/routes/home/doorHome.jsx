import React from 'react';
import classes from './door.module.scss'

const DoorHome = () => {
    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div className={classes.hightGrid}>
                <div className={classes.grid0}>ДВЕРИ</div>
                <div className={classes.grid1}>
                    <img src={`http://otdushi-na-okna/photos/door/door1.3.jpg`} alt="Нет"/>
                </div>
                <div className={classes.grid2}>
                    <p>&#8226; Большой выбор внешней отделки.</p>
                    <p>&#8226; Пластиковые двери более долговечны, не боятся влаги, перепадов температуры.</p>
                    <p>&#8226; Эффективное шумоподавление и надёжная теплоизоляция </p>
                    <p>&#8226; Разнообразные вариации конструкций</p>
                    <p>&#8226; Устойчивы к огню</p>
                </div>
                <div className={classes.grid3}>
                    <img src={`http://otdushi-na-okna/photos/door/door3.1.jpg`} alt="Нет"/>
                </div>
            </div>
        </div>
    );
};

export default DoorHome;
