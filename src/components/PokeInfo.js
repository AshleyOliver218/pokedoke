import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'




export default function PokeInfo() {
  const pokeName = useParams()
  const [pokemon, setPokemon] = useState(null)
  const searchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName.name}`).then(
      (response) => {
        setPokemon({
          name: pokeName.name,
          species: response.data.species.name,
          img: response.data.sprites.other.dream_world.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          types: response.data.types,
          id: response.data.id,
        })
        // setPokemonFound(true)
      }
    ).catch(err => {
      console.log('nothing found')
      // setPokemonFound(false)

    })
  };
  useEffect(() => {
    searchPokemon()
  }, [])
  //  console.log(pokeName)
  let allCapsName = pokeName.name.toUpperCase()
  return (
    <div>
      {pokemon ?
        <div>
          <div className='pic-container'>
            <h1 className='caps-name'>{allCapsName}</h1>
            <img src={pokemon.img} />
          </div>
          <h3>Hp:{pokemon.hp}</h3>
          <h3>Attack:{pokemon.attack}</h3>
          <h3>Defense:{pokemon.defense}</h3>
          <div className='type-display'>
            {[pokemon.types.map((types, i) => {
              return (<p className={types.type.name}>{types.type.name}</p>)
            })]}
          </div>
        </div> : <div>not found</div>}

    </div>
  )
}
