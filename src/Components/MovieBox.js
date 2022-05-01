import React from 'react'
import InputBox from './InputBox'
import MoviesTable from './MoviesTable'
import Pagination from './Pagination'
    
    function MovieBox() {
      let [searchText, setSearchText] = React.useState("");
      // let [searchCount, setGlobalCount] = React.useState(9);
      // jab bhi children ko parent se baat krni hoti hai to child apne parent ko function bhejta hai...
      const setGlobalSearchText = (searchText) => {
        setSearchText(searchText);
      }

      return (
        <div>
          <InputBox setGlobalSearchText={setGlobalSearchText}></InputBox>
          <MoviesTable searchText={searchText}></MoviesTable>
          <Pagination></Pagination>
        </div>
      )
    }
    
    export default MovieBox