import React from 'react'
import featuredPokemon from '../../services/data'
import './FeaturedDisplay.css'

export default function FeaturedDisplay() {

  let randomPokemon = featuredPokemon()
  let featuredRandomURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomPokemon.id}.png`

  let randomTypes = [randomPokemon.type.map((type, i) => {
    return <div className={type} key={i}>{type}</div>

  })]
  return (
    <div className='feat-container'>
      <div className='Featured-Display'>
        <h1 className='featured-title'>Featured Pokemon</h1>
        <h2 className='randomPokemon-name'>{randomPokemon.name}</h2>
        <div>
          <img className='Featured-img' src={featuredRandomURL} alt='front of pokemon' />
          <div className='type-display'>{randomTypes}</div>
        </div>
        <p className='random-fact'>Did you Know...{randomPokemon.randomFact}</p>
      </div>
      <div className='for-more'>

        <h3 className='for-more-title'>For more info about {randomPokemon.name}</h3> Find {randomPokemon.name} on the pokemon page or go to the search page for even more detailed information!
      </div>
    </div>
  )
}
