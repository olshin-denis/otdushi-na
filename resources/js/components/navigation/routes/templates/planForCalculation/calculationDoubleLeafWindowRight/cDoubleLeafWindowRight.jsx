import React from 'react';
import classes from "../../../window/window.module.scss";

const CDoubleLeafWindowRight = ({width, height, setHeight, setWidth, left, setLeft, setRight, right}) => {
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

                <foreignObject x={"91%"} y={"25%"} width={"0.55rem"} height={"5rem"}>
                    <div style={{
                        transform: "rotate(270deg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
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

                <foreignObject x={"22%"} y={"91.5%"} width={"5rem"} height={"0.7rem"}>
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

                <foreignObject x={"2%"} y={"80%"} width={"5rem"} height={"0.7rem"}>
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

                <foreignObject x={"43%"} y={"80%"} width={"5rem"} height={"0.7rem"}>
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
                <rect x="1.5" y="1.5" width="129" height="139" fill="white" stroke="black"/>
                <rect x="6.5" y="6.5" width="119" height="129" fill="white" stroke="black"/>
                <rect x="58.5" y="6.5" width="4" height="129" fill="white" stroke="black"/>
                <rect x="69.75" y="13.75" width="48.5" height="114.5" fill="#C9F8FF" stroke="black" strokeWidth="1.5"/>
                <rect x="7" y="7" width="51" height="128" fill="#C9F8FF"/>
                <rect x="64.1" y="65.1" width="3.8" height="7.8" fill="white" stroke="black" strokeWidth="0.2"/>
                <rect x="65.12" y="69.12" width="1.76" height="7.76" fill="white" stroke="black" strokeWidth="0.24"/>
                <path d="M117.5 14.5L70 71" stroke="black" strokeLinecap="round"/>
                <path d="M118 128L70 71" stroke="black" strokeLinecap="round"/>
                <path d="M70 128L93.5 14" stroke="black" strokeLinecap="round"/>
                <path d="M118 128L93.5 14" stroke="black" strokeLinecap="round"/>
                <path d="M2 2L6.5 6.5" stroke="black" strokeLinecap="round"/>
                <path d="M125.5 135.5L130 140" stroke="black" strokeLinecap="round"/>
                <path d="M118.5 128.5L125 135" stroke="black" strokeLinecap="round"/>
                <path d="M63 7L69.5 13.5" stroke="black" strokeLinecap="round"/>
                <path d="M2 140L6.5 135.5" stroke="black" strokeLinecap="round"/>
                <path d="M125.5 6.5L130 2" stroke="black" strokeLinecap="round"/>
                <path d="M63 135L69.5 128.5" stroke="black" strokeLinecap="round"/>
                <path d="M118.5 13.5L125 7" stroke="black" strokeLinecap="round"/>
                <rect x="1.5" y="1.5" width="129" height="139" fill="white" stroke="black"/>
                <rect x="6.5" y="6.5" width="119" height="129" fill="white" stroke="black"/>
                <rect x="58.5" y="6.5" width="4" height="129" fill="white" stroke="black"/>
                <rect x="69.75" y="13.75" width="48.5" height="114.5" fill="#C9F8FF" stroke="black" strokeWidth="1.5"/>
                <rect x="7" y="7" width="51" height="128" fill="#C9F8FF"/>
                <rect x="64.1" y="65.1" width="3.8" height="7.8" fill="white" stroke="black" strokeWidth="0.2"/>
                <rect x="65.12" y="69.12" width="1.76" height="7.76" fill="white" stroke="black" strokeWidth="0.24"/>
                <path d="M117.5 14.5L70 71" stroke="black" strokeLinecap="round"/>
                <path d="M118 128L70 71" stroke="black" strokeLinecap="round"/>
                <path d="M70 128L93.5 14" stroke="black" strokeLinecap="round"/>
                <path d="M118 128L93.5 14" stroke="black" strokeLinecap="round"/>
                <path d="M2 2L6.5 6.5" stroke="black" strokeLinecap="round"/>
                <path d="M125.5 135.5L130 140" stroke="black" strokeLinecap="round"/>
                <path d="M118.5 128.5L125 135" stroke="black" strokeLinecap="round"/>
                <path d="M63 7L69.5 13.5" stroke="black" strokeLinecap="round"/>
                <path d="M2 140L6.5 135.5" stroke="black" strokeLinecap="round"/>
                <path d="M125.5 6.5L130 2" stroke="black" strokeLinecap="round"/>
                <path d="M63 135L69.5 128.5" stroke="black" strokeLinecap="round"/>
                <path d="M118.5 13.5L125 7" stroke="black" strokeLinecap="round"/>
                <path
                    d="M150.646 141.354C150.842 141.549 151.158 141.549 151.354 141.354L154.536 138.172C154.731 137.976 154.731 137.66 154.536 137.464C154.34 137.269 154.024 137.269 153.828 137.464L151 140.293L148.172 137.464C147.976 137.269 147.66 137.269 147.464 137.464C147.269 137.66 147.269 137.976 147.464 138.172L150.646 141.354ZM151.354 0.646454C151.158 0.451187 150.842 0.451187 150.646 0.646454L147.464 3.82843C147.269 4.0237 147.269 4.34027 147.464 4.53554C147.66 4.73079 147.976 4.73079 148.172 4.53554L151 1.70711L153.828 4.53554C154.024 4.73079 154.34 4.73079 154.536 4.53554C154.731 4.34027 154.731 4.0237 154.536 3.82843L151.354 0.646454ZM151.5 141L151.5 1H150.5L150.5 141H151.5Z"
                    fill="black"/>
                <path
                    d="M0.644524 180.646C0.449261 180.842 0.449261 181.158 0.644524 181.354L3.8265 184.536C4.02177 184.731 4.33835 184.731 4.53361 184.536C4.72887 184.34 4.72887 184.024 4.53361 183.828L1.70518 181L4.53361 178.172C4.72887 177.976 4.72887 177.66 4.53361 177.464C4.33835 177.269 4.02177 177.269 3.8265 177.464L0.644524 180.646ZM131.355 181.354C131.551 181.158 131.551 180.842 131.355 180.646L128.173 177.464C127.978 177.269 127.662 177.269 127.466 177.464C127.271 177.66 127.271 177.976 127.466 178.172L130.295 181L127.466 183.828C127.271 184.024 127.271 184.34 127.466 184.536C127.662 184.731 127.978 184.731 128.173 184.536L131.355 181.354ZM0.998077 181.5H131.002V180.5H0.998077V181.5Z"
                    fill="black"/>
                <path
                    d="M0.646447 160.646C0.451184 160.842 0.451184 161.158 0.646447 161.354L3.82843 164.536C4.02369 164.731 4.34027 164.731 4.53553 164.536C4.7308 164.34 4.7308 164.024 4.53553 163.828L1.70711 161L4.53553 158.172C4.7308 157.976 4.7308 157.66 4.53553 157.464C4.34027 157.269 4.02369 157.269 3.82843 157.464L0.646447 160.646ZM61.3536 161.354C61.5488 161.158 61.5488 160.842 61.3536 160.646L58.1716 157.464C57.9763 157.269 57.6597 157.269 57.4645 157.464C57.2692 157.66 57.2692 157.976 57.4645 158.172L60.2929 161L57.4645 163.828C57.2692 164.024 57.2692 164.34 57.4645 164.536C57.6597 164.731 57.9763 164.731 58.1716 164.536L61.3536 161.354ZM1 161.5L61 161.5V160.5L1 160.5L1 161.5Z"
                    fill="black"/>
                <path
                    d="M60.6464 160.646C60.4512 160.842 60.4512 161.158 60.6464 161.354L63.8284 164.536C64.0237 164.731 64.3403 164.731 64.5355 164.536C64.7308 164.34 64.7308 164.024 64.5355 163.828L61.7071 161L64.5355 158.172C64.7308 157.976 64.7308 157.66 64.5355 157.464C64.3403 157.269 64.0237 157.269 63.8284 157.464L60.6464 160.646ZM131.354 161.354C131.549 161.158 131.549 160.842 131.354 160.646L128.172 157.464C127.976 157.269 127.66 157.269 127.464 157.464C127.269 157.66 127.269 157.976 127.464 158.172L130.293 161L127.464 163.828C127.269 164.024 127.269 164.34 127.464 164.536C127.66 164.731 127.976 164.731 128.172 164.536L131.354 161.354ZM61 161.5L131 161.5V160.5L61 160.5V161.5Z"
                    fill="black"/>
            </svg>

        </div>
    );
};

export default CDoubleLeafWindowRight;
