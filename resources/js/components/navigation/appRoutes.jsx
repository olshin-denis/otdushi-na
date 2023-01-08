import React from 'react';
import {Route, Routes} from "react-router-dom";
import Cabinet from "./routes/cabinet";
import Home from "./routes/home";
import WindowRedaction from "./routes/window/windowRedaction";
import Teplates from "./routes/templates/teplates";
import Test from "./routes/templates/test";
import Choice from "./link/choice";
import Calculator from "./routes/window/calculator";
import Rehau from "./routes/home/windows/rehau/rehau";
import Veka from "./routes/home/windows/veka/veka";
import Gealan from "./routes/home/windows/gealan/gealan";
import SlidingGates from "./routes/home/windows/gate/slidingGates/slidingGates";
import SectionalGarageDoors from "./routes/home/windows/gate/ sectionalGarageDoors/ sectionalGarageDoors";
import RollerGates from "./routes/home/windows/gate/rollerGates/rollerGates";
import RollerShutters from "./routes/home/windows/gate/rollerShutters/rollerShutters";


const AppRoutes = () => {



    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/:id" element={<Cabinet/>}/>
            <Route path="/window/:id" element={<WindowRedaction/>}/>
            <Route path="/canvas" element={<Teplates/>}/>
            <Route path="/test" element={<Test/>}/>
            <Route path="/choice" element={<Choice/>}/>
            <Route path="/choice/:id" element={<Calculator/>}/>
            <Route path="/window/rehau" element={<Rehau/>}/>
            <Route path="/window/veka" element={<Veka/>}/>
            <Route path="/window/gealan" element={<Gealan/>}/>
            <Route path="/gate/sidign_gates" element={<SlidingGates/>}/>
            <Route path="/gate/SectionalGarageDoors" element={<SectionalGarageDoors/>}/>
            <Route path="/gate/rollerGates" element={<RollerGates/>}/>
            <Route path="/gate/rollerShutters" element={<RollerShutters/>}/>
        </Routes>
    );
};

export default AppRoutes;
