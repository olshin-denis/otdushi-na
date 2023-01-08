import React from 'react';

const BlindWindow = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.245)"
        }}>
            <svg width="100%" height="100%" viewBox="0 0 130 140" fill="none">
                <rect x="0.5" y="0.5" width="129" height="139" fill="white" stroke="black"/>
                <rect x="5.5" y="5.5" width="119" height="129" fill="#C9F8FF" stroke="black"/>
                <path d="M0.704203 0.935982L5.5 5.5" stroke="black" strokeLinecap="round"/>
                <path d="M124.5 134.5L129 139" stroke="black" strokeLinecap="round"/>
                <path d="M129 1L124.5 5.5" stroke="black" strokeLinecap="round"/>
                <path d="M5.5 134.5L1 139" stroke="black" strokeLinecap="round"/>
            </svg>

            {/*Глухое Окно*/}
        </div>
    );
};

export default BlindWindow;
