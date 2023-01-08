import React, {useEffect, useState} from 'react';
import CThreeLeafWindow from "./cThreeLeafWindow";
import classes from "../../../window/window.module.scss";

const BoxThreeLeafWindow = ({data}) => {
    const [width, setWidth] = useState(200);
    const [height, setHeight] = useState(140);
    const [left, setLeft] = useState(67.5);
    const [right, setRight] = useState(67.5);
    const [center, setCenter] = useState(65);
    const [price, setPrice] = useState(0);
    const [excessS, setExcessS] = useState(0);

    useEffect(() => {
        excess()
        cs()
    },[width, height, left, right, center, excessS, price])

    const excess = () => {
        if (data) {
            let g = (center * 100) / width
            if (g <= 32.5) {
                setExcessS(0)
            } else if (width === 0 || left === 0 || right === 0 || height === 0) {
                setExcessS(0)
            } else {
                setExcessS(2.4)
            }
        }
    }

    const cs = () => {
        if (data) {
            let cs = 10000
            let s1 = (Math.round(left * height)) / cs
            let s2 = (Math.round(right * height)) / cs
            let s3 = (Math.round((center + excessS) * (height + excessS))) / cs
            let s = s1 + s2 + s3
            let cost = data.cost / s
            let p = Math.round(s * cost)
            // console.log(excessS)
            // console.log(cost)
            setPrice(p)
        }
    }

    return (
        <div className={classes.box}>
            <div className={classes.bock}>
                <CThreeLeafWindow width={width} right={right} left={left} center={center} height={height}
                                  setWidth={setWidth} setRight={setRight} setLeft={setLeft} setCenter={setCenter}
                                  setHeight={setHeight}/>
            </div>
            <div className={classes.cost}>
                Цена: {price}р
            </div>
        </div>
    );
};

export default BoxThreeLeafWindow;
