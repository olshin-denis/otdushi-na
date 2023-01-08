import React, {useEffect, useState} from 'react';
import CShtulpovoeWindowLeftMain from "./cShtulpovoeWindowLeftMain";
import classes from "../../../window/window.module.scss";

const BoxShtulpovoeWindowLeftMain = ({data}) => {

    const [width, setWidth] = useState(130);
    const [height, setHeight] = useState(130);
    const [left, setLeft] = useState(65)
    const [right, setRight] = useState(65)
    const [price, setPrice] = useState(0)
    const [excessS, setExcessS] = useState(0)

    useEffect(() => {
        cs()
        excess()
    }, [data, width, height, left, right, excessS])

    const excess = () => {
        if (data) {
            let g = left / width
            if (g === 0.5) {
                let c = 0
                setExcessS(c)
                // console.log("c: " + c)
            } else if (width === 0 || right === 0) {
                let c = 0
                setExcessS(c)
                // console.log("c: " + c)
            } else if (g === 0) {
                let c = 0
                setExcessS(c)
                // console.log("c: " + c)
            } else if (left < right) {
                let c = 0
                setExcessS(c)
                // console.log("c: " + c)
            } else {
                let c = 3.5
                setExcessS(c)
                // console.log("c: " + c)
            }
            // console.log("g: " + g)
            // console.log("excessS: " + excessS)
        }
    }

    const cs = () => {
        if (data) {
            let s1 = (Math.round((left + excessS) * (height + excessS))) / 10000
            let s2 = (Math.round(right * height)) / 10000
            let s = s1 + s2
            let cost = data.cost/s
            let p = Math.round(s * cost)
            // console.log(excessS)
            setPrice(p)
        }
    }
    return (
        <div className={classes.box}>
            <div className={classes.bock}>
                <CShtulpovoeWindowLeftMain
                    width={width} height={height} setHeight={setHeight} setWidth={setWidth}
                    setLeft={setLeft} left={left} setRight={setRight} right={right}
                />
            </div>
            <div className={classes.cost}>
                Цена: {price}р
            </div>
        </div>
    );
};

export default BoxShtulpovoeWindowLeftMain;
