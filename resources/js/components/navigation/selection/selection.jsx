import React, {useEffect, useState} from 'react';

const Selection = ({
                       prod,
                       prof,
                       setBool,
                       setProduct,
                       setProfil,
                       setGlass,
                       setFornit,
                       fornit,
                       glass,
                       setCost,
                       newData
                   }) => {

    const [names, setNames] = useState('')
    const [profilEnd, setProfilEnd] = useState('')
    const [glassEnd, setGlassEnd] = useState('')
    const [fornitEnd, setFornitEnd] = useState('');
    const [costEnd, setCostEnd] = useState('');

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
        // if (fornit === "false") {
        //     setCost("false")
        // }
        // console.log(newData)
    }, [newData/*, prod, prof, glass, fornit*/])

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

            // let f = newData
            // // console.log(d)
            // const ar = new Set(f.map(e => JSON.stringify(e.fornit)));
            // // console.log(ag)
            // const as = Array.from(ar).map(e => JSON.parse(e));
            // // console.log(ad);
            // setCostEnd(as)
        }

    }


    const optionProduct = () => {
        if (names) {
            return names.map((names) => {
                return (
                    <option key={names} value={names}>{names}</option>
                )
            })
        }
    }

    const optionProfil = () => {
        if (profilEnd) {
            return profilEnd.map((profilEnd) => {
                return (
                    <option key={profilEnd} value={profilEnd}>{profilEnd}</option>
                )
            })

        }
    }

    const optionGlass = () => {
        if (glassEnd) {
            return glassEnd.map((glassEnd) => {
                return (
                    <option key={glassEnd} value={glassEnd}>{glassEnd}</option>
                )
            })
        }
    }

    const optionFornit = () => {
        if (fornitEnd) {
            return fornitEnd.map((fornitEnd) => {
                return (
                    <option key={fornitEnd} value={fornitEnd}>{fornitEnd}</option>
                )
            })
        }
    }
    //
    // const optionCost = () => {
    //     if (costEnd) {
    //         return costEnd.map((costEnd) => {
    //             return (
    //                 <option key={costEnd} value={costEnd}>{costEnd}</option>
    //             )
    //         })
    //     }
    // }

    return (
        <>
            {/*{smc()}*/}
            <div style={{display: "flex", margin: "5px", flexDirection: "row"}}>
                <div style={{height: "25px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <select onChange={e => setBool(e.target.value)}>
                        <option value={"false"} defaultValue>По возрастанию</option>
                        <option value={"true"}>По убыванию</option>
                    </select>
                </div>
                <div style={{padding: "5px", display: "flex", flexDirection: "column"}}>
                    {/*Выбрать изделия*/}
                    <select onChange={e => setProduct(e.target.value)}>
                        <option value="false" defaultValue>Выбрать изделия</option>

                        {optionProduct()}
                    </select>
                </div>
                {prod !== "false" ?
                    <div style={{padding: "5px", display: "flex", flexDirection: "column"}}>
                        {/*Выбрать профиль*/}
                        <select onChange={e => setProfil(e.target.value)}>
                            <option value="false" defaultValue>Выбрать профиль</option>

                            {optionProfil()}
                        </select>
                    </div>
                    : null}

                {prof !== "false" ?
                    <div style={{padding: "5px", display: "flex", flexDirection: "column"}}>
                        {/*Выбрать стеклопакет*/}
                        <select onChange={e => setGlass(e.target.value)}>
                            <option value="false" defaultValue>Выбрать стеклопакет</option>

                            {optionGlass()}
                        </select>
                    </div>
                    : null}
                {glass !== "false" ?
                    <div style={{padding: "5px", display: "flex", flexDirection: "column"}}>
                        {/*Выбрать форнитуру*/}
                        <select onChange={e => setFornit(e.target.value)}>
                            <option value="false" defaultValue>Выбрать форнитуру</option>

                            {optionFornit()}
                        </select>
                    </div>
                    : null}
                {/*{fornit !== "false" ?*/}
                {/*    <div style={{padding: "5px", display: "flex", flexDirection: "column"}}>*/}
                {/*        /!*Выбрать стоимости*!/*/}
                {/*        <select onChange={e => setCost(e.target.value)}>*/}
                {/*            <option value="false" defaultValue>Выбрать цену</option>*/}

                {/*            {optionCost()}*/}
                {/*        </select>*/}
                {/*    </div>*/}
                {/*    : null}*/}
            </div>
        </>

    );
};

export default Selection;
