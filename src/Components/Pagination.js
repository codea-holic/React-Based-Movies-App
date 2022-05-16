import React from 'react'

function Pagination(props) {
  let { moviesCount, content, cPage, setcPage } = props;
  // number of movies, no of Items in a page
  let pagesArr = [];
  if (content.movies) {
    let noOfPages = Math.ceil(content.movies.length / moviesCount);
    for (let i = 1; i <= noOfPages; i++) {
      pagesArr.push(i);
    }
  }

  return (
    // <div>
    //   <button className="bg-blue-600 rounded hover:bg-blue-500 text-white font-medium border-2  px-2.5 py-2">1</button>
    //   <button className="rounded hover:bg-blue-500 hover:text-white font-medium border-2 text-black px-2.5 py-2">2</button>
    //   <button className="rounded hover:bg-blue-500 hover:text-white font-medium border-2 text-black px-2.5 py-2">3</button>
    // </div>
    <>
      {
        pagesArr.map(function (pageNumber) {
          let css = (pageNumber == cPage ? "bg-blue-600 rounded hover:bg-blue-500 text-white font-medium border-2  px-2.5 py-2" :
            "rounded hover:bg-blue-500 hover:text-white font-medium border-2 text-black px-2.5 py-2");

          return (
            <button className={css} onClick={() =>{
              setcPage(pageNumber);
            }}>
              {pageNumber}

            </button>
          )
        })
      }
    </>
  )
}

export default Pagination;