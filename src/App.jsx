import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
    return (
        <div className="relative w-screen h-screen bg-whiteMain">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute w-[400px] h-[400px] bg-[#ABABAB] rounded-full top-[-200px] right-[-200px] blur-[100px]" />
                <div className="absolute w-[700px] h-[500px] bg-[#ABABAB] rounded-full blur-[100px] bottom-[-250px] left-[-250px]" />
            </div>
            <div className="relative z-10">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
