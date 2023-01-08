import React, {useEffect} from 'react';
import classes from "../../../window/window.module.scss";

const CBlindWindow = ({setHeight, setWidth, height, width}) => {

    const writeHeight = (write) => {
        let title = write.target.value
        setHeight(title)
    }

    const writeWidth = (write) => {
        let title = write.target.value
        setWidth(title)
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%"
        }}>
            <svg version="1.1"
                 baseProfile="full"
                 width={`100%`} height={`100%`}
                 viewBox={`0 0 155 165`}
                // style={{border: "1px solid black"}}
                 style={{
                     width: "100%",
                     height: "100%"
                 }}
            >

                <foreignObject x={"91%"} y={"28%"} width={"0.55rem"} height={"5rem"}>
                    <div style={{
                        transform: "rotate(270deg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        {/*12345*/}
                        <input
                            className={`${classes.number}`}
                            onChange={writeHeight}
                            min={50} max={300}
                            type="number"
                            value={height}
                            style={{fontSize: "0.8rem", width: "3rem", height: "2rem"}}/>
                    </div>
                </foreignObject>

                <foreignObject x={"39%"} y={"89%"} width={"2rem"} height={"1rem"}>
                    <div style={{
                        // transform: "rotate(270deg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        {/*12345*/}
                        <input
                            className={`${classes.number}`}
                            onChange={writeWidth}
                            min={50} max={300}
                            type="number"
                            value={width}
                            style={{fontSize: "0.8rem", width: "2rem", height: "1rem"}}/>
                    </div>
                </foreignObject>

                <path
                    d="M150.646 141.356C150.842 141.551 151.158 141.551 151.354 141.356L154.536 138.174C154.731 137.979 154.731 137.662 154.536 137.467C154.34 137.272 154.024 137.272 153.828 137.467L151 140.296L148.172 137.467C147.976 137.272 147.66 137.272 147.464 137.467C147.269 137.662 147.269 137.979 147.464 138.174L150.646 141.356ZM151.354 0.646447C151.158 0.451184 150.842 0.451184 150.646 0.646447L147.464 3.82843C147.269 4.02369 147.269 4.34027 147.464 4.53553C147.66 4.7308 147.976 4.7308 148.172 4.53553L151 1.70711L153.828 4.53553C154.024 4.7308 154.34 4.7308 154.536 4.53553C154.731 4.34027 154.731 4.02369 154.536 3.82843L151.354 0.646447ZM151.5 141.003L151.5 1H150.5L150.5 141.003H151.5Z"
                    fill="black"/>
                <path
                    d="M0.646447 160.646C0.451184 160.842 0.451184 161.158 0.646447 161.354L3.82843 164.536C4.02369 164.731 4.34027 164.731 4.53553 164.536C4.7308 164.34 4.7308 164.024 4.53553 163.828L1.70711 161L4.53553 158.172C4.7308 157.976 4.7308 157.66 4.53553 157.464C4.34027 157.269 4.02369 157.269 3.82843 157.464L0.646447 160.646ZM131.354 161.354C131.549 161.158 131.549 160.842 131.354 160.646L128.172 157.464C127.976 157.269 127.66 157.269 127.464 157.464C127.269 157.66 127.269 157.976 127.464 158.172L130.293 161L127.464 163.828C127.269 164.024 127.269 164.34 127.464 164.536C127.66 164.731 127.976 164.731 128.172 164.536L131.354 161.354ZM1 161.5H131V160.5H1V161.5Z"
                    fill="black"/>
                <rect x="1.5" y="1.5" width="129" height="139" fill="white" stroke="black"/>
                <rect x="6.5" y="6.5" width="119" height="129" fill="#C9F8FF" stroke="black"/>
                <path d="M1.7042 1.93598L6.5 6.5" stroke="black" strokeLinecap="round"/>
                <path d="M125.5 135.5L130 140" stroke="black" strokeLinecap="round"/>
                <path d="M130 2L125.5 6.5" stroke="black" strokeLinecap="round"/>
                <path d="M6.5 135.5L2 140" stroke="black" strokeLinecap="round"/>
            </svg>
            {/*Глухое Окно*/}
        </div>
    );
};

export default CBlindWindow;
