import React from 'react';

const ThreeLeafWindow = () => {
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
                 viewBox={`0 0 200 140`}
                 // style={{border: "1px solid black"}}
            >
                    <rect x="0.5" y="0.5" width="199" height="139" fill="white" stroke="black"/>
                    <rect x="5.5" y="5.5" width="189" height="129" fill="white" stroke="black"/>
                    <rect x="56.5" y="5.5" width="4" height="129" fill="white" stroke="black"/>
                    <rect x="139.5" y="5.5" width="4" height="129" fill="white" stroke="black"/>
                    <rect x="6" y="6" width="50" height="128" fill="#C9F8FF"/>
                    <rect x="144" y="6" width="50" height="128" fill="#C9F8FF"/>
                    <rect x="67.5" y="12.5" width="65" height="115" fill="#C9F8FF" stroke="black"/>
                    <rect x="62.1" y="64.1" width="3.8" height="7.8" fill="white" stroke="black" strokeWidth="0.2"/>
                    <rect x="63.12" y="68.12" width="1.76" height="7.76" fill="white" stroke="black" strokeWidth="0.24"/>
                    <path d="M1 1L5.5 5.5" stroke="black" strokeLinecap="round"/>
                    <path d="M194.5 134.5L199 139" stroke="black" strokeLinecap="round"/>
                    <path d="M132.5 127.5L139 134" stroke="black" strokeLinecap="round"/>
                    <path d="M61 6L67.5 12.5" stroke="black" strokeLinecap="round"/>
                    <path d="M67.5 127.5L61 134" stroke="black" strokeLinecap="round"/>
                    <path d="M139 6L132.5 12.5" stroke="black" strokeLinecap="round"/>
                    <path d="M132 13L68 70" stroke="black" strokeLinecap="round"/>
                    <path d="M132 127L68 70" stroke="black" strokeLinecap="round"/>
                    <path d="M132 127L99.5 13" stroke="black" strokeLinecap="round"/>
                    <path d="M68 127L99.5 13" stroke="black" strokeLinecap="round"/>
                    <path d="M5.5 134.5L1 139" stroke="black" strokeLinecap="round"/>
                    <path d="M199 1L194.5 5.5" stroke="black" strokeLinecap="round"/>
                </svg>
        </div>
    );
};

export default ThreeLeafWindow;
