import React from 'react';
import classes from "../../../window/window.module.scss";

const CThreeLeafWindow = ({width, left, right, setRight, height, setHeight, setWidth, center, setCenter, setLeft}) => {

    const writeHeight = (write) => {
        let title = write.target.value
        let num = Number(title)
        setHeight(num)
    }

    const writeWidth = (write) => {
        let title = write.target.value
        let num = Number(title);
        let r = ((num * 33.75)/100);
        let l = ((num * 33.75)/100);
        let c = num - (r+l);
        setWidth(num)
        setRight(r)
        setLeft(l)
        setCenter(c)
    }

    const changeLeft = (write) => {
        let title = write.target.value
        let num = Number(title)
        setLeft(num)
        let r = num + right + center
        // console.log(num)
        setWidth(r)
    }

    const changeRight = (write) => {
        let title = write.target.value
        let num = Number(title)
        setRight(num)
        let r = num + left + center
        setWidth(r)
    }

    const changeCenter = (write) =>{
        let title = write.target.value
        let num = Number(title)
        setCenter(num)
        let r = num + left + right
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
            <svg width="100%" height="100%" viewBox="0 0 225 185" fill="none" style={{
                width: "100%",
                height: "100%"
            }}
            >

                <foreignObject x={"91.5%"} y={"32%"} width={"0.9rem"} height={"2rem"}>
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

                <foreignObject x={"31%"} y={"91.5%"} width={"5rem"} height={"0.7rem"}>
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

                <foreignObject x={"1%"} y={"80%"} width={"5rem"} height={"0.7rem"}>
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

                <foreignObject x={"63.5%"} y={"80%"} width={"5rem"} height={"0.7rem"}>
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

                <foreignObject x={"32.5%"} y={"80%"} width={"5rem"} height={"0.7rem"}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <input
                            className={`${classes.number}`}
                            onChange={changeCenter}
                            // min={20} max={300}
                            type="number"
                            value={center}
                            style={{fontSize: "0.8rem", width: "2rem", height: "0.7rem"}}/>
                    </div>
                </foreignObject>

                <rect x="1.5" y="1.5" width="199" height="139" fill="white" stroke="black"/>
                <rect x="6.5" y="6.5" width="189" height="129" fill="white" stroke="black"/>
                <rect x="57.5" y="6.5" width="4" height="129" fill="white" stroke="black"/>
                <rect x="140.5" y="6.5" width="4" height="129" fill="white" stroke="black"/>
                <rect x="7" y="7" width="50" height="128" fill="#C9F8FF"/>
                <rect x="145" y="7" width="50" height="128" fill="#C9F8FF"/>
                <rect x="68.5" y="13.5" width="65" height="115" fill="#C9F8FF" stroke="black"/>
                <rect x="63.1" y="65.1" width="3.8" height="7.8" fill="white" stroke="black" strokeWidth="0.2"/>
                <rect x="64.12" y="69.12" width="1.76" height="7.76" fill="white" stroke="black" strokeWidth="0.24"/>
                <path d="M2 2L6.5 6.5" stroke="black" strokeLinecap="round"/>
                <path d="M195.5 135.5L200 140" stroke="black" strokeLinecap="round"/>
                <path d="M133.5 128.5L140 135" stroke="black" strokeLinecap="round"/>
                <path d="M62 7L68.5 13.5" stroke="black" strokeLinecap="round"/>
                <path d="M68.5 128.5L62 135" stroke="black" strokeLinecap="round"/>
                <path d="M140 7L133.5 13.5" stroke="black" strokeLinecap="round"/>
                <path d="M133 14L69 71" stroke="black" strokeLinecap="round"/>
                <path d="M133 128L69 71" stroke="black" strokeLinecap="round"/>
                <path d="M133 128L100.5 14" stroke="black" strokeLinecap="round"/>
                <path d="M69 128L100.5 14" stroke="black" strokeLinecap="round"/>
                <path d="M6.5 135.5L2 140" stroke="black" strokeLinecap="round"/>
                <path d="M200 2L195.5 6.5" stroke="black" strokeLinecap="round"/>
                <path
                    d="M220.646 141.357C220.842 141.552 221.158 141.552 221.354 141.357L224.536 138.175C224.731 137.98 224.731 137.663 224.536 137.468C224.34 137.273 224.024 137.273 223.828 137.468L221 140.296L218.172 137.468C217.976 137.273 217.66 137.273 217.464 137.468C217.269 137.663 217.269 137.98 217.464 138.175L220.646 141.357ZM221.354 0.646454C221.158 0.451187 220.842 0.451187 220.646 0.646454L217.464 3.82843C217.269 4.0237 217.269 4.34027 217.464 4.53554C217.66 4.73079 217.976 4.73079 218.172 4.53554L221 1.70711L223.828 4.53554C224.024 4.73079 224.34 4.73079 224.536 4.53554C224.731 4.34027 224.731 4.0237 224.536 3.82843L221.354 0.646454ZM221.5 141.004L221.5 1H220.5L220.5 141.004H221.5Z"
                    fill="black"/>
                <path
                    d="M0.646447 180.646C0.451184 180.842 0.451184 181.158 0.646447 181.354L3.82843 184.536C4.02369 184.731 4.34027 184.731 4.53553 184.536C4.7308 184.34 4.7308 184.024 4.53553 183.828L1.70711 181L4.53553 178.172C4.7308 177.976 4.7308 177.66 4.53553 177.464C4.34027 177.269 4.02369 177.269 3.82843 177.464L0.646447 180.646ZM201.354 181.354C201.549 181.158 201.549 180.842 201.354 180.646L198.172 177.464C197.976 177.269 197.66 177.269 197.464 177.464C197.269 177.66 197.269 177.976 197.464 178.172L200.293 181L197.464 183.828C197.269 184.024 197.269 184.34 197.464 184.536C197.66 184.731 197.976 184.731 198.172 184.536L201.354 181.354ZM1 181.5H201V180.5H1V181.5Z"
                    fill="black"/>
                <path
                    d="M0.646447 160.646C0.451184 160.842 0.451184 161.158 0.646447 161.354L3.82843 164.536C4.02369 164.731 4.34027 164.731 4.53553 164.536C4.7308 164.34 4.7308 164.024 4.53553 163.828L1.70711 161L4.53553 158.172C4.7308 157.976 4.7308 157.66 4.53553 157.464C4.34027 157.269 4.02369 157.269 3.82843 157.464L0.646447 160.646ZM60.3535 161.354C60.5488 161.158 60.5488 160.842 60.3535 160.646L57.1716 157.464C56.9763 157.269 56.6597 157.269 56.4645 157.464C56.2692 157.66 56.2692 157.976 56.4645 158.172L59.2929 161L56.4645 163.828C56.2692 164.024 56.2692 164.34 56.4645 164.536C56.6597 164.731 56.9763 164.731 57.1716 164.536L60.3535 161.354ZM1 161.5L60 161.5V160.5L1 160.5L1 161.5Z"
                    fill="black"/>
                <path
                    d="M142.646 160.646C142.451 160.842 142.451 161.158 142.646 161.354L145.828 164.536C146.024 164.731 146.34 164.731 146.536 164.536C146.731 164.34 146.731 164.024 146.536 163.828L143.707 161L146.536 158.172C146.731 157.976 146.731 157.66 146.536 157.464C146.34 157.269 146.024 157.269 145.828 157.464L142.646 160.646ZM201.354 161.354C201.549 161.158 201.549 160.842 201.354 160.646L198.172 157.464C197.976 157.269 197.66 157.269 197.464 157.464C197.269 157.66 197.269 157.976 197.464 158.172L200.293 161L197.464 163.828C197.269 164.024 197.269 164.34 197.464 164.536C197.66 164.731 197.976 164.731 198.172 164.536L201.354 161.354ZM143 161.5H201V160.5H143V161.5Z"
                    fill="black"/>
                <path
                    d="M59.6464 160.646C59.4512 160.842 59.4512 161.158 59.6464 161.354L62.8284 164.536C63.0237 164.731 63.3403 164.731 63.5355 164.536C63.7308 164.34 63.7308 164.024 63.5355 163.828L60.7071 161L63.5355 158.172C63.7308 157.976 63.7308 157.66 63.5355 157.464C63.3403 157.269 63.0237 157.269 62.8284 157.464L59.6464 160.646ZM143.354 161.354C143.549 161.158 143.549 160.842 143.354 160.646L140.172 157.464C139.976 157.269 139.66 157.269 139.464 157.464C139.269 157.66 139.269 157.976 139.464 158.172L142.293 161L139.464 163.828C139.269 164.024 139.269 164.34 139.464 164.536C139.66 164.731 139.976 164.731 140.172 164.536L143.354 161.354ZM60 161.5L143 161.5V160.5L60 160.5V161.5Z"
                    fill="black"/>
            </svg>

        </div>
    );
};

export default CThreeLeafWindow;
