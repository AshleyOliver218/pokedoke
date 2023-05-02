import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import pokeball from '/Users/ashleyoliver/Desktop/pokemon-api/pokeapi/src/images/pokeballredu.png'

export default function NavBar() {
  return (
    <div className='NavBar'>
      <div className='logo'>
        <h2 className='pokedoke' >PokéDoké</h2><img width='150px' height='150px' src={pokeball} alt='pokeball' />
      </div>
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
