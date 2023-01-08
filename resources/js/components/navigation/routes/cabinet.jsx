import React, {useEffect, useMemo, useState} from 'react';
import Window from "./window/window";
import Windows from "../link/windows";
import Selection from "../selection/selection";

const Cabinet = () => {
    const hostName = 'http://otdushi-na-okna/';

    const [data, setData] = useState('');

    const [bool, setBool] = useState("false");
    const [prod, setProduct] = useState('false');
    const [prof, setProfil] = useState('false');
    const [glass, setGlass] = useState('false');
    const [fornit, setFornit] = useState('false');
    const [cost, setCost] = useState("false");


    useEffect(() => {
        getWindows()
        newArray()
    }, [])

    function getWindows() {
        axios.default.witchCredentials = true;
        axios.get(hostName + 'api/windows').then(res => {
            setData(res)
        })
    }

    useMemo(() => {
        // console.log(data)
        // console.log(bool)
        // console.log("Окно:  "+prod)
        // console.log("Профиль:   "+prof)
        // console.log("Стекло:    "+glass)
    }, [data, bool, prod, prof, glass])

    function getWindow() {
        getWindows()
    }

    function getDelete() {
        getWindows()
    }

    const newArray = () => {
        if (data) {
            let windowsList = data.data.windows;
            if (bool === "false") {
                windowsList.sort(function (a, b) {
                    return a.id - b.id
                })
                if (prod !== "false") {
                    let result = windowsList.filter(st => st.name === prod)
                    windowsList = result
                    // console.log(windowsList)
                    if (prof !== "false") {
                        let pr = windowsList.filter(st => st.profil === prof)
                        windowsList = pr
                        // console.log(windowsList)
                        if (glass !== "false") {
                            let gl = windowsList.filter(st => st.glass_unit === glass)
                            windowsList = gl
                            if(fornit!== "false"){
                                let frn = windowsList.filter(st=>st.fornit === fornit)
                                windowsList = frn
                            }
                        }
                    }
                }
            } else if (bool === "true") {
                windowsList.sort(function (a, b) {
                    return b.id - a.id
                })
                if (prod !== "false") {
                    let result = windowsList.filter(st => st.name === prod)
                    windowsList = result
                    // console.log(windowsList)
                    if (prof !== "false") {
                        let pr = windowsList.filter(st => st.profil === prof)
                        windowsList = pr
                        // console.log(windowsList)
                        if (glass !== 'false') {
                            let gl = windowsList.filter(st => st.glass_unit === glass)
                            windowsList = gl
                            if(fornit!== "false"){
                                let frn = windowsList.filter(st=>st.fornit === fornit)
                                windowsList = frn
                            }
                        }
                    }
                }
            }
            return windowsList
        }
    };

    const list = () => {
        if (newArray()) {
            let x = newArray()
            // console.log(x)
            return x.map(({id, name, profil, glass_unit, cost, fornit}) => {
                return (
                    <div key={id} style={{border: '1px solid black', padding: '5px', margin: "5px"}}>
                        <Windows
                            id={id}
                            name={name}
                            profil={profil}
                            glass_unit={glass_unit}
                            cost={cost}
                            fornit={fornit}
                            getDelete={getDelete}
                        />
                    </div>
                )
            })
        }
    };

    const selection = () => {
        if (newArray()) {
            let newData = newArray()
            // console.log(x)
            return (
                <Selection
                    prof={prof}
                    newData={newData}
                    data={data}
                    setProfil={setProfil}
                    prod={prod}
                    glass={glass}
                    fornit={fornit}
                    setProduct={setProduct}
                    setBool={setBool}
                    setGlass={setGlass}
                    setFornit={setFornit}
                    setCost={setCost}
                />
            )
        }
    }

    return (
        <div style={{ cursor:'default'}}>
            <Window getWindow={getWindow}/>
            {selection()}
            {list()}
            {/*<WindowsList newArray={z} getDelete={getDelete}/>*/}
        </div>
    );
};
export default Cabinet;
