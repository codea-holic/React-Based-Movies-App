import React from 'react'

function Pagination(props) {
  // number of movies, no of Items in a page
  return (
    <div>
      <button className="bg-blue-600 rounded hover:bg-blue-500 text-white font-medium border-2  px-2.5 py-2">1</button>
      <button className="rounded hover:bg-blue-500 hover:text-white font-medium border-2 text-black px-2.5 py-2">2</button>
      <button className="rounded hover:bg-blue-500 hover:text-white font-medium border-2 text-black px-2.5 py-2">3</button>
    </div>
  )
}

export default Pagination;