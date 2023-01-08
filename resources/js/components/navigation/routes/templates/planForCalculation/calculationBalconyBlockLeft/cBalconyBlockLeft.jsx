import React from 'react';
import classes from "../../../window/window.module.scss";

const CBalconyBlockLeft = ({width, setWidth, left, setLeft, wertik, setWertik, height, setHeight, setRight, right}) => {

    const writeHeight = (write) => {
        let title = write.target.value
        let num = Number(title)
        setHeight(num)
        let wer = Math.round((num * 66.6666667) / 100)
        setWertik(wer)
    }

    const writeWidth = (write) => {
        let title = write.target.value
        let num = Number(title);
        setWidth(num)
        let r = (num * 65) / 100
        let l = (num * 35) / 100
        setRight(r)
        setLeft(l)
    }

    const changeWertik = (write) => {
        let title = write.target.value
        let num = Number(title)
        let x = Math.round((num * 100) / width)
        if (x <= 67) {
            setWertik(num)
        } else {
            let s = Math.round((width * x) / 100)
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

                <foreignObject x={"2%"} y={"34%"} width={"0.9rem"} height={"2rem"}>
                    <div style={{
                        transform: "rotate(90deg)",
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

                <foreignObject x={"10%"} y={"14%"} width={"0.9rem"} height={"2rem"}>
                    <div style={{
                        transform: "rotate(90deg)",
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


                <rect x="-0.5" y="0.5" width="139" height="107" transform="matrix(-1 0 0 1 252.001 1.00119)"
                      fill="white" stroke="black"/>
                <rect x="-0.5" y="0.5" width="69" height="210" transform="matrix(-1 0 0 1 113.001 1.00119)" fill="white"
                      stroke="black"/>
                <rect x="-0.5" y="0.5" width="131" height="99" transform="matrix(-1 0 0 1 248.001 5.00119)"
                      fill="#C9F8FF" stroke="black"/>
                <rect x="-0.5" y="0.5" width="55" height="196" transform="matrix(-1 0 0 1 106.001 8.00119)" fill="white"
                      stroke="black"/>
                <rect x="-0.5" y="-0.5" width="4" height="55" transform="matrix(0 -1 -1 0 106.001 108.001)" fill="white"
                      stroke="black"/>
                <path d="M106.501 8.50119H51.5012V104.501H106.501V8.50119Z" fill="#C9F8FF" stroke="black"/>
                <path d="M252.001 2.00118L248.501 5.50118" stroke="black" strokeLinecap="round"/>
                <path d="M117.501 104.501L114.001 108.001" stroke="black" strokeLinecap="round"/>
                <path d="M248.501 104.501L252.001 108.001" stroke="black" strokeLinecap="round"/>
                <path d="M114.001 2.00118L117.501 5.50118" stroke="black" strokeLinecap="round"/>
                <path d="M106.501 8.50118L113.001 2.00119" stroke="black" strokeLinecap="round"/>
                <path d="M51.5012 8.50118L45.0012 2.00117" stroke="black" strokeLinecap="round"/>
                <path d="M51.4437 204.508L45.0012 211.001" stroke="black" strokeLinecap="round"/>
                <path d="M106.46 204.537L113.001 211.001" stroke="black" strokeLinecap="round"/>
                <path d="M79.0012 9.00129L106.001 204.001" stroke="black" strokeLinecap="round"/>
                <path d="M79.0012 9.00129L52.0012 204.001" stroke="black" strokeLinecap="round"/>
                <path d="M106.001 106.001L52.0012 204.001" stroke="black" strokeLinecap="round"/>
                <path d="M106.001 106.001L52.0012 9.00113" stroke="black" strokeLinecap="round"/>
                <rect x="-0.1" y="0.1" width="3.8" height="7.8" transform="matrix(-1 0 0 1 111.801 103.001)"
                      fill="white" stroke="black" strokeWidth="0.2"/>
                <rect x="-0.12" y="0.12" width="1.76" height="7.76" transform="matrix(-1 0 0 1 110.761 107.001)"
                      fill="white" stroke="black" strokeWidth="0.24"/>
                <path
                    d="M24.3559 109.354C24.1607 109.549 23.8441 109.549 23.6488 109.354L20.4667 106.172C20.2715 105.976 20.2714 105.66 20.4667 105.465C20.6619 105.269 20.9785 105.269 21.1738 105.465L24.0023 108.293L26.8307 105.464C27.0259 105.269 27.3425 105.269 27.5378 105.464C27.733 105.66 27.733 105.976 27.5378 106.171L24.3559 109.354ZM23.6442 0.646462C23.8394 0.451191 24.156 0.451178 24.3513 0.646431L27.5334 3.82827C27.7286 4.02353 27.7287 4.34011 27.5334 4.53538C27.3382 4.73065 27.0216 4.73067 26.8263 4.53541L23.9977 1.70711L21.1694 4.53566C20.9742 4.73093 20.6576 4.73094 20.4623 4.53569C20.2671 4.34043 20.2671 4.02385 20.4623 3.82858L23.6442 0.646462ZM23.5024 109L23.4977 1.00002L24.4977 0.999978L24.5024 109L23.5024 109Z"
                    fill="black"/>
                <path
                    d="M4.35354 212.356C4.15828 212.551 3.84169 212.551 3.64643 212.356L0.464451 209.174C0.269189 208.979 0.269189 208.662 0.464451 208.467C0.659713 208.272 0.976295 208.272 1.17156 208.467L3.99998 211.295L6.82841 208.467C7.02367 208.272 7.34026 208.272 7.53552 208.467C7.73078 208.662 7.73078 208.979 7.53552 209.174L4.35354 212.356ZM3.64643 0.646431C3.84169 0.451169 4.15828 0.451169 4.35354 0.646431L7.53552 3.82841C7.73078 4.02367 7.73078 4.34026 7.53552 4.53552C7.34026 4.73078 7.02367 4.73078 6.82841 4.53552L3.99998 1.70709L1.17156 4.53552C0.976295 4.73078 0.659713 4.73078 0.464451 4.53552C0.269189 4.34026 0.269189 4.02367 0.464451 3.82841L3.64643 0.646431ZM3.49998 212.002L3.49998 0.999985H4.49998L4.49998 212.002H3.49998Z"
                    fill="black"/>
                <path
                    d="M253.356 251.648C253.551 251.843 253.551 252.159 253.356 252.355L250.174 255.537C249.979 255.732 249.662 255.732 249.467 255.537C249.272 255.341 249.272 255.025 249.467 254.83L252.295 252.001L249.467 249.173C249.272 248.978 249.272 248.661 249.467 248.466C249.662 248.27 249.979 248.27 250.174 248.466L253.356 251.648ZM43.6464 252.355C43.4512 252.159 43.4512 251.843 43.6464 251.648L46.8284 248.466C47.0237 248.27 47.3403 248.27 47.5355 248.466C47.7308 248.661 47.7308 248.978 47.5355 249.173L44.7071 252.001L47.5355 254.83C47.7308 255.025 47.7308 255.341 47.5355 255.537C47.3403 255.732 47.0237 255.732 46.8284 255.537L43.6464 252.355ZM253.002 252.501H44V251.501H253.002V252.501Z"
                    fill="black"/>
                <path
                    d="M253.356 231.646C253.551 231.842 253.551 232.158 253.356 232.354L250.174 235.536C249.979 235.731 249.662 235.731 249.467 235.536C249.272 235.34 249.272 235.024 249.467 234.828L252.295 232L249.467 229.172C249.272 228.976 249.272 228.66 249.467 228.464C249.662 228.269 249.979 228.269 250.174 228.464L253.356 231.646ZM113.649 232.355C113.454 232.159 113.454 231.843 113.649 231.648L116.831 228.466C117.026 228.27 117.343 228.27 117.538 228.466C117.733 228.661 117.733 228.977 117.538 229.173L114.709 232.001L117.538 234.83C117.733 235.025 117.733 235.341 117.538 235.537C117.343 235.732 117.026 235.732 116.831 235.537L113.649 232.355ZM253.002 232.5L114.002 232.501L114.002 231.501L253.002 231.5L253.002 232.5Z"
                    fill="black"/>
                <path
                    d="M114.355 231.648C114.55 231.843 114.55 232.159 114.355 232.355L111.173 235.537C110.977 235.732 110.661 235.732 110.466 235.537C110.27 235.341 110.27 235.025 110.466 234.83L113.294 232.001L110.466 229.173C110.27 228.977 110.27 228.661 110.466 228.466C110.661 228.27 110.978 228.27 111.173 228.466L114.355 231.648ZM43.6488 232.354C43.4536 232.158 43.4536 231.842 43.6488 231.646L46.8309 228.464C47.0261 228.269 47.3427 228.269 47.538 228.465C47.7332 228.66 47.7332 228.976 47.538 229.172L44.7095 232L47.5379 234.828C47.7331 235.024 47.7331 235.34 47.5379 235.536C47.3426 235.731 47.026 235.731 46.8307 235.536L43.6488 232.354ZM114.001 232.501L44.0024 232.5L44.0024 231.5L114.001 231.501L114.001 232.501Z"
                    fill="black"/>
            </svg>
        </div>
    );
};

export default CBalconyBlockLeft;
