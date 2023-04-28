import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
  return (
    <div className='NavBar'>
      <h1 className='pokedoke' >PokeDoke</h1>
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
