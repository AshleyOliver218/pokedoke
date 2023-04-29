import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
import pokeball from '../images/pokeballredd.png'

export default function NavBar() {
  return (
    <div className='NavBar'>
      <div className='logo'>
      <h1 className='pokedoke' >PokeDoke</h1><img width='150px' height='150px' src={pokeball} alt='pokeball'/>
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
