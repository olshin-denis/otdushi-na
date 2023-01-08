import React from 'react';
import classes from './veka.module.scss'
import Euroline from "./parts/euroline";
import Softline from "./parts/softline";

const Veka = () => {
    return (
        <div style={{ cursor:'default', textAlign:"center"}}>
            <div className={classes.grid}>
                <div className={classes.grid0}>При монтаже VEKA мы используем такие профиля как</div>
                <div className={classes.grid1}>
                    <div><a href="#Euroline">EUROLINE</a></div>
                    <div className={classes.display0}>
                        <div className={classes.position}>
                            <img src={`http://otdushi-na-okna/photos/window/veka/euro/vekaEuro.jpg`} alt="Нет"/>
                            <div className={classes.display1}>
                                <a href="#Euroline">
                                    <p>Типовое и недорогое решение</p>
                                    <p>для остекленения</p> <p>квартиры и дома</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.grid2}>
                    <div><a href="#Softline">SOFTLINE</a></div>
                    <div className={classes.display0}>
                        <div className={classes.position}>
                            <img src={`http://otdushi-na-okna/photos/window/veka/soft/veka-softline-1.jpg`} alt="Нет"/>
                            <div className={classes.display1}>
                                <a href="#Softline">
                                    <p>Многовариативный профиль</p> <p>с различными модификациями</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.newGrid}>
                <div className={classes.grid0}>Что такое VEKA</div>
                <div className={classes.grid1}>
                    <div className={classes.d1}>Прочность и надёжность</div>
                    <div>
                        Использование специальных армирующих усилителей обеспечивает высокую стабильность конструкции
                    </div>
                </div>
                <div className={classes.grid2}>
                    <div className={classes.d1}>Защита от шума</div>
                    <div>
                        Высокая шумоизоляци яобеспечивает тишину и спокойствие Вашего дома </div>
                </div>
                <div className={classes.grid3}>
                    <div className={classes.d1}>Дизайн и долговечность</div>
                    <div>Высококачественный пластик, устойчивый к воздействиям внешней среды, ровная гладкая поверхность в любом цвете и дизайне</div>
                </div>
                <div className={classes.grid4}>
                    <div className={classes.d1}>Энергоэффективность</div>
                    <div>Стабильная многокамерная система с превосходными изолирующими характеристиками</div>
                </div>
            </div>
            <Euroline/>
            <Softline/>
        </div>
    );
};

export default Veka;
