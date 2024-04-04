import React from 'react'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import Header from './features/Header'
import Home from './screens/home'
import Licence from './screens/licence'
import About from './screens/about'

import 'primeflex/primeflex.css'
// import "primeflex/themes/primeone-light.css";
import 'primereact/resources/themes/lara-light-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './App.css'

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="licence" element={<Licence />} />
            </Routes>
        </>
    )
}

export default App
