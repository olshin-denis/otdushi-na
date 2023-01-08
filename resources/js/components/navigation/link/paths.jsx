import React from 'react';
import {Link} from "react-router-dom";
import WindowDelete from "../routes/window/windowDelete";
import BlindWindow from "../routes/templates/clearPlan/blindWindow";
import SingleLeafWindow from "../routes/templates/clearPlan/singleLeafWindow";
import DoubleLeafWindowRight from "../routes/templates/clearPlan/doubleLeafWindowRight";
import DoubleLeafWindowLeft from "../routes/templates/clearPlan/doubleLeafWindowLeft";
import ThreeLeafWindow from "../routes/templates/threeLeafWindow";
import ShtulpovoeWindowLeftMain from "../routes/templates/clearPlan/shtulpovoeWindowLeftMain";
import ShtulpovoeWindowRightMain from "../routes/templates/clearPlan/shtulpovoeWindowRightMain";
import ShtulpovoeBothMain from "../routes/templates/clearPlan/shtulpovoeBothMain";
import BalconyBlockRight from "../routes/templates/clearPlan/balconyBlockRight";
import BalconyBlockLeft from "../routes/templates/clearPlan/balconyBlockLeft";

const Paths = ({name, profil, glass_unit, fornit, cost, id}) => {

    const choosepicture = () =>{
        if(name){
            if(name === "Глухое Окно"){
                return <BlindWindow/>
            }else if(name === "Одностворчатое окно"){
                return <SingleLeafWindow/>
            }else if(name === "Двустворчатое Правое"){
                return <DoubleLeafWindowRight/>
            }else if(name === "Двустворчатое Левое"){
                return <DoubleLeafWindowLeft/>
            }else if(name === "Трёхстворчатое"){
                return <ThreeLeafWindow/>
            }else if(name === "Штульповое Левое Главное"){
                return <ShtulpovoeWindowLeftMain/>
            }else if (name === "Штульповое Правое Главное"){
                return <ShtulpovoeWindowRightMain/>
            }else if (name === "Штульповое Обе Главные"){
                return <ShtulpovoeBothMain/>
            }else if(name === "Балконный блок правый"){
                return <BalconyBlockRight/>
            }else if (name === "Балконный блок левый"){
                return <BalconyBlockLeft/>
            }
        }
    }

    return (
        <div style={{display:"flex", justifyContent:"space-around"}}>
            <div>
                <div>Имя: {name}</div>
                <div>Профиль: {profil}</div>
                <div>Стеклопакет: {glass_unit}</div>
                <div>Форнитура: {fornit}</div>
                <div>Стиомость: {cost}</div>
                <Link to={`/choice/${id}`}><button>Выбрать</button></Link>
            </div>
            <div style={{height:"200px"}}>
                {choosepicture()}
            </div>
        </div>
    );
};

export default Paths;
