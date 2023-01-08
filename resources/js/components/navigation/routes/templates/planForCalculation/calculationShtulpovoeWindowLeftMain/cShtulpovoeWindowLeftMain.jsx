import React from 'react';
import classes from "../../../window/window.module.scss";

const CShtulpovoeWindowLeftMain = ({left, width, height, setHeight, setWidth, setLeft, setRight, right}) => {
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
        if (r < 0) {
            r = 0
        }
        setWidth(r)
    }

    const changeRight = (write) => {
        let title = write.target.value
        let num = Number(title)
        setRight(num)
        let r = num + left
        if (r < 0) {
            r = 0
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
                        padding: "0.5rem",
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

                <rect x="-0.5" y="0.5" width="129" height="139" transform="matrix(-1 0 0 1 153 1)" fill="white"
                      stroke="black"/>
                <rect x="-0.5" y="0.5" width="119" height="129" transform="matrix(-1 0 0 1 148 6)" fill="white"
                      stroke="black"/>
                <path d="M87.25 6.25H90.75V135.75H87.25V6.25Z" fill="white" stroke="black" strokeWidth="0.5"/>
                <rect x="-0.5" y="0.5" width="44" height="115" transform="matrix(-1 0 0 1 80 13)" fill="#C9F8FF"
                      stroke="black"/>
                <rect x="82.1" y="65.1" width="3.8" height="7.8" fill="white" stroke="black" strokeWidth="0.2"/>
                <rect x="83.12" y="69.12" width="1.76" height="7.76" fill="white" stroke="black" strokeWidth="0.24"/>
                <rect x="92.1" y="65.1" width="3.8" height="7.8" fill="white" stroke="black" strokeWidth="0.2"/>
                <rect x="93.12" y="69.12" width="1.76" height="7.76" fill="white" stroke="black" strokeWidth="0.24"/>
                <rect x="-0.5" y="0.5" width="44" height="115" transform="matrix(-1 0 0 1 141 13)" fill="#C9F8FF"
                      stroke="black"/>
                <path d="M153 2L150.75 4.25L148.5 6.5" stroke="black" strokeLinecap="round"/>
                <path d="M153 140L151 138L148.5 135.5" stroke="black" strokeLinecap="round"/>
                <path d="M148 135L145 132L141.5 128.5" stroke="black" strokeLinecap="round"/>
                <path d="M36.5 13.5L33.5 10.5L29.8658 7" stroke="black" strokeLinecap="round"/>
                <path d="M97.5 13.5L94.5 10.5L91 7" stroke="black" strokeLinecap="round"/>
                <path d="M29.5 6.5L27.5 4.5L25 2" stroke="black" strokeLinecap="round"/>
                <path d="M87 135L84 132L80.5 128.5" stroke="black" strokeLinecap="round"/>
                <path d="M148 7L141.5 13.5" stroke="black" strokeLinecap="round"/>
                <path d="M87 7L80.5 13.5" stroke="black" strokeLinecap="round"/>
                <path d="M36.5 128.5L30 135" stroke="black" strokeLinecap="round"/>
                <path d="M80 71L37 128" stroke="black" strokeLinecap="round"/>
                <path d="M141 14L98 71" stroke="black" strokeLinecap="round"/>
                <path d="M141 128L98 71" stroke="black" strokeLinecap="round"/>
                <path d="M80 71L37 14" stroke="black" strokeLinecap="round"/>
                <path d="M97.5 128.5L91 135" stroke="black" strokeLinecap="round"/>
                <path d="M29.5 135.5L25 140" stroke="black" strokeLinecap="round"/>
                <path d="M58 14L37 128" stroke="black" strokeLinecap="round"/>
                <path d="M58.0001 14L80 128" stroke="black" strokeLinecap="round"/>
                <path
                    d="M4.35355 141.357C4.15829 141.552 3.84171 141.552 3.64645 141.357L0.464466 138.175C0.269204 137.98 0.269204 137.663 0.464466 137.468C0.659728 137.273 0.976311 137.273 1.17157 137.468L4 140.296L6.82843 137.468C7.02369 137.273 7.34027 137.273 7.53553 137.468C7.7308 137.663 7.7308 137.98 7.53553 138.175L4.35355 141.357ZM3.64645 0.646454C3.84171 0.451187 4.15829 0.451187 4.35355 0.646454L7.53553 3.82843C7.7308 4.0237 7.7308 4.34027 7.53553 4.53554C7.34027 4.73079 7.02369 4.73079 6.82843 4.53554L4 1.70711L1.17157 4.53554C0.976311 4.73079 0.659728 4.73079 0.464466 4.53554C0.269204 4.34027 0.269204 4.0237 0.464466 3.82843L3.64645 0.646454ZM3.5 141.004L3.5 1H4.5L4.5 141.004H3.5Z"
                    fill="black"/>
                <path
                    d="M154.354 180.646C154.549 180.842 154.549 181.158 154.354 181.354L151.172 184.536C150.976 184.731 150.66 184.731 150.464 184.536C150.269 184.34 150.269 184.024 150.464 183.828L153.293 181L150.464 178.172C150.269 177.976 150.269 177.66 150.464 177.464C150.66 177.269 150.976 177.269 151.172 177.464L154.354 180.646ZM23.6465 181.354C23.4512 181.158 23.4512 180.842 23.6465 180.646L26.8284 177.464C27.0237 177.269 27.3403 177.269 27.5355 177.464C27.7308 177.66 27.7308 177.976 27.5355 178.172L24.7071 181L27.5355 183.828C27.7308 184.024 27.7308 184.34 27.5355 184.536C27.3403 184.731 27.0237 184.731 26.8284 184.536L23.6465 181.354ZM154 181.5H24V180.5H154V181.5Z"
                    fill="black"/>
                <path
                    d="M154.354 161.354C154.549 161.158 154.549 160.842 154.354 160.646L151.172 157.464C150.976 157.269 150.66 157.269 150.464 157.464C150.269 157.66 150.269 157.976 150.464 158.172L153.293 161L150.464 163.828C150.269 164.024 150.269 164.34 150.464 164.536C150.66 164.731 150.976 164.731 151.172 164.536L154.354 161.354ZM88.6464 160.646C88.4512 160.842 88.4512 161.158 88.6464 161.354L91.8284 164.536C92.0237 164.731 92.3403 164.731 92.5355 164.536C92.7308 164.34 92.7308 164.024 92.5355 163.828L89.7071 161L92.5355 158.172C92.7308 157.976 92.7308 157.66 92.5355 157.464C92.3403 157.269 92.0237 157.269 91.8284 157.464L88.6464 160.646ZM154 160.5H89V161.5H154V160.5Z"
                    fill="black"/>
                <path
                    d="M89.3536 161.354C89.5488 161.158 89.5488 160.842 89.3536 160.646L86.1716 157.464C85.9763 157.269 85.6597 157.269 85.4645 157.464C85.2692 157.66 85.2692 157.976 85.4645 158.172L88.2929 161L85.4645 163.828C85.2692 164.024 85.2692 164.34 85.4645 164.536C85.6597 164.731 85.9763 164.731 86.1716 164.536L89.3536 161.354ZM23.6464 160.646C23.4512 160.842 23.4512 161.158 23.6464 161.354L26.8284 164.536C27.0237 164.731 27.3403 164.731 27.5355 164.536C27.7308 164.34 27.7308 164.024 27.5355 163.828L24.7071 161L27.5355 158.172C27.7308 157.976 27.7308 157.66 27.5355 157.464C27.3403 157.269 27.0237 157.269 26.8284 157.464L23.6464 160.646ZM89 160.5H24V161.5H89V160.5Z"
                    fill="black"/>
            </svg>
        </div>
    );
};

export default CShtulpovoeWindowLeftMain;
