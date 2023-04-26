import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='NavBar'>
        <Link to='/'>
            <div>Home</div>
        </Link>
        <Link to='/pokemon'>
            <div>Pokemon</div>
        </Link>
        <Link to='searchpage'>
          <div>Search</div>
        </Link>
    </div>
  )
}
