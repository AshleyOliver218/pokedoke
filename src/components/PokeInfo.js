import React from 'react'
import { useSearchParams } from 'react-router-dom'
import {useState} from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'

const searchAllPokemon = (pokemonName) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
    (response) => {
      setPokemon({
        // name: pokeName,
        // species: response.data.species.name,
        // img: response.data.sprites.front_default,
        // hp: response.data.stats[0].base_stat,
        // attack: response.data.stats[1].base_stat,
        // defense: response.data.stats[2].base_stat,
        // type: response.data.types[0].type.name,
        // id: response.data.id,
        // forms: response.data.forms,
        // abilities: response.data.abilities 
      })
      setPokemonFound(true)
    }
  ).catch(err =>{
    console.log('nothing found')
    setPokemonFound(false)

  })
};


export default function PokeInfo() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('query'))
  const name = searchParams.get()
 
  return (
    <div></div>
  )
}
