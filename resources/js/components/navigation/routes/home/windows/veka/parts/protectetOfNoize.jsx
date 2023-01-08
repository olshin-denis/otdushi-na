import React from 'react';
import classes from "./euroline.module.scss";

const ProtectetOfNoize = () => {
    return (
        <>
            <div className={classes.flex}>
                <div className={classes.f1}>Окна Шумоподавления</div>
                <div>
                    Это решение для квартир и коттеджей, находящихся в непосредственной близости от автомагистралей, дорог с оживлённым движением, аэропортов и прочих источников шума.
                </div>
            </div>
            <div className={classes.newGrid}>
                <div className={classes.grid0}>
                    <img src={`http://otdushi-na-okna/photos/window/veka/soft/SoftlineProtectedNoize.jpg`} alt="Нет"/>
                </div>
                <div className={classes.grid1}>
                    <div className={classes.gr1}><div>Преимущества</div></div>
                    <div className={classes.grid1_1}>
                        <div className={classes.grid1_2}>
                            <div className={classes.gr1}>
                                Шумоизоляция
                            </div>
                            <div>
                                Высокая шумоизоляция классической системы пятикамерных профилей обеспечивает тишину и спокойствие вашего дома.
                            </div>
                        </div>
                        <div className={classes.grid1_2}>
                            <div className={classes.gr1}>
                                Многокамерная изоляция.
                            </div>
                            <div>
                                Шумозащитные стеклопакеты за счет применения стекол и дистанционной
                                рамки разной ширины снижают пропускную способность звука и гасят как
                                низкочастотные (движение автомобильного потока и сигналы транспорта), так и высокочастотные шумы (строительно-дорожные работы, голоса, звучащие через динамики и т.д.).
                            </div>
                        </div>
                        <div className={classes.grid1_2}>
                            <div className={classes.gr1}>
                                Фурнитура
                            </div>
                            <div>
                                Звукоизолирующие достоинства многокамерного профиля и шумозащитного стеклопакета проявятся только в сочетании с грамотно подобранной фурнитурой.
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ProtectetOfNoize;
