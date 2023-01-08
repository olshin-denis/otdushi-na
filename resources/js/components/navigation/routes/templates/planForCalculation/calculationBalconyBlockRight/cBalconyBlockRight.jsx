import React from 'react';
import classes from "../../../window/window.module.scss";

const CBalconyBlockRight = ({
                                width,
                                setWidth,
                                setRight,
                                left,
                                right,
                                height,
                                setHeight,
                                setLeft,
                                wertik,
                                setWertik
                            }) => {

    const writeHeight = (write) => {
        let title = write.target.value
        let num = Number(title)
        setHeight(num)
        let wer = Math.round((num * 66.6666667)/100)
        setWertik(wer)
    }

    const writeWidth = (write) => {
        let title = write.target.value
        let num = Number(title);
        setWidth(num)
        let r = (num*35)/100
        let l = (num*65)/100
        setRight(r)
        setLeft(l)
    }

    const changeWertik = (write) =>{
        let title = write.target.value
        let num = Number(title)
        let x = Math.round((num * 100)/width)
        if(x<=67){
            setWertik(num)
        }else{
            let s = Math.round((width * x)/100)
            setWertik(s)
        }
    }

    const changeLeft = (write) => {
        let title = write.target.value
        let num = Number(title)
        setLeft(num)
        let w = num + right
        setWidth(w)
    }

    const changeRight = (write) => {
        let title = write.target.value
        let num = Number(title)
        setRight(num)
        let w = num + left
        setWidth(w)
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
            <svg width="100%" height="100%" viewBox="0 0 254 256" fill="none" style={{
                width: "100%",
                height: "100%"
            }}>

                <foreignObject x={"93%"} y={"34%"} width={"0.9rem"} height={"2rem"}>
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

                <foreignObject x={"85%"} y={"14%"} width={"0.9rem"} height={"2rem"}>
                    <div style={{
                        transform: "rotate(270deg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: "1rem",
                    }}>
                        <input
                            className={`${classes.number}`}
                            onChange={changeWertik}
                            // min={20} max={300}
                            type="number"
                            value={wertik}
                            style={{fontSize: "0.8rem", width: "3rem", height: "2rem"}}/>
                    </div>
                </foreignObject>

                <foreignObject x={"28%"} y={"93.5%"} width={"5rem"} height={"0.7rem"}>
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

                <foreignObject x={"17%"} y={"86%"} width={"5rem"} height={"0.7rem"}>
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

                <foreignObject x={"57%"} y={"86%"} width={"5rem"} height={"0.7rem"}>
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

                <rect x="1.5012" y="1.50119" width="139" height="107" fill="white" stroke="black"/>
                <rect x="140.501" y="1.50119" width="69" height="210" fill="white" stroke="black"/>
                <rect x="5.5012" y="5.50119" width="131" height="99" fill="#C9F8FF" stroke="black"/>
                <rect x="147.501" y="8.50119" width="55" height="196" fill="white" stroke="black"/>
                <rect x="147.501" y="108.501" width="4" height="55" transform="rotate(-90 147.501 108.501)" fill="white"
                      stroke="black"/>
                <path d="M147.501 8.50119H202.501V104.501H147.501V8.50119Z" fill="#C9F8FF" stroke="black"/>
                <path d="M2.0012 2.00118L5.5012 5.50118" stroke="black" strokeLinecap="round"/>
                <path d="M136.501 104.501L140.001 108.001" stroke="black" strokeLinecap="round"/>
                <path d="M5.5012 104.501L2.0012 108.001" stroke="black" strokeLinecap="round"/>
                <path d="M140.001 2.00118L136.501 5.50118" stroke="black" strokeLinecap="round"/>
                <path d="M147.501 8.50118L141.001 2.00119" stroke="black" strokeLinecap="round"/>
                <path d="M202.501 8.50118L209.001 2.00117" stroke="black" strokeLinecap="round"/>
                <path d="M202.559 204.508L209.001 211.001" stroke="black" strokeLinecap="round"/>
                <path d="M147.543 204.537L141.001 211.001" stroke="black" strokeLinecap="round"/>
                <path d="M175.001 9.00129L148.001 204.001" stroke="black" strokeLinecap="round"/>
                <path d="M175.001 9.00129L202.001 204.001" stroke="black" strokeLinecap="round"/>
                <path d="M148.001 106.001L202.001 204.001" stroke="black" strokeLinecap="round"/>
                <path d="M148.001 106.001L202.001 9.00113" stroke="black" strokeLinecap="round"/>
                <rect x="142.101" y="103.101" width="3.8" height="7.8" fill="white" stroke="black" strokeWidth="0.2"/>
                <rect x="143.121" y="107.121" width="1.76" height="7.76" fill="white" stroke="black"
                      strokeWidth="0.24"/>
                <path
                    d="M229.646 109.354C229.842 109.549 230.158 109.549 230.354 109.354L233.536 106.172C233.731 105.976 233.731 105.66 233.536 105.465C233.34 105.269 233.024 105.269 232.829 105.465L230 108.293L227.172 105.464C226.976 105.269 226.66 105.269 226.465 105.464C226.269 105.66 226.269 105.976 226.465 106.171L229.646 109.354ZM230.358 0.646462C230.163 0.451191 229.846 0.451178 229.651 0.646431L226.469 3.82827C226.274 4.02353 226.274 4.34011 226.469 4.53538C226.664 4.73065 226.981 4.73067 227.176 4.53541L230.005 1.70711L232.833 4.53566C233.028 4.73093 233.345 4.73094 233.54 4.53569C233.735 4.34043 233.735 4.02385 233.54 3.82858L230.358 0.646462ZM230.5 109L230.505 1.00002L229.505 0.999978L229.5 109L230.5 109Z"
                    fill="black"/>
                <path
                    d="M249.649 212.356C249.844 212.551 250.161 212.551 250.356 212.356L253.538 209.174C253.733 208.979 253.733 208.662 253.538 208.467C253.343 208.272 253.026 208.272 252.831 208.467L250.002 211.295L247.174 208.467C246.979 208.272 246.662 208.272 246.467 208.467C246.272 208.662 246.272 208.979 246.467 209.174L249.649 212.356ZM250.356 0.646431C250.161 0.451169 249.844 0.451169 249.649 0.646431L246.467 3.82841C246.272 4.02367 246.272 4.34026 246.467 4.53552C246.662 4.73078 246.979 4.73078 247.174 4.53552L250.002 1.70709L252.831 4.53552C253.026 4.73078 253.343 4.73078 253.538 4.53552C253.733 4.34026 253.733 4.02367 253.538 3.82841L250.356 0.646431ZM250.502 212.002V0.999985H249.502V212.002H250.502Z"
                    fill="black"/>
                <path
                    d="M0.646447 251.648C0.451184 251.843 0.451184 252.159 0.646447 252.355L3.82843 255.537C4.02369 255.732 4.34027 255.732 4.53553 255.537C4.7308 255.341 4.7308 255.025 4.53553 254.83L1.70711 252.001L4.53553 249.173C4.7308 248.978 4.7308 248.661 4.53553 248.466C4.34027 248.27 4.02369 248.27 3.82843 248.466L0.646447 251.648ZM210.356 252.355C210.551 252.159 210.551 251.843 210.356 251.648L207.174 248.466C206.979 248.27 206.662 248.27 206.467 248.466C206.272 248.661 206.272 248.978 206.467 249.173L209.295 252.001L206.467 254.83C206.272 255.025 206.272 255.341 206.467 255.537C206.662 255.732 206.979 255.732 207.174 255.537L210.356 252.355ZM1 252.501H210.002V251.501H1V252.501Z"
                    fill="black"/>
                <path
                    d="M0.64645 231.646C0.451186 231.842 0.451183 232.158 0.646444 232.354L3.8284 235.536C4.02366 235.731 4.34024 235.731 4.5355 235.536C4.73077 235.34 4.73077 235.024 4.53551 234.828L1.70711 232L4.53556 229.172C4.73082 228.976 4.73082 228.66 4.53556 228.464C4.3403 228.269 4.02372 228.269 3.82846 228.464L0.64645 231.646ZM140.354 232.355C140.549 232.159 140.549 231.843 140.354 231.648L137.172 228.466C136.976 228.27 136.66 228.27 136.464 228.466C136.269 228.661 136.269 228.977 136.464 229.173L139.293 232.001L136.464 234.83C136.269 235.025 136.269 235.341 136.464 235.537C136.66 235.732 136.976 235.732 137.172 235.537L140.354 232.355ZM0.999996 232.5L140 232.501L140 231.501L1 231.5L0.999996 232.5Z"
                    fill="black"/>
                <path
                    d="M139.648 231.648C139.452 231.843 139.452 232.159 139.648 232.355L142.83 235.537C143.025 235.732 143.342 235.732 143.537 235.537C143.732 235.341 143.732 235.025 143.537 234.83L140.708 232.001L143.537 229.173C143.732 228.977 143.732 228.661 143.537 228.466C143.341 228.27 143.025 228.27 142.83 228.466L139.648 231.648ZM210.354 232.354C210.549 232.158 210.549 231.842 210.354 231.646L207.172 228.464C206.976 228.269 206.66 228.269 206.464 228.465C206.269 228.66 206.269 228.976 206.464 229.172L209.293 232L206.465 234.828C206.269 235.024 206.269 235.34 206.465 235.536C206.66 235.731 206.976 235.731 207.172 235.536L210.354 232.354ZM140.001 232.501L210 232.5L210 231.5L140.001 231.501L140.001 232.501Z"
                    fill="black"/>
            </svg>

        </div>
    );
};

export default CBalconyBlockRight;
