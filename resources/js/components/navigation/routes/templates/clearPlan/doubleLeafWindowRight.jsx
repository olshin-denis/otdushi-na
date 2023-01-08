import React from 'react';

const DoubleLeafWindowRight = () => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection:"column",
            maxWidth:"100%",
            height:"100%",
            backgroundColor: "rgba(0, 0, 0, 0.245)"
        }}>
            <svg version="1.1"
                 baseProfile="full"
                 width={`100%`} height={`100%`}
                 viewBox={`0 0 130 140`}
                 // style={{border: "1px solid black"}}
            >
                    <rect x="0.5" y="0.5" width="129" height="139" fill="white" stroke="black"/>
                    <rect x="5.5" y="5.5" width="119" height="129" fill="white" stroke="black"/>
                    <rect x="57.5" y="5.5" width="4" height="129" fill="white" stroke="black"/>
                    <rect x="68.75" y="12.75" width="48.5" height="114.5" fill="#C9F8FF" stroke="black" strokeWidth="1.5"/>
                    <rect x="6" y="6" width="51" height="128" fill="#C9F8FF"/>
                    <rect x="63.1" y="64.1" width="3.8" height="7.8" fill="white" stroke="black" strokeWidth="0.2"/>
                    <rect x="64.12" y="68.12" width="1.76" height="7.76" fill="white" stroke="black" strokeWidth="0.24"/>
                    <path d="M116.5 13.5L69 70" stroke="black" strokeLinecap="round"/>
                    <path d="M117 127L69 70" stroke="black" strokeLinecap="round"/>
                    <path d="M69 127L92.5 13" stroke="black" strokeLinecap="round"/>
                    <path d="M117 127L92.5 13" stroke="black" strokeLinecap="round"/>
                    <path d="M1 1L5.5 5.5" stroke="black" strokeLinecap="round"/>
                    <path d="M124.5 134.5L129 139" stroke="black" strokeLinecap="round"/>
                    <path d="M117.5 127.5L124 134" stroke="black" strokeLinecap="round"/>
                    <path d="M62 6L68.5 12.5" stroke="black" strokeLinecap="round"/>
                    <path d="M1 139L5.5 134.5" stroke="black" strokeLinecap="round"/>
                    <path d="M124.5 5.5L129 1" stroke="black" strokeLinecap="round"/>
                    <path d="M62 134L68.5 127.5" stroke="black" strokeLinecap="round"/>
                    <path d="M117.5 12.5L124 6" stroke="black" strokeLinecap="round"/>
                </svg>
        </div>
    );
};

export default DoubleLeafWindowRight;
