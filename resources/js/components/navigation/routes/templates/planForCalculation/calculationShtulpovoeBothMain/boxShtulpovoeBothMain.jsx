import React, {useEffect, useState} from 'react';
import CShtulpovoeBothMain from "./cShtulpovoeBothMain";
import classes from "../../../window/window.module.scss";

const BoxShtulpovoeBothMain = ({data}) => {
    const [width, setWidth] = useState(130);
    const [height, setHeight] = useState(130);
    const [left, setLeft] = useState(60)
    const [right, setRight] = useState(60)
    const [price, setPrice] = useState(0)

    useEffect(() => {
        cs()
    }, [data, width, height, left, right])


    const cs = () => {
        if (data) {
            let s1 = (Math.round(left * height)) / 10000
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
                <CShtulpovoeBothMain
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

export default BoxShtulpovoeBothMain;
