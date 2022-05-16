import React from 'react'
import Genre from './Genre'
import MovieBox from './MovieBox'
function Main() {
    // First letter of starting variable (here genre) must me in small letter 
    // here 'Genre' is not working but 'genre' is working
    let [genre, setGenre] = React.useState("");
    let [cPage, setcPage] = React.useState(1);

    const setGlobalGenre = (newGenre) => {
        setGenre(newGenre === 'All Genres' ? '' : newGenre);
        setcPage(1);
    }


    return (
        <div className='flex'>
            <Genre setGlobalGenre={setGlobalGenre}></Genre>
            <MovieBox cGenre={genre}
                cPage={cPage}
                setcPage={setcPage}
            ></MovieBox>
        </div>
    )
}

export default Main;