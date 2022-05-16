import React from 'react'
import { Routes, Route, Redirect, Navigate } from 'react-router-dom';

function Home() {
    return (
        <div>Home</div>
    )
}

function Login() {
    return (
        <div>Login</div>
    )
}

function PageNotFound() {
    return (
        <div>404 page not found</div>
    )
}

function Routing() {
    return (
        <>
            <div className='border-b-2 mb-4'>
                <button className='bg-blue-500 mx-4'>Login</button>
                <button className='bg-blue-500'>Home</button>
            </div>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}

export default Routing;


