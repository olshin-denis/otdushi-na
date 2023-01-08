import React, {useEffect} from 'react';
import classes from './choise.module.scss';
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

const NewPath = ({prod,setProduct}) => {
    // useEffect(()=>{
    //     console.log(prod)
    // },[prod])

    return (
        <>
            <div className={classes.blocks2}>
                <div className={classes.block1}>
                    <div className={classes.plan}><button onClick={()=>{
                        if(prod==="false"|| prod!=="Глухое Окно"){
                            let x ="Глухое Окно"
                            setProduct(x)
                        }else if(prod==="Глухое Окно") {
                            let x = "false"
                            setProduct(x)
                        }
                        }}><BlindWindow/></button></div>

                    <div className={classes.plan}><button onClick={()=>{
                        if(prod==="false"|| prod!=="Одностворчатое окно"){
                            let x ="Одностворчатое окно"
                            setProduct(x)
                        }else if(prod==="Одностворчатое окно"){
                            let x = "false"
                            setProduct(x)
                        }}}><SingleLeafWindow/></button></div>

                    <div className={classes.plan}><button onClick={()=>{
                        if(prod==="false"|| prod!=="Двустворчатое Правое"){
                            let x ="Двустворчатое Правое"
                            setProduct(x)
                        }else if(prod==="Двустворчатое Правое"){
                            let x = "false"
                            setProduct(x)
                        }}}><DoubleLeafWindowRight/></button></div>

                    <div className={classes.plan}><button onClick={()=>{
                        if(prod==="false"|| prod!=="Двустворчатое Левое"){
                            let x ="Двустворчатое Левое"
                            setProduct(x)
                        }else if(prod==="Двустворчатое Левое"){
                            let x = "false"
                            setProduct(x)
                        }}}><DoubleLeafWindowLeft/></button></div>

                    <div className={classes.plan}><button onClick={()=>{
                        if(prod==="false"|| prod!=="Балконный блок правый"){
                            let x ="Балконный блок правый"
                            setProduct(x)
                        }else if(prod==="Балконный блок правый"){
                            let x = "false"
                            setProduct(x)
                        }}}><BalconyBlockRight/></button></div>
                </div>

                <div className={classes.block2}>
                    <div className={classes.plan}><button onClick={()=>{
                        if(prod==="false"|| prod!=="Балконный блок левый"){
                            let x ="Балконный блок левый"
                            setProduct(x)
                        }else if(prod==="Балконный блок левый"){
                            let x = "false"
                            setProduct(x)
                        }}}><BalconyBlockLeft/></button></div>

                    <div className={classes.plan}><button onClick={()=>{
                        if(prod==="false"|| prod!=="Трёхстворчатое"){
                            let x ="Трёхстворчатое"
                            setProduct(x)
                        }else if(prod==="Трёхстворчатое"){
                            let x = "false"
                            setProduct(x)
                        }}}><ThreeLeafWindow/></button></div>

                    <div className={classes.plan}><button onClick={()=>{
                        if(prod==="false"|| prod!=="Штульповое Левое Главное"){
                            let x ="Штульповое Левое Главное"
                            setProduct(x)
                        }else if(prod==="Штульповое Левое Главное"){
                            let x = "false"
                            setProduct(x)
                        }}}><ShtulpovoeWindowLeftMain/></button></div>

                    <div className={classes.plan}><button onClick={()=>{
                        if(prod==="false"|| prod!=="Штульповое Правое Главное"){
                            let x ="Штульповое Правое Главное"
                            setProduct(x)
                        }else if(prod==="Штульповое Правое Главное"){
                            let x = "false"
                            setProduct(x)
                        }}}><ShtulpovoeWindowRightMain/></button></div>

                    <div className={classes.plan}><button onClick={()=>{
                        if(prod==="false"|| prod!=="Штульповое Обе Главные"){
                            let x ="Штульповое Обе Главные"
                            setProduct(x)
                        }else if(prod==="Штульповое Обе Главные"){
                            let x = "false"
                            setProduct(x)
                        }}}><ShtulpovoeBothMain/></button></div>
                </div>
            </div>
        </>
    );
};

export default NewPath;
