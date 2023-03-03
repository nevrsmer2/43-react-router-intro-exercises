import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dog from './Dog';
import Dogs from './Dogs';
import NavBar from './NavBar';

function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Dogs />} />
                <Route path="/dog/:id" element={<Dog />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
};

export default App;