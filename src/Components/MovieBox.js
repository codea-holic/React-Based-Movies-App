import React from 'react'
import InputBox from './InputBox'
import MoviesTable from './MoviesTable'
import Pagination from './Pagination'
    
    function MovieBox() {
      return (
        <div>
          <InputBox></InputBox>
          <MoviesTable></MoviesTable>
          <Pagination></Pagination>
        </div>
      )
    }
    
    export default MovieBox