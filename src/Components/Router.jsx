import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favoris from '../Pages/Favoris';
import Home from '../Pages/Home';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/favori' element={<Favoris />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;