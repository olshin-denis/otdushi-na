import React from 'react';
import classes from "./euroline.module.scss";

const SunShield = () => {
    return (
        <>
            <div className={classes.flex}>
                <div className={classes.f1}>Окна с солнцезащитой</div>
                <div>
                    Солнцезащитные окна на ПВХ-профиле сохраняют комфортную температуру в помещении во время летней жары и помогают сэкономить на кондиционировании. Специальное покрытие поглощает или отражает солнечные лучи. Рефлективные стекла работаю лучше, чем жалюзи: в комнате с такими окнами температура ниже примерно на 5 градусов.
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
                                Современный профиль
                            </div>
                            <div>
                                Классическая стабильная пятикамерная система оконных профилей с превосходными изолирующими характеристиками
                            </div>
                        </div>
                        <div className={classes.grid1_2}>
                            <div className={classes.gr1}>
                                Уплотнители
                            </div>
                            <div>
                                Качественные уплотнения из современных материалов обеспечивают высокие изолирующие свойства конструкции как в жаркое, так и в холодное время года.
                            </div>
                        </div>
                        <div className={classes.grid1_2}>
                            <div className={classes.gr1}>
                                Энергоэффективность
                            </div>
                            <div>
                                Мультифункциональное стекло благодаря инновационному напылению, которое не воспринимает человеческий глаз, отражает энергию в обе стороны, поэтому надежно защищает помещение не только от излишнего тепла в летние дни, но и сохраняет тепло внутри помещения зимой.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SunShield;
