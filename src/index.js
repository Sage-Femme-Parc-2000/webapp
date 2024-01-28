
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Contact from "./pages/Contact/Contact";
import Skill from "./pages/Skill/Skill";
import Team from "./pages/Team/Team";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import reportWebVitals from './utilities/reportWebVitals';

import SageFemmeParc2000Theme from "./assets/muiTheme";
import './assets/css/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <SageFemmeParc2000Theme>
            <Router>
                <Header />
                <main style={{ maxWidth: '1024px', marginBottom: '50px', marginInline: 'auto' }}>
                    <Routes>
                        <Route path='*' element={<PageNotFound />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/Team" element={<Team />} />
                        <Route path="/Skill" element={<Skill />} />
                        <Route path="/Contact" element={<Contact />} />
                    </Routes>
                </main>
            </Router>
        </SageFemmeParc2000Theme>
    </React.StrictMode>
);

reportWebVitals(console.log);