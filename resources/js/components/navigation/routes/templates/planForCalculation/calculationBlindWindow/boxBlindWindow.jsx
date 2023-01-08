import React, {useEffect, useState} from 'react';
import CBlindWindow from "./cBlindWindow";
import classes from "../../../window/window.module.scss";

const   BoxBlindWindow = ({data}) => {

    const [width, setWidth] = useState(130);
    const [height, setHeight] = useState(130);
    const [price, setPrice] = useState()

    useEffect(() => {
        cs()
        // console.log(data.cost)
    }, [data, width, height])

    const writeHeight = (write)=>{
        let title = write.target.value
        setHeight(title)
    }

    const writeWidth = (write) => {
        let title = write.target.value
        setWidth(title)
    }

    const cs = () => {
            if (data) {
                    let cost = (data.cost /((width / 100) * (height / 100)))
                    let p = Math.round((((width / 100) * (height / 100)) * cost))
                    setPrice(p)
            }
        }

    return (
        <div className={classes.box}>
            <div className={classes.bock}>
                <CBlindWindow height={height} width={width} setWidth={setWidth} setHeight={setHeight}/>
            </div>
            <div className={classes.cost}>
                Цена: {price}р
            </div>
            {/*<div style={{marginLeft: "10px"}}>*/}
            {/*    <div>*/}
            {/*        высота: <input className={`${classes.number}`} onChange={writeHeight} type="number"*/}
            {/*                       value={height}/>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        ширина: <input className={`${classes.number}`} onChange={writeWidth} type="number"*/}
            {/*                       value={width}/>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    );
};

export default BoxBlindWindow;
