import React from 'react';
import classes from "./balcony.module.scss";
const BalconyHome = () => {
    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", textAlign:"center"}}>
            <div className={`${classes.hightGrid2}`}>
                <div className={classes.grid0}>
                    <div style={{
                        display: "flex",
                        flexDirection:"column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0.5rem 0 0 0",
                        fontWeight:"700"
                    }}>
                        <p>Возможные варианты остекления Балкона (Лоджии)</p>

                    </div>
                </div>
                <div className={`${classes.grid1}`}>
                    <div className={`${classes.grid1_0}`}><p>Конструкция балкона</p></div>
                    <div className={`${classes.grid1_1}`}>
                        <div>БЕЗ ВЫНОСА</div>
                        <div>
                            <img className={classes.img} src={`http://otdushi-na-okna/photos/balcony/balcony3.jpg`} alt="Нет"/>
                        </div>
                        <div>
                            <img className={classes.img} src={`http://otdushi-na-okna/photos/balcony/balcony2.jpg`} alt="Нет"/>
                        </div>
                    </div>
                    <div className={`${classes.grid1_2}`}>
                        <div>С ВЫНОСОМ</div>
                        <div>
                            <img className={classes.img} src={`http://otdushi-na-okna/photos/balcony/bw1.jpg`} alt="Нет"/>
                        </div>
                        <div>
                            <img className={classes.img} src={`http://otdushi-na-okna/photos/balcony/balcony5.jpg`} alt="Нет"/>
                        </div>
                    </div>
                </div>
                <div className={classes.grid2}>
                    <p>Тип остекления: Холодное (Алюминий) или Тёплое (ПВХ)</p>
                    <p>Вид остекления: рамное или безрамное</p>
                    <p>Разновидность остекления: классическая или панорамное (Французская)</p>
                </div>
            </div>
        </div>
    );
};

export default BalconyHome;
