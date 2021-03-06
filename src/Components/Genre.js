import React from 'react'
function Genre(props) {
	const [isLoaded, setLoaded] = React.useState(true);
	const [content, setContent] = React.useState("");
	React.useEffect( function () {
		(async function () {
			let response = await fetch('https://react-backend101.herokuapp.com/genres');
			response = await response.json();
			setLoaded(false);
			setContent(response);
		})();
	}, []);
	const sendGenre = (e) => {
		console.log(e.target.innerText);
		props.setGlobalGenre(e.target.innerText);
	};
	return (
		isLoaded === true ? <div className='Genre'>
			<table className='table-auto'>
				<thead>
					<tr>
						<td className='mr-6 border-2 w-40 text-center h-10 font-bold'>All Genres</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className='mr-6 border-2 border-t-0 w-40 text-center h-10'>Loading...</td>
					</tr>
				</tbody>
			</table>
		</div> :
			<div className='Genre'>
				<table className='table-auto'>
					<thead>
						<th className='mr-6 border-2 w-40 text-center h-10 font-bold hover:bg-blue-500 cursor-pointer' onClick={sendGenre}>All Genres</th>
					</thead>
				</table>
				<tbody>
					{
						content.genres.map(function (genre) {
							return <tr key={genre._id}>
								<td className='mr-6 border-2 border-t-0 w-40 text-center h-10 hover:bg-blue-500 cursor-pointer' onClick={sendGenre}>{genre.name}</td>
							</tr>
						})
					}
				</tbody>
			</div >
	)
}

export default Genre;