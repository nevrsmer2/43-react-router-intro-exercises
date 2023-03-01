import React from "react";
import { Route, Routes } from "react-router-dom";

import Doritos from './Doritos';
import KitKat from './KitKat';
import NavBar from "./NavBar";
import OatmealCookie from './OatmealCookie';
import Snickers from './Snickers';
import VendingMachine from './VendingMachine';

function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<VendingMachine />} />
                <Route path="/doritos" element={<Doritos />} />
                <Route path="/kitkat" element={<KitKat />} />
                <Route path="/oatmealcookie" element={<OatmealCookie />} />
                <Route path="/snickers" element={<Snickers />} />
            </Routes>
        </div>
    );
};

export default App;