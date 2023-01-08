import React from 'react';
import classes from "../../../window/window.module.scss";

const CSingleLeafWindow = ({setHeight, setWidth, height, width}) => {

    const writeHeight = (write) => {
        let title = write.target.value
        setHeight(title)
    }

    const writeWidth = (write) => {
        let title = write.target.value
        setWidth(title)
    }
    return (
        <div style={{display: "flex", flexDirection:"column", alignItems: "center", justifyContent: "center", width:"100%", height:"100%"}}>
            <svg width="100%" height="100%" viewBox="0 0 115 165" fill="none" style={{
                width: "100%",
                height: "100%"
            }}
            >

                <foreignObject x={"88%"} y={"28%"} width={"0.55rem"} height={"5rem"}>
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

                <foreignObject x={"34%"} y={"89%"} width={"2rem"} height={"1rem"}>
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

                <rect x="1.5" y="1.5" width="89" height="139" fill="white" stroke="black"/>
                <rect x="6.5" y="6.5" width="79" height="129" fill="white" stroke="black"/>
                <rect x="13.75" y="13.75" width="64.5" height="114.5" fill="#C9F8FF" stroke="black" strokeWidth="1.5"/>
                <rect x="8.1" y="65.1" width="3.8" height="7.8" fill="white" stroke="black" strokeWidth="0.2"/>
                <rect x="9.12" y="69.12" width="1.76" height="7.76" fill="white" stroke="black" strokeWidth="0.24"/>
                <path d="M14 128L46 14" stroke="black" strokeLinecap="round"/>
                <path d="M78 128L46 14" stroke="black" strokeLinecap="round"/>
                <path d="M78 128L14 71.5" stroke="black" strokeLinecap="round"/>
                <path d="M78 14L14 71.5" stroke="black" strokeLinecap="round"/>
                <path d="M7 7L13.5 13.5" stroke="black" strokeLinecap="round"/>
                <path d="M85 7L78.5 13.5" stroke="black" strokeLinecap="round"/>
                <path d="M90 2L85.5 6.5" stroke="black" strokeLinecap="round"/>
                <path d="M6.5 135.5L2 140" stroke="black" strokeLinecap="round"/>
                <path d="M13.5 128.5L7 135" stroke="black" strokeLinecap="round"/>
                <path d="M2 2L6.5 6.5" stroke="black" strokeLinecap="round"/>
                <path d="M85.5 135.5L90 140" stroke="black" strokeLinecap="round"/>
                <path d="M78.5 128.5L85 135" stroke="black" strokeLinecap="round"/>
                <path d="M110.646 141.354C110.842 141.549 111.158 141.549 111.354 141.354L114.536 138.172C114.731 137.976 114.731 137.66 114.536 137.464C114.34 137.269 114.024 137.269 113.828 137.464L111 140.293L108.172 137.464C107.976 137.269 107.66 137.269 107.464 137.464C107.269 137.66 107.269 137.976 107.464 138.172L110.646 141.354ZM111.354 0.646455C111.158 0.451193 110.842 0.451193 110.646 0.646455L107.464 3.82844C107.269 4.0237 107.269 4.34028 107.464 4.53554C107.66 4.7308 107.976 4.7308 108.172 4.53554L111 1.70712L113.828 4.53554C114.024 4.7308 114.34 4.7308 114.536 4.53554C114.731 4.34028 114.731 4.0237 114.536 3.82844L111.354 0.646455ZM111.5 141L111.5 1.00001H110.5L110.5 141H111.5Z" fill="black"/>
                <path d="M0.646447 160.646C0.451184 160.842 0.451184 161.158 0.646447 161.354L3.82843 164.536C4.02369 164.731 4.34027 164.731 4.53553 164.536C4.7308 164.34 4.7308 164.024 4.53553 163.828L1.70711 161L4.53553 158.172C4.7308 157.976 4.7308 157.66 4.53553 157.464C4.34027 157.269 4.02369 157.269 3.82843 157.464L0.646447 160.646ZM91.3546 161.354C91.5499 161.158 91.5499 160.842 91.3546 160.646L88.1726 157.464C87.9774 157.269 87.6608 157.269 87.4655 157.464C87.2703 157.66 87.2703 157.976 87.4655 158.172L90.294 161L87.4655 163.828C87.2703 164.024 87.2703 164.34 87.4655 164.536C87.6608 164.731 87.9774 164.731 88.1726 164.536L91.3546 161.354ZM1 161.5H91.0011V160.5H1V161.5Z" fill="black"/>
            </svg>

        </div>
    );
};

export default CSingleLeafWindow;
