import React from 'react';
import classes from "./euroline.module.scss";

const ForChield = () => {
    return (
        <>
            <div className={classes.flex}>
                <div className={classes.f1}>Окна для детской</div>
                <div>
                    Это специальное окно сделает детскую комнату максимально безопасной. Окно открывается только на проветривание. Для полного открытия окна необходим ключ.
                </div>
            </div>
            <div className={classes.newGrid}>
                <div className={classes.grid0}>
                    <img src={`http://otdushi-na-okna/photos/window/veka/soft/softlineAntiIntrusife.jpg`} alt="Нет"/>
                </div>
                <div className={classes.grid1}>
                    <div className={classes.gr1}><div>Преимущества</div></div>
                    <div className={classes.grid1_1}>
                        <div className={classes.grid1_2}>
                            <div className={classes.gr1}>
                                Фурнитура
                            </div>
                            <div>
                                Чтобы ребёнок не смог самостоятельно открыть окно и не выпал наружу, на окно устанавливается специальная защитная фурнитура. К ней относится детский замок.
                            </div>
                        </div>
                        <div className={classes.grid1_2}>
                            <div className={classes.gr1}>
                                Многослойное стекло
                            </div>
                            <div>
                                Для окон в детской комнате рекомендуется выбирать стеклопакеты из закалённого стекла или стекла триплекс.
                            </div>
                        </div>
                        <div className={classes.grid1_2}>
                            <div className={classes.gr1}>
                                Энергоэффективность
                            </div>
                            <div>
                                В детской нужно поддерживать комфортный микроклимат и избегать сквозняков.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForChield;
