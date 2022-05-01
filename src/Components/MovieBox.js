import React from 'react'
import InputBox from './InputBox'
import MoviesTable from './MoviesTable'
import Pagination from './Pagination'
    
    function MovieBox() {
      let [searchText, setSearchText] = React.useState("");
      let [moviesCount, setMoviesCount] = React.useState(9);
      // jab bhi children ko parent se baat krni hoti hai to child apne parent ko function bhejta hai...
      const setGlobalSearchText = (searchText) => {
        setSearchText(searchText);
      }

      const setGlobalMoviesCount = (moviesCount) => {
        setMoviesCount(moviesCount);
      }

      return (
        <div>
          <InputBox setGlobalSearchText={setGlobalSearchText} setGlobalMoviesCount={setGlobalMoviesCount}></InputBox>
          <MoviesTable searchText={searchText} moviesCount={moviesCount}></MoviesTable>
          <Pagination></Pagination>
        </div>
      )
    }
    
    export default MovieBox;