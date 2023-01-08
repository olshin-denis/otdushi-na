import React from 'react';

const SingleLeafWindow = () => {
    return (
        <div style={{display: "flex", flexDirection:"column", alignItems: "center", justifyContent: "center", maxWidth:"100%", height:"100%",
            backgroundColor: "rgba(0, 0, 0, 0.245)"}}>
            <svg version="1.1"
                 baseProfile="full"
                 width={`100%`} height={`100%`}
                 viewBox={`0 0 90 140`}
                 // style={{border: "1px solid black"}}
            >
                    <rect x="0.5" y="0.5" width="89" height="139" fill="white" stroke="black"/>
                    <rect x="5.5" y="5.5" width="79" height="129" fill="white" stroke="black"/>
                    <rect x="12.75" y="12.75" width="64.5" height="114.5" fill="#C9F8FF" stroke="black" strokeWidth="1.5"/>
                    <rect x="7.1" y="64.1" width="3.8" height="7.8" fill="white" stroke="black" strokeWidth="0.2"/>
                    <rect x="8.12" y="68.12" width="1.76" height="7.76" fill="white" stroke="black" strokeWidth="0.24"/>
                    <path d="M13 127L45 13" stroke="black" strokeLinecap="round"/>
                    <path d="M77 127L45 13" stroke="black" strokeLinecap="round"/>
                    <path d="M77 127L13 70.5" stroke="black" strokeLinecap="round"/>
                    <path d="M77 13L13 70.5" stroke="black" strokeLinecap="round"/>
                    <path d="M6 6L12.5 12.5" stroke="black" strokeLinecap="round"/>
                    <path d="M84 6L77.5 12.5" stroke="black" strokeLinecap="round"/>
                    <path d="M89 1L84.5 5.5" stroke="black" strokeLinecap="round"/>
                    <path d="M5.5 134.5L1 139" stroke="black" strokeLinecap="round"/>
                    <path d="M12.5 127.5L6 134" stroke="black" strokeLinecap="round"/>
                    <path d="M1 1L5.5 5.5" stroke="black" strokeLinecap="round"/>
                    <path d="M84.5 134.5L89 139" stroke="black" strokeLinecap="round"/>
                    <path d="M77.5 127.5L84 134" stroke="black" strokeLinecap="round"/>
            </svg>
        </div>
    );
};

export default SingleLeafWindow;
