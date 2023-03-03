import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Color from './Color';
import ColorForm from './ColorForm';
import { default as Colors } from './Colors';
import NavBar from './NavBar';

function App() {

    const INITIAL_STATE = [
        { name: 'red', color: 'red' },
        { name: 'violet', color: 'violet' },
        { name: 'yellow', color: 'yellow' }
    ];

    const [colors, setColors] = useState(INITIAL_STATE);

    const addColor = (newColor) => {
        setColors(colors => [{ ...newColor }, ...colors]);
    };

    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<Colors colors={colors} />} />
                <Route path="/colors/new" element={<ColorForm addColor={addColor} />} />
                <Route path="/color/:name" element={<Color colors={colors} />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
}

export default App;



