import React, {useEffect, useState} from 'react';
import CBalconyBlockLeft from "./cBalconyBlockLeft";
import classes from "../../../window/window.module.scss";

const BoxBalconyBlockLeft = ({data}) => {

    const [width, setWidth] = useState(200);
    const [height, setHeight] = useState(210);
    const [left, setLeft] = useState(70);
    const [right, setRight] = useState(130);
    const [wertik, setWertik] = useState(140);
    const [price, setPrice] = useState(0);
    const [excessS, setExcessS] = useState(0);

    useEffect(() => {
        excess()
        cs()
    })

    const excess = () => {
        if (data) {
            let g = (left * 100) / width
            if (g <= 35) {
                setExcessS(0)
            } else if (width === 0 || left === 0 || height === 0) {
                setExcessS(0)
            } else {
                setExcessS(7.2)
            }
        }
    }

    const cs = () => {
        if (data) {
            let cs = 10000
            let s1 = (Math.round((left + excessS) * (wertik + excessS))) / cs
            let s2 = (Math.round(right * height)) / cs
            let s = s1 + s2
            let cost = data.cost/s
            let p = Math.round(s * cost)
            setPrice(p)
        }
    }

    return (
        <div className={classes.box}>
            <div className={classes.bock}>
                <CBalconyBlockLeft width={width} height={height} left={left} right={right} wertik={wertik}
                                    setWidth={setWidth} setHeight={setHeight} setLeft={setLeft} setRight={setRight}
                                    setWertik={setWertik}/>
            </div>
            <div className={classes.cost}>
                Цена: {price}р
            </div>
        </div>
    );
};

export default BoxBalconyBlockLeft;
