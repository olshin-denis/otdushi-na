import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";

const WindowRedaction = () => {
    const {id} = useParams();
    const hostName = 'http://otdushi-na-okna/';
    const [name, setName] = useState('');
    const [profil, setProfil] = useState('');
    const [glassUnit, setGlassUnit] = useState('');
    const [fornit, setFornit] = useState('');
    const [cost, setCost] = useState('');
    const [reduction, setReduction] = useState();
    const navigate = useNavigate()

    function redactName(write) {
        let title = write.target.value;
        setName(title)
    }

    function redactProfil(write) {
        let title = write.target.value;
        setProfil(title)
    }

    function redactGlassUnit(write) {
        let title = write.target.value;
        setGlassUnit(title)
    }

    function redactFornit(write) {
        let title = write.target.value;
        setFornit(title)
    }

    function redactCost(write) {
        let title = write.target.value;
        setCost(title)
    }

    useEffect(() => {
        ax()
        // console.log(reduction)
    }, [])

    function ax() {
        // e.preventDefault()
        axios.default.witchCredentials = true;
        axios.get(hostName + `api/window/${id}`).then(res => {
            setReduction(res.data.window);
            // console.log(res.data.window);
            setName(res.data.window.name);
            setProfil(res.data.window.profil);
            setGlassUnit(res.data.window.glass_unit);
            setFornit(res.data.window.fornit);
            setCost(res.data.window.cost);
        })
    }


    const redact = (e) => {
        e.preventDefault()
        if (reduction) {
            let data = {
                name: name,
                profil: profil,
                glass_unit: glassUnit,
                fornit: fornit,
                cost: cost
            }
            // console.log("In");
            axios.post(hostName + `api/window/${id}`, {...data}).then(response => {
                // getWindow(response.data)
                navigate(`../window`)
            })
        }

    }

    const form = () => {
        if (reduction) {
            return (
                <>
                    <form onSubmit={redact}>
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Имя"
                                defaultValue={reduction.name}
                                onChange={redactName}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="profil"
                                placeholder="Профиль"
                                defaultValue={reduction.profil}
                                onChange={redactProfil}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="glass_unit"
                                placeholder="Стеклопакет"
                                defaultValue={reduction.glass_unit}
                                onChange={redactGlassUnit}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="fornit"
                                placeholder="fornit"
                                defaultValue={reduction.fornit}
                                onChange={redactFornit}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="cost"
                                placeholder="cost"
                                defaultValue={reduction.cost}
                                onChange={redactCost}
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </>
            )
        }
    }

    return (
        <div style={{ cursor:'default'}}>
            {form()}
        </div>
    );
};

export default WindowRedaction;
