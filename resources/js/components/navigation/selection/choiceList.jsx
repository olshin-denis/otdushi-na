import React, {useEffect, useState} from 'react';
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
import classes from "../link/choise.module.scss";
import {Link} from "react-router-dom";

const ChoiceList = ({
                        prod,
                        prof,
                        setProduct,
                        setProfil,
                        setGlass,
                        setFornit,
                        glass,
                        newData,
                        cost,
                        setCost,
                        fornit
                    }) => {
    const [names, setNames] = useState('')
    const [profilEnd, setProfilEnd] = useState('')
    const [glassEnd, setGlassEnd] = useState('')
    const [fornitEnd, setFornitEnd] = useState('');

    useEffect(() => {
        name()
        if (prod === "false") {
            setProfil("false")
        }
        if (prof === "false") {
            setGlass("false")
        }
        if (glass === "false") {
            setFornit("false")
        }
        if (fornit === "false") {
            setCost("false")
        }
        // console.log(prod)
    }, [prod, prof, fornit, glass])

    const name = () => {
        if (newData) {
            // console.log(data)
            // console.log(data.data.windows)
            let z = newData;
            // console.log(z)
            const aa = new Set(z.map(e => JSON.stringify(e.name)));
            // console.log(aa)
            const ab = Array.from(aa).map(e => JSON.parse(e));
            // console.log(ab);
            setNames(ab)

            let y = newData;
            // console.log(x)
            const ac = new Set(y.map(e => JSON.stringify(e.profil)));
            // console.log(ac)
            const ad = Array.from(ac).map(e => JSON.parse(e));
            // console.log(ad);
            setProfilEnd(ad)

            let с = newData;
            // console.log(с)
            const ae = new Set(с.map(e => JSON.stringify(e.glass_unit)));
            // console.log(ac)
            const af = Array.from(ae).map(e => JSON.parse(e));
            // console.log(ad);
            setGlassEnd(af)

            let d = newData
            // console.log(d)
            const ag = new Set(d.map(e => JSON.stringify(e.fornit)));
            // console.log(ag)
            const ah = Array.from(ag).map(e => JSON.parse(e));
            // console.log(ad);
            setFornitEnd(ah)

            let e = newData
            // console.log(d)
            const ai = new Set(e.map(e => JSON.stringify(e.cost)));
            // console.log(ag)
            const aj = Array.from(ai).map(e => JSON.parse(e));
            // console.log(ad);
            setCost(aj)
        }

    }


    const optionProduct = () => {
        if (names) {
            return names.map((names) => {
                return (
                    <option className={classes.option1} key={names} value={names}>{names}</option>
                )
            })
        }
    }

    const optionProfil = () => {
        if (profilEnd) {
            return profilEnd.map((profilEnd) => {
                return (
                    <option className={classes.option1} key={profilEnd} value={profilEnd}>{profilEnd}</option>
                )
            })

        }
    }

    const optionGlass = () => {
        if (glassEnd) {
            return glassEnd.map((glassEnd) => {
                return (
                    <option className={classes.option1} key={glassEnd} value={glassEnd}>{glassEnd}</option>
                )
            })
        }
    }

    const optionFornit = () => {
        if (fornitEnd) {
            return fornitEnd.map((fornitEnd) => {
                return (
                    <option className={classes.option1} key={fornitEnd} value={fornitEnd}>{fornitEnd}</option>
                )
            })
        }
    }
    const choosepicture = () => {
        if (prod !== "false") {
            if (prod === "Глухое Окно") {
                return <BlindWindow/>
            } else if (prod === "Одностворчатое окно") {
                return <SingleLeafWindow/>
            } else if (prod === "Двустворчатое Правое") {
                return <DoubleLeafWindowRight/>
            } else if (prod === "Двустворчатое Левое") {
                return <DoubleLeafWindowLeft/>
            } else if (prod === "Трёхстворчатое") {
                return <ThreeLeafWindow/>
            } else if (prod === "Штульповое Левое Главное") {
                return <ShtulpovoeWindowLeftMain/>
            } else if (prod === "Штульповое Правое Главное") {
                return <ShtulpovoeWindowRightMain/>
            } else if (prod === "Штульповое Обе Главные") {
                return <ShtulpovoeBothMain/>
            } else if (prod === "Балконный блок правый") {
                return <BalconyBlockRight/>
            } else if (prod === "Балконный блок левый") {
                return <BalconyBlockLeft/>
            }
        }
    }

    const change = () =>{
        if(prod==="Балконный блок правый"||prod==="Балконный блок левый"){
            return <>200Х210</>
        }else if(prod==="Трёхстворчатое"){
            return <>200Х140</>
        }else {
            return <>130Х130</>
        }
    }

    return (
        <>
            {/*{smc()}*/}
            <div className={classes.blockFlex}>
                {/*<div>*/}
                {/*    /!*Выбрать изделия*!/*/}
                {/*    <select onChange={e => setProduct(e.target.value)}>*/}
                {/*        <option value="false" defaultValue>Выбрать изделия</option>*/}
                {/*        {optionProduct()}*/}
                {/*    </select>*/}
                {/*</div>*/}
                {prod !== "false" ?
                    <div className={classes.phone}>
                        {choosepicture()}
                    </div>
                    : null}
                {prod !== "false" ?
                    <div className={classes.dateTable}>
                        <div className={classes.name}>Имя: {prod}</div>
                        {prod !== "false" ?
                            <div className={classes.profile}>
                                {/*Выбрать профиль*/}
                                <div>Провфиль:</div>
                                <div className={classes.block2}>
                                    <select className={classes.option} onChange={e => setProfil(e.target.value)}>
                                        <option className={classes.option2} value="false" defaultValue>Выбрать профиль
                                        </option>
                                        {optionProfil()}
                                    </select>
                                </div>
                            </div>
                            : null}
                        <div className={classes.profile}>
                            <div className={classes.name}>Стеклопакет: </div>
                            {prof !== "false" ?
                                <div className={classes.block2}>
                                    {/*Выбрать стеклопакет*/}
                                    <select className={classes.option} onChange={e => setGlass(e.target.value)}>
                                        <option className={classes.option2} value="false" defaultValue>Выбрать
                                            стеклопакет
                                        </option>
                                        {optionGlass()}
                                    </select>
                                </div>
                                : null}
                        </div>
                        <div className={classes.profile}>
                            <div className={classes.name}>Форнитура: </div>
                            {glass !== "false" ?
                                <div className={classes.block2}>
                                    {/*Выбрать форнитуру*/}
                                    <select className={classes.option} onChange={e => setFornit(e.target.value)}>
                                        <option className={classes.option2} value="false" defaultValue>Выбрать
                                            форнитуру
                                        </option>
                                        {optionFornit()}
                                    </select>
                                </div>
                                : null}
                        </div>
                        <div className={classes.cost}>Стоимость изделия {change()}: {cost !== "false" ? (cost + " р."): null}</div>
                        {cost!=="false"?<Link to={`/choice/${newData[0].id}`}><button className={classes.button}>Ваши размеры</button></Link>:null}
                    </div>
                    : null}
            </div>
        </>
    );
};

export default ChoiceList;
