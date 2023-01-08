import React from 'react';

const DifWindow = () => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection:"column",
            maxWidth:"100%",
            height:"100%"
        }}>
            <svg width="100%" height="100%" viewBox="0 0 130 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="129" height="139" fill="white" stroke="black"/>
                <rect x="5.5" y="5.5" width="119" height="129" fill="#C9F8FF" stroke="black"/>
                <path d="M0.704203 0.935982L5.5 5.5" stroke="black" strokeLinecap="round"/>
                <path d="M124.5 134.5L129 139" stroke="black" strokeLinecap="round"/>
                <path d="M129 1L124.5 5.5" stroke="black" strokeLinecap="round"/>
                <path d="M5.5 134.5L1 139" stroke="black" strokeLinecap="round"/>
            </svg>

        </div>
    );
};

export default DifWindow;
