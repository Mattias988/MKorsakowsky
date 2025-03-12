import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Skills } from "./pages/Skills";
import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";
import { Contact } from "./pages/Contact";
import { WeatherProvider } from './contexts/WeatherContext';
import { Analytics } from '@vercel/analytics/react';
import { Experience } from "./pages/Experience";
import { motion } from "framer-motion";

function App() {
    return (
        <BrowserRouter>
            <WeatherProvider>
                <Analytics />
                <MainLayout />
            </WeatherProvider>
        </BrowserRouter>
    );
}

const MainLayout = () => {

    return (
        <div className="relative w-screen h-screen bg-whiteMain">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute w-[400px] h-[400px] bg-[#ABABAB] rounded-full top-[] right-[-200px] blur-[100px]"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute w-[700px] h-[500px] bg-[#ABABAB] rounded-full blur-[100px] bottom-[-250px] left-[-250px]"
                />
            </div>
            <div className="relative z-10 h-full flex flex-col w-full bg-transparent">
                <Header />
                <main className="max-w-[1480px] h-fit w-full mx-auto flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/experience" element={<Experience />} />
                    </Routes>
                </main>
                <Footer />
                <Analytics />
            </div>
        </div>
    );
};

export default App;
