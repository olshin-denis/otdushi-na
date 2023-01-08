import React from 'react';

const DoubleLeafWindowLeft = () => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            maxWidth: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.245)"
        }}>
            <svg version="1.1"
                 baseProfile="full"
                 width={`100%`} height={`100%`}
                 viewBox={`0 0 130 140`}
                // style={{border: "1px solid black"}}
            >
                <rect x="-0.5" y="0.5" width="129" height="139" transform="matrix(-1 0 0 1 129 0)" fill="white"
                      stroke="black"/>
                <rect x="-0.5" y="0.5" width="119" height="129" transform="matrix(-1 0 0 1 124 5)" fill="white"
                      stroke="black"/>
                <rect x="-0.5" y="0.5" width="4" height="129" transform="matrix(-1 0 0 1 72 5)" fill="white"
                      stroke="black"/>
                <rect x="-0.75" y="0.75" width="48.5" height="114.5" transform="matrix(-1 0 0 1 60.5 12)" fill="#C9F8FF"
                      stroke="black" strokeWidth="1.5"/>
                <rect width="51" height="128" transform="matrix(-1 0 0 1 124 6)" fill="#C9F8FF"/>
                <rect x="-0.1" y="0.1" width="3.8" height="7.8" transform="matrix(-1 0 0 1 66.8 64)" fill="white"
                      stroke="black" strokeWidth="0.2"/>
                <rect x="-0.12" y="0.12" width="1.76" height="7.76" transform="matrix(-1 0 0 1 65.76 68)" fill="white"
                      stroke="black" strokeWidth="0.24"/>
                <path d="M13 13L61 70" stroke="black" strokeLinecap="round"/>
                <path d="M13 127L61 70" stroke="black" strokeLinecap="round"/>
                <path d="M61 127L37.5 13" stroke="black" strokeLinecap="round"/>
                <path d="M13 127L37.5 13" stroke="black" strokeLinecap="round"/>
                <path d="M129 1L124.5 5.5" stroke="black" strokeLinecap="round"/>
                <path d="M5.5 134.5L1 139" stroke="black" strokeLinecap="round"/>
                <path d="M12.5 127.5L6 134" stroke="black" strokeLinecap="round"/>
                <path d="M68 6L61.5 12.5" stroke="black" strokeLinecap="round"/>
                <path d="M129 139L124.5 134.5" stroke="black" strokeLinecap="round"/>
                <path d="M5.5 5.5L1 1" stroke="black" strokeLinecap="round"/>
                <path d="M68 134L61.5 127.5" stroke="black" strokeLinecap="round"/>
                <path d="M12.5 12.5L6.05376 6.01566" stroke="black" strokeLinecap="round"/>
            </svg>
        </div>
    );
};

export default DoubleLeafWindowLeft;
