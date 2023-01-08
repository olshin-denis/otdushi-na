import React from 'react';
import classes from "./window.module.scss";
import {Link} from "react-router-dom";
import DifWindow from "./svgHome/difWindow";
import RotaryWindow from "./svgHome/rotaryWindow";
import SwingOutWindow from "./svgHome/swingOutWindow";

const WindowHome = () => {
    return (
        <>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection:"column", textAlign:"center"}}>
                <div className={classes.hightGrid}
                     style={{display: "grid", gridTemplateColumns: "1fr, 4fr", gridTemplateRows: "1fr, 1fr, 1fr"}}>
                    <div className={classes.grid0}>
                        НАИБОЛЕЕ РАСПРОСТРАНЁННЫЕ ПРОФИЛЯ ДЛЯ ОКОН
                    </div>
                    <div className={classes.grid1}>
                        <div className={classes.grid0_1}>
                           <u>REHAU</u>
                        </div>
                        <div className={`${classes.boxText} ${classes.grid1_1}`}>
                            <div className={classes.dive}>
                                <img src={`http://otdushi-na-okna/photos/window/w13.1.jpg`} alt="Нет"/>
                                <div className={` ${classes.grid1_4}`}>
                                    <Link className={classes.Link} to={"/window/rehau"}><u>Узнать больше</u></Link>
                                </div>
                            </div>

                        </div>
                        <div className={classes.grid0_2}>
                           <u>VEKA</u>
                        </div>
                        <div className={`${classes.boxText} ${classes.grid1_2}`}>
                            <div className={classes.dive}>
                                <img src={`http://otdushi-na-okna/photos/window/w7.1.jpg`} alt="Нет"/>
                                <div className={` ${classes.grid1_5}`}>
                                    <Link className={classes.Link} to={"/window/veka"}><u>Узнать больше</u></Link>
                                </div>
                            </div>
                        </div>
                        <div className={classes.grid0_3}>
                            <u>GEALAN</u>
                        </div>
                        <div className={`${classes.boxText} ${classes.grid1_3}`}>
                            <div className={classes.dive}>
                                <img src={`http://otdushi-na-okna/photos/window/w8.2.jpg`} alt="Нет"/>
                                <div className={`${classes.grid1_6}`}>
                                    <Link className={classes.Link} to={"/window/gealan"}><u>Узнать больше</u></Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection:"column"}}>
                <div className={classes.hightGrid1}>
                    <div className={classes.grid0}>ПОДОКОННИК DANKE</div>
                    <div className={classes.grid1}>
                        <img  src={`http://otdushi-na-okna/photos/danke/danke3.jpg`} alt="Нет"/>
                    </div>
                    <div className={classes.grid2}>
                        <p>Cовременный, экологически чистый, не имеющий аналогов на рынке немецкий подоконник
                            торговой
                            марки DANKE имеет следуюшие потребительские характеристики:</p><br/>
                        <p>&#8226; Стойкость к износу и царапанью</p>
                        <p>&#8226; Устойчивость к нагреву</p>
                        {/*<p>()</p>*/}
                        <p>&#8226; Влагостойкость и паростойкость</p>
                        <p>&#8226; Устойчивость к воздействию ультрафиолета</p>
                        <p>&#8226; Экологичность</p><br/>
                        <Link to={`/choice`}>
                            <button className={classes.link}><p><u>Расчитать стоимость Вашего Окна</u></p>
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </>

    );
};

export default WindowHome;
