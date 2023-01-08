import React, {useState} from 'react';
import classes from "./window.module.scss";

const Window = ({getWindow}) => {
    const hostName = 'http://otdushi-na-okna/';
    const [name, setName] = useState('');
    const [profil, setProfil] = useState('');
    const [glassUnit, setGlassUnit] = useState('');
    const [fornit, setFornit] = useState('');
    const [cost, setCost] = useState('');

    function writeName(write){
        let title = write.target.value;
        setName(title)
    }

    function writeProfil(write) {
        let title = write.target.value;
        setProfil(title)
    }

    function writeGlassUnit(write) {
        let title = write.target.value;
        setGlassUnit(title)
    }

    function writeFornit(write) {
        let title = write.target.value;
        setFornit(title)
    }

    function writeCost(write) {
        let title = write.target.value;
        setCost(title)
    }

    const post = (e) => {
        e.preventDefault()
        let data = {
            name:name,
            profil: profil,
            glass_unit: glassUnit,
            fornit: fornit,
            cost: cost
        }
        // console.log("In");
        axios.default.witchCredentials = true;
        axios.post(hostName + `api/window`, {...data}).then(response => {
            getWindow(response.data)
        })
    }

    return (
        <form onSubmit={post}>
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Имя"
                    value={name}
                    onChange={writeName}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="profil"
                    placeholder="Профиль"
                    value={profil}
                    onChange={writeProfil}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="glass_unit"
                    placeholder="Стеклопакет"
                    value={glassUnit}
                    onChange={writeGlassUnit}
                />
            </div>
            <div>
                <input
                    type="text"
                    name="fornit"
                    placeholder="Форнитура"
                    value={fornit}
                    onChange={writeFornit}
                />
            </div>
            <div>
                <input
                    className={`${classes.number}`}
                    type="number"
                    name="cost"
                    placeholder="Стоимость"
                    value={cost}
                    onChange={writeCost}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Window;
