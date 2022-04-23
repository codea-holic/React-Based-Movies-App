import React from 'react'
import Genre from './Genre'
import MovieBox from './MovieBox'
function Main(){
    return(
        <div className='flex'>
            <Genre></Genre>
            <MovieBox></MovieBox>
        </div>
    )
}

export default Main;