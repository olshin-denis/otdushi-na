import React from 'react';

const BalconyBlockRight = () => {
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
                 viewBox={`0 0 209 211`}
                // style={{border: "1px solid black"}}
            >
                    <rect x="0.5" y="0.5" width="139" height="107" fill="white" stroke="black"/>
                    <rect x="139.5" y="0.5" width="69" height="210" fill="white" stroke="black"/>
                    <rect x="4.5" y="4.5" width="131" height="99" fill="#C9F8FF" stroke="black"/>
                    <rect x="146.5" y="7.5" width="55" height="196" fill="white" stroke="black"/>
                    <rect x="146.5" y="107.5" width="4" height="55" transform="rotate(-90 146.5 107.5)" fill="white" stroke="black"/>
                    <path d="M146.5 7.5H201.5V103.5H146.5V7.5Z" fill="#C9F8FF" stroke="black"/>
                    <path d="M1 0.99999L4.5 4.49999" stroke="black" strokeLinecap="round"/>
                    <path d="M135.5 103.5L139 107" stroke="black" strokeLinecap="round"/>
                    <path d="M4.5 103.5L1 107" stroke="black" strokeLinecap="round"/>
                    <path d="M139 0.99999L135.5 4.49999" stroke="black" strokeLinecap="round"/>
                    <path d="M146.5 7.49999L140 0.999995" stroke="black" strokeLinecap="round"/>
                    <path d="M201.5 7.49999L208 0.999979" stroke="black" strokeLinecap="round"/>
                    <path d="M201.558 203.507L208 210" stroke="black" strokeLinecap="round"/>
                    <path d="M146.542 203.536L140 210" stroke="black" strokeLinecap="round"/>
                    <path d="M174 8.0001L147 203" stroke="black" strokeLinecap="round"/>
                    <path d="M174 8.0001L201 203" stroke="black" strokeLinecap="round"/>
                    <path d="M147 105L201 203" stroke="black" strokeLinecap="round"/>
                    <path d="M147 105L201 7.99994" stroke="black" strokeLinecap="round"/>
                    <rect x="141.1" y="102.1" width="3.8" height="7.8" fill="white" stroke="black" strokeWidth="0.2"/>
                    <rect x="142.12" y="106.12" width="1.76" height="7.76" fill="white" stroke="black" strokeWidth="0.24"/>
            </svg>
        </div>
    );
};

export default BalconyBlockRight;
