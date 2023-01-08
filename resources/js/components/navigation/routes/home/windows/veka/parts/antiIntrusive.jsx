import React from 'react';
import classes from "./euroline.module.scss";

const AntiIntrusive = () => {
    return (
        <>
            <div className={classes.flex}>
                <div className={classes.f1}>Противозломные окна</div>
                <div>
                    Конструкция из антивандального стеклопакета, усиленного ПВХ-профиля и специального
                        фурнитуры. Такое окно обеспечивает защиту от проникновения злоумышленников в квартиру.
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
                                Надежность
                            </div>
                            <div>
                                Классическая стабильная пятикамерная оконных профилей с превосходными изолирующими характеристиками.
                            </div>
                        </div>
                        <div className={classes.grid1_2}>
                            <div className={classes.gr1}>
                                Антивандальный стеклопакет
                            </div>
                            <div>
                                Ударопрочные стеклопакеты изготавливаются из специального стекла
                                «триплекс».Это сочетание нескольких стекол, соединенных воедино специальным методом. Триплекс обладает особой стойкостью к ударам и разрушению, а кроме этого, препятствует разлету осколков, если стекло разобьется.
                            </div>
                        </div>
                        <div className={classes.grid1_2}>
                            <div className={classes.gr1}>
                                Противовзломная фурнитура
                            </div>
                            <div>
                                Специальная фурнитура обеспечивает взломостойкость за счет применения устойчивых к взлому технических решений. Усиленные петли выдерживают большие нагрузки. Дополнительные запоры по периметру рамы препятствуют открыванию окна, если злоумышленник преодолел основные замки.

                            </div>
                        </div>
                        <div className={classes.grid1_2}>
                            <div className={classes.gr1}>
                                Усиленный ПВХ-профиль оконной рамы
                            </div>
                            <div>
                                Использование специальных армирующих усилителей обеспечивает высокую стабильность конструкций. Запорные цапфы грибовидной формы на створке окна невозможно открыть монтировкой.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AntiIntrusive;
