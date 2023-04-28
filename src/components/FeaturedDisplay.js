import React from 'react'
import featuredPokemon from '../services/data'
import './FeaturedDisplay.css'

export default function FeaturedDisplay() {
   
   let randomPokemon = featuredPokemon()
   let featuredRandomURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomPokemon.id}.png`
   
   let randomTypes = [randomPokemon.type.map((type, i) => {
                      return <div className={type} key={i}>{type}</div>

   })]
  return (
    <div className='Featured-Display'>
      <h1 className='randomPokemon-name'>{randomPokemon.name}</h1>
      <div>
       <img className='Featured-img' src={featuredRandomURL} alt='front of pokemon'/>
       <div className='type-display'>{randomTypes}</div>
       <p className='random-fact'>Did you Know...{randomPokemon.randomFact}</p>
      </div>
    </div>
  )
}
