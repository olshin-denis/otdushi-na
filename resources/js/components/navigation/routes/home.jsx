import React, {useEffect, useMemo, useState} from 'react';
import classes from "./home.module.scss"
import {Carousel} from "../slider/Carousel"
import WindowHome from "./home/windowHome";
import BalconyHome from "./home/balconyHome";
import GateHome from "./home/gateHome";
import DoorHome from "./home/doorHome";

const Home = () => {
    const nmas = [
        <>
            <img src={`http://otdushi-na-okna/photos/door/door2.1.jpg`}
                 alt="Нет"/>
            <div className={classes.slideText7}>
                <p style={{paddingLeft: "30rem"}}>Широкий спектр оформления</p>
                <p style={{paddingLeft: "8rem"}}>Позволит подобрать нужный тон под ваши пожелания</p>
            </div>
        </>,
        <>
            <img src={`http://otdushi-na-okna/photos/window/gate1.jpg`}
                 alt="Нет"/>
            <div className={classes.slideText3}>
                Ворота производства ALUTECH
            </div>
            <div className={classes.slideText4}>
                Широкий ассортимент размеров и цветов<br/>
                <p style={{paddingLeft: "6rem"}}>Механичексие и Приводные</p>
                <p style={{paddingLeft: "8rem"}}>Монтаж в течении суток</p>
            </div>
            <div className={classes.slideText5}>
                <p>Выберите свои Ворота!!!</p>
            </div>
        </>,
        <>
            <img src={`http://otdushi-na-okna/photos/balcony/balcony1.2.jpg`}
                 alt="Нет"/>
            <div className={classes.slideText6}>
                Высококачественные материалы и надёжная сборка
                <p style={{paddingLeft: "25rem"}}>обеспечат теплоту и уют</p>
            </div>
        </>,
        <>
            <img src={`http://otdushi-na-okna/photos/window/w11.jpeg`}
                 alt="Нет"/>
            <div className={classes.slideTextTitle}>
                Монтаж Окон, Балконов, Ворот и Дверей
            </div>
            <div className={classes.slideText1}>
                Изготовление стандартных изделий до 2 недель<br/>
                <p style={{paddingLeft: "6rem"}}>Бесплатный замер и расчёт на месте</p>
            </div>
            <div className={classes.slideText2}>
                <p>ГАРАНТИЯ КАЧЕСТВА 2 ГОДА!!!</p>
            </div>
        </>
    ]


    const cs = () => {
        if (nmas) {
            return nmas.map((type, id) => {
                return (
                    <div key={id} className={`${classes.itemSe}`}>
                        {type}
                    </div>

                )
            })
        }

    }
    return (
        <div style={{ cursor:'default'}}>
            {/*<div className={`${classes.sliderBox}`}>*/}
            {/*    <Carousel infinite>*/}
            {/*        {cs()}*/}
            {/*    </Carousel>*/}
            {/*</div>*/}
            <div className={`${classes.sliderBox}`}>
                <img src={`http://otdushi-na-okna/photos/window/w11.1.jpg`}
                     alt="Нет"/>
                <div className={classes.block}>
                    <div className={classes.slideTextTitle}>
                        Монтаж Окон, Балконов, Ворот и Дверей
                    </div>
                    <div className={classes.slideText1}>
                        Изготовление стандартных изделий до 2 недель <br/>
                        Бесплатный замер и расчёт на месте
                    </div>
                    <div className={classes.slideText2}>
                        <p>ГАРАНТИЯ КАЧЕСТВА 2 ГОДА!!!</p>
                    </div>
                </div>
            </div>
            <WindowHome/>
            <BalconyHome/>
            <DoorHome/>
            <GateHome/>
        </div>

    );
};


export default Home;
