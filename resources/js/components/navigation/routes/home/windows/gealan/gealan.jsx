import React from 'react';
import classes from "./gealan.module.scss"
import S3000 from "./part/s3000";
import S8000 from "./part/s8000";

const Gealan = () => {
    return (
        <div style={{ cursor:'default', textAlign:"center"}}>
            <div className={classes.grid}>
                <div className={classes.grid0}>В Gealan мы используем такие системные профиля как</div>
                <div className={classes.grid1}>
                    <div className={classes.pad}><p><a href="#S3000">S 3000</a></p></div>
                    <div className={classes.display0}>
                        <div className={classes.position}>
                            <img src={`http://otdushi-na-okna/photos/window/gealan/s3000/gealanS3000.jpg`} alt="Нет"/>
                            <div className={classes.display1}>
                                <div>
                                    <a href="#S3000">
                                        Минимальная цена с более
                                        глубокой монтажной глубиной
                                    </a>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={classes.grid2}>
                    <div className={classes.pad}><p><a href="#S8000">S 8000</a></p></div>
                    <div className={classes.display0}>
                        <div className={classes.position}>
                            <img src={`http://otdushi-na-okna/photos/window/gealan/s8000/gealanS8000.jpg`} alt="Нет"/>
                            <div className={classes.display1}>
                                <div>
                                    <a href="#S8000">
                                        Повышенное качество долговечности
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.newGrid}>
                <div className={classes.grid0}>Особенности профиля GEALAN</div>
                <div className={classes.grid1}>
                    <div className={classes.grid1_1}>
                        <div className={classes.heigh}>Теплоизоляция</div>
                        <div>
                            ПВХ-окна GEALAN оптимально сохраняют энергию
                        </div>
                    </div>
                    <div className={classes.grid1_1}>
                        <div className={classes.heigh}>Звукоизоляция</div>
                        <div>
                            Современная конструкция и качественный монтаж надёжно защищают от шума на улице
                        </div>
                    </div>
                    <div className={classes.grid1_1}>
                        <div className={classes.heigh}>Защита от взлома</div>
                        <div>
                            Для окон из профиля GEALAN главными критериями безопасности являются характерная толщина материала, дополнительные перегородки и надежная установка оконной фурнитуры
                        </div>
                    </div>
                    <div className={classes.grid1_1}>
                        <div className={classes.heigh}>Статика</div>
                        <div>
                            Процесс сухой статической вклейки заключается во вклеивании стеклопакета в створку при помощи специально разработанной клейкой ленты
                        </div>
                    </div>
                    <div className={classes.grid1_1}>
                        <div className={classes.heigh}>Поверхности</div>
                        <div>
                            Цветные окна и двери имеют большое значение в дизайне фасада
                        </div>
                    </div>
                </div>
            </div>
            <S3000 id={"S3000"}/>
            <S8000 id={"S8000"}/>
        </div>
    );
};

export default Gealan;
