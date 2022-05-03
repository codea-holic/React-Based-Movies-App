import React from 'react'
import { useEffect } from 'react';

function MoviesTable(props) {
	let [isLoaded, setLoaded] = React.useState(true);
	// Below function will run after return is excuted
	let [content, setContent] = React.useState("");

	// Jab ye dusri bar render hoga, tab 'useEffect' wala function nhi chalega
	React.useEffect(async function () {
		// fetch function is inbuilt feature 
		let response = await fetch('https://react-backend101.herokuapp.com/movies')
		response = await response.json();
		setLoaded(false);
		setContent(response);
	}, []);
	
	// TODO: implement feature of Delete
	const handleDelete = (movieID) => {
		console.log("Delete Clicked");
		let restMovies = content.movies.filter((movie) => movieID !==  movie._id);
		let newObject = {...content, movies : restMovies};
		setContent(newObject);
	}

	// console.log("Movies Table " + props.searchText);
	let filteredContent = [];
	filteredContent = content.movies;
	if (props.searchText) {
		filteredContent = content.movies.filter((movie) => {
			return movie.title.toLowerCase().includes(props.searchText.toLowerCase());
		});
		if (filteredContent.length > props.moviesCount && props.moviesCount) {
			filteredContent = filteredContent.slice(0, props.moviesCount);
		}
	}
	
	if (content.movies && props.moviesCount) {
		if(props.cGenre){
			console.log(" -> Working " + props.cGenre);
			filteredContent = filteredContent.filter(function (movie){
				return movie.genre.name === props.cGenre;
			})
		}

		if (filteredContent.length > props.moviesCount) {
			filteredContent = filteredContent.slice(0, props.moviesCount);
		} 
	}

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
								filteredContent.map(function (movie, idx) {
									return <tr key={movie._id}>
										<td className='px-2 text-center'>{idx + 1}</td>
										<td className='px-2 text-center'>{movie.title}</td>
										<td className='px-2 text-center'>{movie.genre.name}</td>
										<td className='px-6 text-center'>{movie.numberInStock}</td>
										<td className='px-2 text-center'>{movie.dailyRentalRate}</td>
										<td className='px-2 text-center'>
											<button className="bg-red-500 rounded hover:bg-red-700 font-medium
											 text-white px-1 py-1 mx-1" onClick={() => {
												 handleDelete(movie._id);
											 }}>DELETE</button>
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