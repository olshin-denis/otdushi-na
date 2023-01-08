import React from 'react';
import classes from "../../../window/window.module.scss";

const CDoubleLeafWindowLeft = ({width, height, setHeight, setWidth, left, setLeft, setRight, right}) => {
    const writeHeight = (write) => {
        let title = write.target.value
        let num = Number(title)
        setHeight(num)
    }

    const writeWidth = (write) => {
        let title = write.target.value
        let num = Number(title)
        let r = num / 2
        let l = num / 2
        setWidth(num)
        setRight(r)
        setLeft(l)
    }

    const changeLeft = (write) => {
        let title = write.target.value
        let num = Number(title)
        setLeft(num)
        let r = num + right
        if(r<0){
            r=0
        }
        setWidth(r)
    }

    const changeRight = (write) => {
        let title = write.target.value
        let num = Number(title)
        setRight(num)
        let r = num + left
        if(r<0){
            r=0
        }
        setWidth(r)
    }

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
            height: "100%"
        }}>
            <svg width="100%" height="100%" viewBox="0 0 155 185" fill="none" style={{
                width: "100%",
                height: "100%"
            }}
            >

                <foreignObject x={"3%"} y={"32%"} width={"0.9rem"} height={"2rem"}>
                    <div style={{
                        transform: "rotate(90deg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding:"0.5rem",
                    }}>
                        <input
                            className={`${classes.number}`}
                            onChange={writeHeight}
                            // min={20} max={300}
                            type="number"
                            value={height}
                            style={{fontSize: "0.8rem", width: "3rem", height: "2rem"}}/>
                    </div>
                </foreignObject>

                <foreignObject x={"37%"} y={"91.5%"} width={"5rem"} height={"0.7rem"}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <input
                            className={`${classes.number}`}
                            onChange={writeWidth}
                            // min={20} max={300}
                            type="number"
                            value={width}
                            style={{fontSize: "0.8rem", width: "2rem", height: "0.7rem"}}/>
                    </div>
                </foreignObject>

                <foreignObject x={"21%"} y={"80%"} width={"5rem"} height={"0.7rem"}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <input
                            className={`${classes.number}`}
                            onChange={changeLeft}
                            // min={20} max={300}
                            type="number"
                            value={left}
                            style={{fontSize: "0.8rem", width: "2rem", height: "0.7rem"}}/>
                    </div>
                </foreignObject>

                <foreignObject x={"61%"} y={"80%"} width={"5rem"} height={"0.7rem"}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <input
                            className={`${classes.number}`}
                            onChange={changeRight}
                            // min={20} max={300}
                            type="number"
                            value={right}
                            style={{fontSize: "0.8rem", width: "2rem", height: "0.7rem"}}/>
                    </div>
                </foreignObject>

                <rect x="-0.5" y="0.5" width="129" height="139" transform="matrix(-1 0 0 1 152.998 1)" fill="white" stroke="black"/>
                <rect x="-0.5" y="0.5" width="119" height="129" transform="matrix(-1 0 0 1 147.998 6)" fill="white" stroke="black"/>
                <rect x="-0.5" y="0.5" width="4" height="129" transform="matrix(-1 0 0 1 95.9981 6)" fill="white" stroke="black"/>
                <rect x="-0.75" y="0.75" width="48.5" height="114.5" transform="matrix(-1 0 0 1 84.4981 13)" fill="#C9F8FF" stroke="black" strokeWidth="1.5"/>
                <rect width="51" height="128" transform="matrix(-1 0 0 1 147.998 7)" fill="#C9F8FF"/>
                <rect x="-0.1" y="0.1" width="3.8" height="7.8" transform="matrix(-1 0 0 1 90.7981 65)" fill="white" stroke="black" strokeWidth="0.2"/>
                <rect x="-0.12" y="0.12" width="1.76" height="7.76" transform="matrix(-1 0 0 1 89.7581 69)" fill="white" stroke="black" strokeWidth="0.24"/>
                <path d="M37.4981 14.5L84.9981 71" stroke="black" strokeLinecap="round"/>
                <path d="M36.9981 128L84.9981 71" stroke="black" strokeLinecap="round"/>
                <path d="M84.9981 128L61.4981 14" stroke="black" strokeLinecap="round"/>
                <path d="M36.9981 128L61.4981 14" stroke="black" strokeLinecap="round"/>
                <path d="M152.998 2L148.498 6.5" stroke="black" strokeLinecap="round"/>
                <path d="M29.4981 135.5L24.9981 140" stroke="black" strokeLinecap="round"/>
                <path d="M36.4981 128.5L29.9981 135" stroke="black" strokeLinecap="round"/>
                <path d="M91.9981 7L85.4981 13.5" stroke="black" strokeLinecap="round"/>
                <path d="M152.998 140L148.498 135.5" stroke="black" strokeLinecap="round"/>
                <path d="M29.4981 6.5L24.9981 2" stroke="black" strokeLinecap="round"/>
                <path d="M91.9981 135L85.4981 128.5" stroke="black" strokeLinecap="round"/>
                <path d="M36.4981 13.5L29.9981 7" stroke="black" strokeLinecap="round"/>
                <rect x="-0.5" y="0.5" width="129" height="139" transform="matrix(-1 0 0 1 152.998 1)" fill="white" stroke="black"/>
                <rect x="-0.5" y="0.5" width="119" height="129" transform="matrix(-1 0 0 1 147.998 6)" fill="white" stroke="black"/>
                <rect x="-0.5" y="0.5" width="4" height="129" transform="matrix(-1 0 0 1 95.9981 6)" fill="white" stroke="black"/>
                <rect x="-0.75" y="0.75" width="48.5" height="114.5" transform="matrix(-1 0 0 1 84.4981 13)" fill="#C9F8FF" stroke="black" strokeWidth="1.5"/>
                <rect width="51" height="128" transform="matrix(-1 0 0 1 147.998 7)" fill="#C9F8FF"/>
                <rect x="-0.1" y="0.1" width="3.8" height="7.8" transform="matrix(-1 0 0 1 90.7981 65)" fill="white" stroke="black" strokeWidth="0.2"/>
                <rect x="-0.12" y="0.12" width="1.76" height="7.76" transform="matrix(-1 0 0 1 89.7581 69)" fill="white" stroke="black" strokeWidth="0.24"/>
                <path d="M37.4981 14.5L84.9981 71" stroke="black" strokeLinecap="round"/>
                <path d="M36.9981 128L84.9981 71" stroke="black" strokeLinecap="round"/>
                <path d="M84.9981 128L61.4981 14" stroke="black" strokeLinecap="round"/>
                <path d="M36.9981 128L61.4981 14" stroke="black" strokeLinecap="round"/>
                <path d="M152.998 2L148.498 6.5" stroke="black" strokeLinecap="round"/>
                <path d="M29.4981 135.5L24.9981 140" stroke="black" strokeLinecap="round"/>
                <path d="M36.4981 128.5L29.9981 135" stroke="black" strokeLinecap="round"/>
                <path d="M91.9981 7L85.4981 13.5" stroke="black" strokeLinecap="round"/>
                <path d="M152.998 140L148.498 135.5" stroke="black" strokeLinecap="round"/>
                <path d="M29.4981 6.5L24.9981 2" stroke="black" strokeLinecap="round"/>
                <path d="M91.9981 135L85.4981 128.5" stroke="black" strokeLinecap="round"/>
                <path d="M36.4981 13.5L29.9981 7" stroke="black" strokeLinecap="round"/>
                <path d="M4.35163 141.354C4.15637 141.549 3.83979 141.549 3.64452 141.354L0.462543 138.172C0.267281 137.976 0.267281 137.66 0.462543 137.464C0.657806 137.269 0.974388 137.269 1.16965 137.464L3.99808 140.293L6.8265 137.464C7.02177 137.269 7.33835 137.269 7.53361 137.464C7.72887 137.66 7.72887 137.976 7.53361 138.172L4.35163 141.354ZM3.64452 0.646454C3.83979 0.451187 4.15637 0.451187 4.35163 0.646454L7.53361 3.82843C7.72887 4.0237 7.72887 4.34027 7.53361 4.53554C7.33835 4.73079 7.02177 4.73079 6.8265 4.53554L3.99808 1.70711L1.16965 4.53554C0.974388 4.73079 0.657806 4.73079 0.462543 4.53554C0.267281 4.34027 0.267281 4.0237 0.462543 3.82843L3.64452 0.646454ZM3.49808 141L3.49808 1H4.49808L4.49808 141H3.49808Z" fill="black"/>
                <path d="M154.354 180.646C154.549 180.842 154.549 181.158 154.354 181.354L151.172 184.536C150.976 184.731 150.66 184.731 150.464 184.536C150.269 184.34 150.269 184.024 150.464 183.828L153.293 181L150.464 178.172C150.269 177.976 150.269 177.66 150.464 177.464C150.66 177.269 150.976 177.269 151.172 177.464L154.354 180.646ZM23.6426 181.354C23.4473 181.158 23.4473 180.842 23.6426 180.646L26.8246 177.464C27.0198 177.269 27.3364 177.269 27.5317 177.464C27.727 177.66 27.727 177.976 27.5317 178.172L24.7033 181L27.5317 183.828C27.727 184.024 27.727 184.34 27.5317 184.536C27.3364 184.731 27.0198 184.731 26.8246 184.536L23.6426 181.354ZM154 181.5H23.9962V180.5H154V181.5Z" fill="black"/>
                <path d="M154.354 161.354C154.549 161.158 154.549 160.842 154.354 160.646L151.172 157.464C150.976 157.269 150.66 157.269 150.464 157.464C150.269 157.66 150.269 157.976 150.464 158.172L153.293 161L150.464 163.828C150.269 164.024 150.269 164.34 150.464 164.536C150.66 164.731 150.976 164.731 151.172 164.536L154.354 161.354ZM93.6464 160.646C93.4512 160.842 93.4512 161.158 93.6464 161.354L96.8284 164.536C97.0237 164.731 97.3403 164.731 97.5355 164.536C97.7308 164.34 97.7308 164.024 97.5355 163.828L94.7071 161L97.5355 158.172C97.7308 157.976 97.7308 157.66 97.5355 157.464C97.3403 157.269 97.0237 157.269 96.8284 157.464L93.6464 160.646ZM154 160.5H94V161.5H154V160.5Z" fill="black"/>
                <path d="M94.3536 161.354C94.5488 161.158 94.5488 160.842 94.3536 160.646L91.1716 157.464C90.9763 157.269 90.6597 157.269 90.4645 157.464C90.2692 157.66 90.2692 157.976 90.4645 158.172L93.2929 161L90.4645 163.828C90.2692 164.024 90.2692 164.34 90.4645 164.536C90.6597 164.731 90.9763 164.731 91.1716 164.536L94.3536 161.354ZM23.6464 160.646C23.4512 160.842 23.4512 161.158 23.6464 161.354L26.8284 164.536C27.0237 164.731 27.3403 164.731 27.5355 164.536C27.7308 164.34 27.7308 164.024 27.5355 163.828L24.7071 161L27.5355 158.172C27.7308 157.976 27.7308 157.66 27.5355 157.464C27.3403 157.269 27.0237 157.269 26.8284 157.464L23.6464 160.646ZM94 160.5H24V161.5H94V160.5Z" fill="black"/>
            </svg>
        </div>
    );
};

export default CDoubleLeafWindowLeft;
