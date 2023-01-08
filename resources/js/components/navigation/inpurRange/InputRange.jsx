import React, {useEffect, useRef, useState} from 'react';
import classes from "./inpurRage.module.scss"

const priceGap = 500

const InputRange = ({min, max, setFiltMax, setFiltMin}) => {

    const [minVal, setMinVal] = useState(min)
    const [maxVal, setMaxVal] = useState(max)
    const [minPercent, setMinPercent] = useState(max)
    const [maxPercent, setMaxPercent] = useState(max)
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [classMin, setClassMin] = useState(null)
    const [classMax, setClassMax] = useState(null)

    useEffect(() => {
        // console.log("Min: "+minVal)
        // console.log('MinPercent: '+minPercent)
        // console.log('MaxPercent: '+maxPercent)
        // console.log("Max: "+maxVal)
        // console.log(left)
        // console.log(right)
        percent()
        setFiltMax(maxVal)
        setFiltMin(minVal)
    }, [minVal, maxVal])

    const percent = () => {
        if (maxVal - minVal <= priceGap) {
            if (classMin === "rangeMin") {
                setMinVal(maxVal - priceGap)
            } else if (classMax === "rangeMax") {
                setMaxVal(minVal + priceGap)
            }
        } else {
            let g1 = minVal - min
            let g2 = minPercent - min
            let z1 = maxVal - min
            let z2 = maxPercent - min
            let x1 = (g1 / g2) * 100
            let x2 = 100 - (z1 / z2) * 100
            // console.log(x1)
            // console.log(x2)
            setLeft(x1)
            setRight(x2)
        }
    }

    const changeMin = (write) => {
        let title = write.target.value
        setMinVal(title)
    }

    const changeMax = (write) => {
        let title = write.target.value
        setMaxVal(title)
    }

    const changeMinVal = (event) => {
        setClassMax(null)
        setClassMin(event.target.className)
        const value = parseInt(event.target.value)
        const x = event.target.max
        setMinPercent(x)
        setMinVal(value)
        event.target.value = minVal
    }

    const changeMaxVal = (event) => {
        setClassMin(null)
        setClassMax(event.target.className)
        const value = parseInt(event.target.value)
        const x = event.target.max
        setMaxPercent(x)
        setMaxVal(value)
        event.target.value = maxVal
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.text}>Ценовой фильтр</div>
            <div className={classes.priceInput}>
                <div className={classes.field}>
                    <span>Min</span>
                    <input type="number" className={classes.inputMin} value={minVal} onChange={changeMin}/>
                </div>
                <div className={classes.separator}>-</div>
                <div className={classes.field}>
                    <span>Max</span>
                    <input type="number" className={classes.inputMax} value={maxVal} onChange={changeMax}/>
                </div>
            </div>
            <div className={classes.slider}>
                <div style={{left: `${left}%`, right: `${right}%`}} className={classes.progress}></div>
            </div>
            <div className={classes.rangeInput}>
                <input type="range" className={"rangeMin"}
                       onChange={changeMinVal} min={min} max={max} value={minVal}/>
                <input type="range" className={"rangeMax"}
                       onChange={changeMaxVal} min={min} max={max} value={maxVal}/>
            </div>
        </div>
    );
};

export default InputRange;
