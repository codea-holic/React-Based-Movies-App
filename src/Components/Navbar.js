import React from 'react'
import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <nav className='p-4 bg-black mb-3 '>
            <h2 class="text-3xl text-white pr-2 leading-tight inline-block mr-2"><Link to="/home">IMDB</Link></h2>
            <span class="text-xl text-white text-blue-500 hover:text-blue-300 px-2 cursor-pointer" href="/new">Login</span>
        </nav>
    )
}

export default NavBar;