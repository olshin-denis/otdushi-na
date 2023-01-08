import React, {useEffect, useState} from 'react';
import classes from './euroline.module.scss';
import AntiIntrusive from "./antiIntrusive";
import ProtectetOfNoize from "./protectetOfNoize";
import EnergyEfficiency from "./energyEfficiency";
import ForChield from "./forChield";
import SunShield from "./sunShield";

const Softline = () => {
    const [antiIntrusive, setAntiIntrusive] = useState(false)
    const [protectetOfNoize, setProtectetOfNoize] = useState(false)
    const [energyEfficiency, setEnergyEfficiency] = useState(false)
    const [forChield, setForChield] = useState(false)
    const [sunShield, setSunShield] = useState(false)

    const antiInt = () => {
        setAntiIntrusive((antiIntrusive) => !antiIntrusive)
        setProtectetOfNoize(false);
        setEnergyEfficiency(false);
        setForChield(false);
        setSunShield(false);
    }

    const protect = () => {
        setProtectetOfNoize((protectetOfNoize) => !protectetOfNoize)
        setAntiIntrusive(false);
        setEnergyEfficiency(false);
        setForChield(false);
        setSunShield(false);
    }

    const energ = () => {
        setEnergyEfficiency((energyEfficiency) => !energyEfficiency)
        setAntiIntrusive(false);
        setProtectetOfNoize(false);
        setForChield(false);
        setSunShield(false);
    }

    const child = () => {
        setForChield((forChield) => !forChield)
        setAntiIntrusive(false);
        setProtectetOfNoize(false);
        setEnergyEfficiency(false);
        setSunShield(false);
    }

    const sun = () => {
        setSunShield((sunShield) => !sunShield)
        setAntiIntrusive(false);
        setProtectetOfNoize(false);
        setEnergyEfficiency(false);
        setForChield(false);
    }

    return (
        <>
            <div className={classes.grid}>
                <div className={classes.grid0}>
                    <div className={classes.teg}>Вариации профиля <span>SOFTLINE</span></div>
                </div>
                <div className={classes.grid2}>
                    <div onClick={antiInt} className={`${antiIntrusive === true? classes.color: null}`}>
                        <button>Противозломные</button>
                    </div>
                    <div onClick={protect} className={`${protectetOfNoize === true? classes.color: null}`}>
                        <button>Защита от шума</button>
                    </div>
                    <div onClick={energ} className={`${energyEfficiency === true? classes.color: null}`}>
                        <button>Энергоэффективное</button>
                    </div>
                    <div onClick={child} className={`${forChield === true? classes.color: null}`}>
                        <button>Для детской</button>
                    </div>
                    <div onClick={sun} className={`${sunShield === true? classes.color: null}`}>
                        <button>С солнцезащитой</button>
                    </div>
                </div>
            </div>
            {antiIntrusive === true ? <AntiIntrusive/> : null}
            {protectetOfNoize === true ? <ProtectetOfNoize/> : null}
            {energyEfficiency === true ? <EnergyEfficiency/> : null}
            {forChield === true ? <ForChield/> : null}
            {sunShield === true ? <SunShield/> : null}
        </>
    );
};

export default Softline;
