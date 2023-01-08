import React from 'react';
import classes from "./euroline.module.scss";

const EnergyEfficiency = () => {
    return (
        <>
            <div className={classes.flex}>
                <div className={classes.f1}>Энергоэффективные окна</div>
                <div>
                    Пластиковое окно, каждый компонент которого вносит вклад в энергосбережение. Теплосбережение и солнцезащита достигаются за счет напыления на внутренней поверхности стекла. Энергосберегающие окна помогают экономить на отоплении зимой и кондиционировании летом.
                </div>
            </div>
            <div className={classes.newGrid}>
                <div className={classes.grid0}>
                    <img src={`http://otdushi-na-okna/photos/window/veka/soft/SoftlineEnergyEfficiency.jpg`} alt="Нет"/>
                </div>
                <div className={classes.grid1}>
                    <div className={classes.gr1}><div>Преимущества</div></div>
                    <div className={classes.grid1_1}>
                        <div className={classes.grid1_2}>
                            <div className={classes.gr1}>
                                Современный профиль
                            </div>
                            <div>
                                Системная платформа SOFTLINE 82 предлагает оптимальную базовую монтажную ширину, позволяющую эффективно использовать энергоэффективные окна.
                            </div>
                        </div>
                        <div className={classes.grid1_2}>
                            <div className={classes.gr1}>
                                Теплосбережение
                            </div>
                            <div>
                                Способность удерживать тепло приобретается за счет особого инновационного напыления, нанесенного на внутреннюю поверхность стекла. Напыление невидимо для человеческого глаза, но прекрасно пропускает в помещение видимую часть солнечного спектра.
                            </div>
                        </div>
                        <div className={classes.grid1_2}>
                            <div className={classes.gr1}>
                                Экономичность
                            </div>
                            <div>
                                Энергоэффективное окно не только удерживает тепло, но и способствует снижению расходов на отопление. Кроме этого, отпадает необходимость приобретать мощные обогревательные приборы.

                            </div>
                        </div>
                        <div className={classes.grid1_2}>
                            <div className={classes.gr1}>
                                Тёплая рамка
                            </div>
                            <div>
                                Дистанционная пластиковая рамка, которая в отличие от традиционной алюминиевой, обладает меньшей теплопроводностью. Поэтому в местах соприкосновения такой рамки со стеклами при значительном понижении температуры за окном не образуется наледь.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EnergyEfficiency;
