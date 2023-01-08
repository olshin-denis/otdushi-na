import React from 'react';
import classes from "./euroline.module.scss"

const Euroline = () => {
    return (
        <div className={classes.grid}>
            <div className={classes.grid0}>
                <div className={classes.teg}> Характеристики профиля <span>EUROLINE</span> </div>
            </div>
            <div className={classes.grid1}>
                <div>
                    3 камеры
                </div>
                <div>
                     <p>Сопротивление теплопередаче</p> <p>0,64 м²С/Вт</p>
                </div>
                <div>
                    Поворотно-откидная форнитура
                </div>
                <div>
                    Цвет белый
                </div>
            </div>
        </div>
    );
};

export default Euroline;
