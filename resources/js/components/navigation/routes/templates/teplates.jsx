import React, {useEffect, useState} from 'react';
import BlindWindow from "./clearPlan/blindWindow";
import SingleLeafWindow from "./clearPlan/singleLeafWindow";
import DoubleLeafWindowRight from "./clearPlan/doubleLeafWindowRight";
import DoubleLeafWindowLeft from "./clearPlan/doubleLeafWindowLeft";
import ThreeLeafWindow from "./threeLeafWindow";
import ShtulpovoeWindowLeftMain from "./clearPlan/shtulpovoeWindowLeftMain";
import ShtulpovoeWindowRightMain from "./clearPlan/shtulpovoeWindowRightMain";
import ShtulpovoeBothMain from "./clearPlan/shtulpovoeBothMain";
import BalconyBlockRight from "./clearPlan/balconyBlockRight";
import BalconyBlockLeft from "./clearPlan/balconyBlockLeft";

const Teplates = () => {
    const svg = {width: 600, height: 400}
    const size = {width: 50, height: 50}

    let ratio = size.width / size.height
    let svgRatio = svg.width / svg.height
    let unit = ratio >= svgRatio
        ? svg.width / size.width
        : svg.height / size.height

    let width = ((size.width * unit) * 80) / 100
    let height = ((size.height * unit) * 80) / 100

    const coord = {
        x: (svg.width - width) / 2,
        y: (svg.height - height) / 2,
        width,
        height,
    }


    return (
        <>
            <div style={{margin: "10px", display: "flex", alignItems: "center", justifyContent: "space-around", flexWrap:"wrap", cursor:'default'}}>
                <BlindWindow/>
                <SingleLeafWindow/>
                <DoubleLeafWindowRight/>
                <DoubleLeafWindowLeft/>
                <ThreeLeafWindow/>
                <ShtulpovoeWindowLeftMain/>
                <ShtulpovoeWindowRightMain/>
                <ShtulpovoeBothMain/>
                <BalconyBlockRight/>
                <BalconyBlockLeft/>
            </div>

        </>


    );
};

export default Teplates;
