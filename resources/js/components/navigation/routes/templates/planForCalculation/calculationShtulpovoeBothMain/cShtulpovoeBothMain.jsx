import React from 'react';
import classes from "../../../window/window.module.scss";

const CShtulpovoeBothMain = ({width, height, setHeight, setWidth, left, setLeft, setRight, right}) => {
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

                <foreignObject x={"89%"} y={"28%"} width={"0.9rem"} height={"2rem"}>
                    <div style={{
                        transform: "rotate(270deg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: "1rem",
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

                <foreignObject x={"23%"} y={"91.5%"} width={"5rem"} height={"0.7rem"}>
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

                <foreignObject x={"5%"} y={"80%"} width={"5rem"} height={"0.7rem"}>
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

                <foreignObject x={"46%"} y={"80%"} width={"5rem"} height={"0.7rem"}>
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
                <path d="M67.75 6.25H64.25V135.75H67.75V6.25Z" fill="white" stroke="black" strokeWidth="0.5"/>
                <rect x="74.5" y="13.5" width="44" height="115" fill="#C9F8FF" stroke="black"/>
                <rect x="-0.1" y="0.1" width="3.8" height="7.8" transform="matrix(-1 0 0 1 72.8 65)" fill="white" stroke="black" strokeWidth="0.2"/>
                <rect x="-0.12" y="0.12" width="1.76" height="7.76" transform="matrix(-1 0 0 1 71.76 69)" fill="white" stroke="black" strokeWidth="0.24"/>
                <rect x="-0.1" y="0.1" width="3.8" height="7.8" transform="matrix(-1 0 0 1 62.8 65)" fill="white" stroke="black" strokeWidth="0.2"/>
                <rect x="-0.12" y="0.12" width="1.76" height="7.76" transform="matrix(-1 0 0 1 61.76 69)" fill="white" stroke="black" strokeWidth="0.24"/>
                <rect x="13.5" y="13.5" width="44" height="115" fill="#C9F8FF" stroke="black"/>
                <path d="M2 2L4.25 4.25L6.5 6.5" stroke="black" strokeLinecap="round"/>
                <path d="M2 140L4 138L6.5 135.5" stroke="black" strokeLinecap="round"/>
                <path d="M7 135L10 132L13.5 128.5" stroke="black" strokeLinecap="round"/>
                <path d="M118.5 13.5L121.5 10.5L125.134 7" stroke="black" strokeLinecap="round"/>
                <path d="M57.5 13.5L60.5 10.5L64 7" stroke="black" strokeLinecap="round"/>
                <path d="M125.5 6.5L127.5 4.5L130 2" stroke="black" strokeLinecap="round"/>
                <path d="M68 135L71 132L74.5 128.5" stroke="black" strokeLinecap="round"/>
                <path d="M7 7L13.5 13.5" stroke="black" strokeLinecap="round"/>
                <path d="M68 7L74.5 13.5" stroke="black" strokeLinecap="round"/>
                <path d="M118.5 128.5L125 135" stroke="black" strokeLinecap="round"/>
                <path d="M75 71L118 128" stroke="black" strokeLinecap="round"/>
                <path d="M14 14L57 71" stroke="black" strokeLinecap="round"/>
                <path d="M14 128L57 71" stroke="black" strokeLinecap="round"/>
                <path d="M75 71L118 14" stroke="black" strokeLinecap="round"/>
                <path d="M57.5 128.5L64 135" stroke="black" strokeLinecap="round"/>
                <path d="M125.5 135.5L130 140" stroke="black" strokeLinecap="round"/>
                <path d="M97 14L118 128" stroke="black" strokeLinecap="round"/>
                <path d="M96.9999 14L75 128" stroke="black" strokeLinecap="round"/>
                <path d="M36 14L14 128" stroke="black" strokeLinecap="round"/>
                <path d="M36 14L57 128" stroke="black" strokeLinecap="round"/>
                <path d="M150.646 141.357C150.842 141.552 151.158 141.552 151.354 141.357L154.536 138.175C154.731 137.98 154.731 137.663 154.536 137.468C154.34 137.273 154.024 137.273 153.828 137.468L151 140.296L148.172 137.468C147.976 137.273 147.66 137.273 147.464 137.468C147.269 137.663 147.269 137.98 147.464 138.175L150.646 141.357ZM151.354 0.646454C151.158 0.451187 150.842 0.451187 150.646 0.646454L147.464 3.82843C147.269 4.0237 147.269 4.34027 147.464 4.53554C147.66 4.73079 147.976 4.73079 148.172 4.53554L151 1.70711L153.828 4.53554C154.024 4.73079 154.34 4.73079 154.536 4.53554C154.731 4.34027 154.731 4.0237 154.536 3.82843L151.354 0.646454ZM151.5 141.004L151.5 1H150.5L150.5 141.004H151.5Z" fill="black"/>
                <path d="M0.646447 180.646C0.451184 180.842 0.451184 181.158 0.646447 181.354L3.82843 184.536C4.02369 184.731 4.34027 184.731 4.53553 184.536C4.7308 184.34 4.7308 184.024 4.53553 183.828L1.70711 181L4.53553 178.172C4.7308 177.976 4.7308 177.66 4.53553 177.464C4.34027 177.269 4.02369 177.269 3.82843 177.464L0.646447 180.646ZM131.354 181.354C131.549 181.158 131.549 180.842 131.354 180.646L128.172 177.464C127.976 177.269 127.66 177.269 127.464 177.464C127.269 177.66 127.269 177.976 127.464 178.172L130.293 181L127.464 183.828C127.269 184.024 127.269 184.34 127.464 184.536C127.66 184.731 127.976 184.731 128.172 184.536L131.354 181.354ZM1 181.5H131V180.5H1V181.5Z" fill="black"/>
                <path d="M0.646447 159.646C0.451184 159.842 0.451184 160.158 0.646447 160.354L3.82843 163.536C4.02369 163.731 4.34027 163.731 4.53553 163.536C4.7308 163.34 4.7308 163.024 4.53553 162.828L1.70711 160L4.53553 157.172C4.7308 156.976 4.7308 156.66 4.53553 156.464C4.34027 156.269 4.02369 156.269 3.82843 156.464L0.646447 159.646ZM66.3536 160.354C66.5488 160.158 66.5488 159.842 66.3536 159.646L63.1716 156.464C62.9763 156.269 62.6597 156.269 62.4645 156.464C62.2692 156.66 62.2692 156.976 62.4645 157.172L65.2929 160L62.4645 162.828C62.2692 163.024 62.2692 163.34 62.4645 163.536C62.6597 163.731 62.9763 163.731 63.1716 163.536L66.3536 160.354ZM1 160.5L66 160.5V159.5L1 159.5L1 160.5Z" fill="black"/>
                <path d="M65.6464 159.646C65.4512 159.842 65.4512 160.158 65.6464 160.354L68.8284 163.536C69.0237 163.731 69.3403 163.731 69.5355 163.536C69.7308 163.34 69.7308 163.024 69.5355 162.828L66.7071 160L69.5355 157.172C69.7308 156.976 69.7308 156.66 69.5355 156.464C69.3403 156.269 69.0237 156.269 68.8284 156.464L65.6464 159.646ZM131.354 160.354C131.549 160.158 131.549 159.842 131.354 159.646L128.172 156.464C127.976 156.269 127.66 156.269 127.464 156.464C127.269 156.66 127.269 156.976 127.464 157.172L130.293 160L127.464 162.828C127.269 163.024 127.269 163.34 127.464 163.536C127.66 163.731 127.976 163.731 128.172 163.536L131.354 160.354ZM66 160.5L131 160.5V159.5L66 159.5V160.5Z" fill="black"/>
            </svg>

        </div>
    );
};

export default CShtulpovoeBothMain;
