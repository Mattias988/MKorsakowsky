import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Skills } from "./pages/Skills";
import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";
import { Contact } from "./pages/Contact";

function App() {
    return (
        <BrowserRouter>
            <MainLayout />
        </BrowserRouter>
    );
}

const MainLayout = () => {
    const location = useLocation();

    return (
        <div className="relative w-screen h-screen bg-whiteMain">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute w-[400px] h-[400px] bg-[#ABABAB] rounded-full top-[-200px] right-[-200px] blur-[100px]" />
                <div className="absolute w-[700px] h-[500px] bg-[#ABABAB] rounded-full blur-[100px] bottom-[-250px] left-[-250px]" />
            </div>
            <div className="relative z-10 h-full flex flex-col w-full bg-transparent">
                <Header />
                <main className="max-w-[1480px] h-fit w-full mx-auto flex-grow">
                    <Routes key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default App;
