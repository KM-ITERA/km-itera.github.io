import React from 'react';
import { Linktree, ErrorPage, Operasional } from './pages';
import { Routes, Route } from 'react-router-dom';

function App(){
    return (
        <Routes>
            <Route path="/" element={<Linktree/>} />
            <Route path="/operasional" element={<Operasional/>} />
            <Route path="*" element={<ErrorPage/>} />
        </Routes>
    );
}
export default App;

// Copyright © 2023 Kabinet KM ITERA