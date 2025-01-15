import React from 'react';
import {Home} from './pages/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {

    return (
    <BrowserRouter>
        <div className="w-full">
            <div className="h-full">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
        </div>
    </BrowserRouter>
);
};

export default App;
