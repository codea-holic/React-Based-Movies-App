import React from 'react'
import Genre from './Genre'
import MovieBox from './MovieBox'
function Main(){
    // First letter of starting variable (here genre) must me in small letter 
    // here 'Genre' is not working but 'genre' is working
    let [genre, setGenre] = React.useState("");
    const setGlobalGenre = (newGenre) => {
        setGenre(newGenre === 'All Genres' ? '' : newGenre);

    } 
    

    return(
        <div className='flex'>
            <Genre setGlobalGenre={setGlobalGenre}></Genre>
            <MovieBox cGenre = {genre}></MovieBox>
        </div>
    )
}

export default Main;