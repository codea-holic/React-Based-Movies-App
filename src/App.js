import React from 'react'
import Routing from './Routing';
import Home from './Components/Home'
import Login from './Components/Login'
import PageNotFound from './Components/PageNotFound'
import New from './Components/New'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
function App() {
    return (
        <div>
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/new" element={<New />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    )
}

export default App;