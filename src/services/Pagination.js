import React from 'react'

export default function Pagination({goToNextPage, goToPrevPage}) {
  return (
    <div>
      {goToPrevPage && <button onClick={goToPrevPage} >Back</button>}
      {goToNextPage && <button onClick={goToNextPage} >Next</button>}
        
    </div>
  )
}
