import React from 'react'

function MoviesTable(props) {

	let {content, isLoaded, setContent, cPage, moviesCount} = props;
	// TODO: implement feature of Delete
	const handleDelete = (movieID) => {
		console.log("Delete Clicked");
		let restMovies = content.movies.filter((movie) => movieID !==  movie._id);
		let newObject = {...content, movies : restMovies}; // ...content -> means content ke ander search karo.
		setContent(newObject);
	} 

	// console.log("Movies Table " + props.searchText);
	let filteredContent = [];
	filteredContent = content.movies;
	
	/****************************** Searching *************************************/ 
	if (props.searchText) {
		filteredContent = content.movies.filter((movie) => {
			return movie.title.toLowerCase().includes(props.searchText.toLowerCase());
		});
		if (filteredContent.length > props.moviesCount && props.moviesCount) {
			filteredContent = filteredContent.slice(0, props.moviesCount);
		}
	}
	
	/****************************** Genre ************************************ (Grouping) */ 
	if (content.movies && props.moviesCount) {
		if(props.cGenre){
			console.log(" -> Working " + props.cGenre);
			filteredContent = filteredContent.filter(function (movie){
				return movie.genre.name === props.cGenre;
			})
		}

		/*************************No of Movies in a page ************************** (Pagination)*/
		let sidx = (cPage - 1) * moviesCount;
		let eidx = sidx + parseInt(moviesCount);
		if (filteredContent.length > props.moviesCount) {
			filteredContent = filteredContent.slice(sidx, eidx);
		} 
	}

	return (
		<>
			{/* <div>MoviesTable</div> */}
			<div>{isLoaded === true ? <div className='font-bold'>Loading...</div> :
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