import React from 'react'
import InputBox from './InputBox'
import MoviesTable from './MoviesTable'
import Pagination from './Pagination'

function MovieBox(props) {
  let [searchText, setSearchText] = React.useState("");
  let [moviesCount, setMoviesCount] = React.useState(4);
  let [content, setContent] = React.useState("");
  let [isLoaded, setLoaded] = React.useState(true);
  let {cPage, setcPage} = props;

  // Below function will run after return is excuted
  // Jab ye dusri bar render hoga, tab 'useEffect' wala function nhi chalega
  React.useEffect(async function () {
    // fetch function is inbuilt feature 
    let response = await fetch('https://react-backend101.herokuapp.com/movies')
    response = await response.json();
    setLoaded(false);
    setContent(response);
  }, []);

  // jab bhi children ko parent se baat krni hoti hai to child apne parent ko function bhejta hai...
  const setGlobalSearchText = (searchText) => {
    setSearchText(searchText);
  }

  const setGlobalMoviesCount = (moviesCount) => {
    setMoviesCount(moviesCount);
  }

  if (props.cGenre) {
    console.log("MovieBox :", props.cGenre);
  }

  return (
    <div>
      <InputBox setGlobalSearchText={setGlobalSearchText} setGlobalMoviesCount={setGlobalMoviesCount}></InputBox>
      <MoviesTable
        searchText={searchText}
        moviesCount={moviesCount}
        cGenre={props.cGenre}
        content={content}
        isLoaded={isLoaded}
        cPage={cPage}
        setContent={setContent}>
      </MoviesTable>
      <Pagination
        moviesCount={moviesCount}
        content={content}
        cPage={cPage}
        setcPage={setcPage}>
      </Pagination>
    </div>
  )
}

export default MovieBox;