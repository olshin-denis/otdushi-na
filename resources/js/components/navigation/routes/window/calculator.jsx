import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import BoxDoubleLeafWindowRight
    from "../templates/planForCalculation/calculationDoubleLeafWindowRight/boxDoubleLeafWindowRight";
import BoxBlindWindow from "../templates/planForCalculation/calculationBlindWindow/boxBlindWindow";
import BoxSingleLeafWindow from "../templates/planForCalculation/calculationSingleLeafWindow/boxSingleLeafWindow";
import BoxDoubleLeafWindowLeft
    from "../templates/planForCalculation/calculationDoubleLeafWindowLeft/boxDoubleLeafWindowLeft";
import BoxThreeLeafWindow from "../templates/planForCalculation/calculationThreeLeafWindow/boxThreeLeafWindow";
import BoxShtulpovoeWindowRightMain
    from "../templates/planForCalculation/calculationShtulpovoeWindowRightMain/boxShtulpovoeWindowRightMain";
import BoxShtulpovoeWindowLeftMain
    from "../templates/planForCalculation/calculationShtulpovoeWindowLeftMain/boxShtulpovoeWindowLeftMain";
import BoxShtulpovoeBothMain from "../templates/planForCalculation/calculationShtulpovoeBothMain/boxShtulpovoeBothMain";
import BoxBalconyBlockRight from "../templates/planForCalculation/calculationBalconyBlockRight/boxBalconyBlockRight";
import BoxBalconyBlockLeft from "../templates/planForCalculation/calculationBalconyBlockLeft/boxBalconyBlockLeft";
import classes from "./window.module.scss";

const Calculator = () => {
    const {id} = useParams();
    const hostName = 'http://otdushi-na-okna/';
    const [data, setData] = useState('');

    useEffect(() => {
        da()
    }, [data.name])


    const da = () => {
        axios.default.witchCredentials = true;
        axios.get(hostName + `api/window/${id}`).then(res => {
            // console.log(res.data.window)
            setData(res.data.window)
        })
    }

    const pictures = (
    ) => {
        if (data) {
            let name = data.name
            if (name === "Глухое Окно") {
                return <BoxBlindWindow data={data}/>
            } else if (name === "Одностворчатое окно") {
                return <BoxSingleLeafWindow data={data}/>
            } else if (name === "Двустворчатое Правое") {
                return <BoxDoubleLeafWindowRight data={data}/>
            } else if (name === "Двустворчатое Левое") {
                return <BoxDoubleLeafWindowLeft data={data}/>
            } else if (name === "Трёхстворчатое") {
                return <BoxThreeLeafWindow data={data}/>
            } else if (name === "Штульповое Правое Главное") {
                return <BoxShtulpovoeWindowRightMain data={data}/>
            } else if (name === "Штульповое Левое Главное") {
                return <BoxShtulpovoeWindowLeftMain data={data}/>
            } else if (name === "Штульповое Обе Главные") {
                return <BoxShtulpovoeBothMain data={data}/>
            } else if (name === "Балконный блок правый") {
                return <BoxBalconyBlockRight data={data}/>
            } else if (name === "Балконный блок левый") {
                return <BoxBalconyBlockLeft data={data}/>
            }
        }
    }

    return (
        <>
            {pictures()}
        </>
    );
};

export default Calculator;


