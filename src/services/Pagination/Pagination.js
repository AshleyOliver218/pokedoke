import React from 'react'
import './Pagination.css'

export default function Pagination({ goToNextPage, goToPrevPage }) {
  return (
    <div>
      {goToPrevPage && <button onClick={goToPrevPage} >&#11013;&#65039;</button>}
      {goToNextPage && <button onClick={goToNextPage} >&#10145;&#65039;</button>}

    </div>
  )
}
