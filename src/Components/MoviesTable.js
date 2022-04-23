import React from 'react'
import { useEffect } from 'react';

function MoviesTable() {
    let [isLoaded, setLoaded] = React.useState(true);
    // Below function will run after return is excuted
    let [content, setContent] = React.useState("");

    React.useEffect(async function () {
        // fetch function is inbuilt feature 
        let response = await fetch('https://react-backend101.herokuapp.com/movies')
        response = await response.json();
        console.log(response);
        setLoaded(false);
        setContent(response);
    }, []);

    return (
        <>
            {/* <div>MoviesTable</div> */}
            <div>{isLoaded == true ? <div className='font-bold'>Loading...</div> :
                <div>
                    <table className='table-auto'>
                        <thead>
                            <tr>
                                <th className='px-2'>#</th>
                                <th className='px-2'>Title</th>
                                <th className='px-2'>Genre</th>
                                <th className='px-6'>Stock</th>
                                <th className='px-2'>Rate</th>
                                <th className='px-2'></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                content.movies.map(function (movie, idx) {
                                    console.log(movie);
                                    return <tr>
                                        <td className='px-2 text-center'>{idx + 1}</td>
                                        <td className='px-2 text-center'>{movie.title}</td>
                                        <td className='px-2 text-center'>{movie.genre.name}</td>
                                        <td className='px-6 text-center'>{movie.numberInStock}</td>
                                        <td className='px-2 text-center'>{movie.dailyRentalRate}</td>
                                        <td className='px-2 text-center'>
                                            <button className="bg-red-500 rounded hover:bg-red-700 font-medium text-white px-1 py-1 mx-1">DELETE</button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            }
            </div>
        </>
    )
}

export default MoviesTable;