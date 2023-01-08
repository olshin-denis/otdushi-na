import React from 'react';
import classes from './rehau.module.scss'
import Blitz from "./parts/blitz";
import Grazio from "./parts/grazio";
import Delight from "./parts/delight";
import {Link} from "react-router-dom";

const Rehau = () => {
    return (
        <div style={{ cursor:'default', textAlign:"center"}}>
            <div className={classes.grid}>
                <div className={classes.grid0}>
                    Работая с REHAU мы используем такие системы как
                </div>
                <div className={classes.grid1}>
                    <div><a href="#Blitz">BLITZ</a></div>
                    <div className={classes.display0}>
                        <div>
                            <img className={classes.windows} src={`http://otdushi-na-okna/photos/window/rehau/blitz/rehau2.jpg`} alt="Нет"/>
                            <div className={classes.display1}>
                                <a href="#Blitz">
                                    <p>Прекрасный выбор для людей</p>
                                    <p>ищащих копромис</p>
                                    <p>Цена-Качество</p>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={classes.grid2}>
                    <div><a href="#Grazio">GRAZIO</a></div>
                    <div className={classes.display0}>
                        <div>
                            <img className={classes.windows} src={`http://otdushi-na-okna/photos/window/rehau/grazio/rehau-grazio3.jpg`} alt="Нет"/>
                            <div className={classes.display1}>
                                <a href="#Grazio">
                                    <p>Хорошая теплосберегающая</p>
                                    <p>способность</p>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={classes.grid3}>
                    <div><a href="#Delight">DELIGHT</a></div>
                    <div className={classes.display0}>
                        <div>
                            <img className={classes.windows} src={`http://otdushi-na-okna/photos/window/rehau/delight/rehau-delight1.jpg`} alt="Нет"/>
                            <div className={classes.display1}>
                                <a href="#Delight">
                                    <p>На 10% больше света в</p>
                                    <p>помещении</p>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Blitz id={"Blitz"}/>
            <Grazio id={"Grazio"}/>
            <Delight id={"Delight"}/>
        </div>
    );
};

export default Rehau;
