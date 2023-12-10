
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Booking from "./pages/Booking/Booking";
import Contact from "./pages/Contact/Contact";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import reportWebVitals from './utilities/reportWebVitals';


import './assets/css/global.css';
import SageFemmeParc2000Theme from "./assets/muiTheme";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <SageFemmeParc2000Theme>
            <Router>
                <Header />
                <main style={{ maxWidth: '1024px', marginBottom: '50px', marginInline: 'auto' }}>
                    <Routes>
                        <Route path={'*'} element={<PageNotFound />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/Reservation" element={<Booking />} />
                        <Route path="/Contact" element={<Contact />} />
                    </Routes>
                </main>
            </Router>
        </SageFemmeParc2000Theme>
    </React.StrictMode>
);

reportWebVitals(console.log);