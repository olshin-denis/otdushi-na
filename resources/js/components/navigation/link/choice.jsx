import React, {useEffect, useState} from 'react';
import ChoiceList from "../selection/choiceList";
import Paths from "./paths";
import classes from "./choise.module.scss";
import DifWindow from "../routes/home/svgHome/difWindow";
import RotaryWindow from "../routes/home/svgHome/rotaryWindow";
import SwingOutWindow from "../routes/home/svgHome/swingOutWindow";
import InputRange from "../inpurRange/InputRange";
import NewPath from "./newPath";


const Choice = () => {
        const hostName = 'http://otdushi-na-okna/';

        const [data, setData] = useState(null);

        const [prod, setProduct] = useState('false');
        const [prof, setProfil] = useState('false');
        const [glass, setGlass] = useState('false');
        const [fornit, setFornit] = useState('false');
        const [cost, setCost] = useState('false')
        const [filtMin, setFiltMin] = useState(null);
        const [filtMax, setFiltMax] = useState(null);
        const [loading, setLoading] = useState(false);

        useEffect(() => {
            // getWindows()
            newArray()
            // console.log(newArray())
            // ranges()
            // console.log(download)

        }, [prod])
        useEffect(() => {
            fetchWindows()
            // console.log(filtMin)
            // console.log(filtMax)
            // ranges()
        }, [])

         const getWindows = async() => {
            axios.default.witchCredentials = true;
            return axios.get(hostName + 'api/windows')
            //     .then(res => {
            //     setData(res)
            // })
        }

        const newArray = () => {
            if (data) {
                let windowsList = data.data.windows;
                windowsList.sort(function (a, b) {
                    return a.id - b.id
                })
                // console.log(windowsList)
                windowsList = windowsList.filter(st => st.cost >= filtMin && st.cost <= filtMax)
                // console.log(windowsList)
                if (prod !== "false") {
                    // let result = windowsList.filter(st => st.name === prod)
                    windowsList = windowsList.filter(st => st.name === prod)
                    // console.log(windowsList)
                    if (prof !== "false") {
                        // let pr = windowsList.filter(st => st.profil === prof)
                        windowsList = windowsList.filter(st => st.profil === prof)
                        // console.log(windowsList)
                        if (glass !== 'false') {
                            // let gl = windowsList.filter(st => st.glass_unit === glass)
                            windowsList = windowsList.filter(st => st.glass_unit === glass)
                            if (fornit !== "false") {
                                // let frn = windowsList.filter(st => st.fornit === fornit)
                                windowsList = windowsList.filter(st => st.fornit === fornit)
                            }
                        }
                    }
                }
                // console.log(windowsList)
                return windowsList
            }
        };
        const fetchWindows = async () => {
            setLoading(true)
            // console.log(loading)
            const res = await getWindows()
            setData(res)
            setLoading(false)
            // console.log(loading)
        }
        const list = () => {
            if (newArray()) {
                let x = newArray()
                // console.log(x)
                return x.map(({id, name, profil, glass_unit, cost, fornit}) => {
                    return (
                        <div key={id} style={{border: '1px solid black', padding: '5px', margin: "5px"}}>
                            <Paths
                                id={id}
                                name={name}
                                profil={profil}
                                glass_unit={glass_unit}
                                cost={cost}
                                fornit={fornit}
                            />
                        </div>
                    )
                })
            }
        };

        const newList = () => {
            if (newArray()) {
                return <NewPath
                    prod={prod}
                    setProduct={setProduct}
                />
            }
        }

        const selection = () => {
            if (newArray()) {
                let newData = newArray()
                // console.log(x)
                return (
                    <ChoiceList
                        prod={prod}
                        prof={prof}
                        newData={newData}
                        data={data}
                        glass={glass}
                        cost={cost}
                        fornit={fornit}
                        setProfil={setProfil}
                        setProduct={setProduct}
                        setGlass={setGlass}
                        setFornit={setFornit}
                        setCost={setCost}
                    />
                )
            }
        }

        return (
            <div>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center", cursor: 'default'}}>
                    <div className={classes.hightGrid0_1}>
                        <div className={classes.Text1}>
                            <p>Способ открытия створок</p>
                        </div>
                        <div className={classes.grid} style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "1fr, 3fr"}}>
                            <div className={classes.grid1}><p>Глухая</p></div>
                            <div className={classes.grid2}><p>Поворотная</p></div>
                            <div className={classes.grid3}><p>Поворотно-откидная</p></div>
                            <div className={classes.grid4}><DifWindow/></div>
                            <div className={classes.grid5}><RotaryWindow/></div>
                            <div className={classes.grid6}><SwingOutWindow/></div>
                        </div>
                    </div>
                </div>
                {/*<MultiRangeSlider min={0} max={1000}*/}
                {/*                  // onChange={({min,max})=>console.log(`min = ${min}, max = ${max}`)}*/}
                {/*/>*/}
                <InputRange min={6000} max={20000} setFiltMin={setFiltMin} setFiltMax={setFiltMax}/>
                {/*{list()}*/}
                {loading?
                    <div className={classes.spinwrapper}>
                        <div className={classes.spinner}/>
                    </div>
                    : newList()}
                {selection()}
                {/*<WindowsList newArray={z} getDelete={getDelete}/>*/}
            </div>
        );
    }
;

export default Choice;
