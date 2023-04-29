import React from 'react'
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'
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
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
          id: response.data.id,
          forms: response.data.forms,
          abilities: response.data.abilities 
        })
        // setPokemonFound(true)
      }
    ).catch(err =>{
      console.log('nothing found')
      // setPokemonFound(false)
  
    })
  };
useEffect(()=>{
  searchPokemon()
},[])
//  console.log(pokeName)
 
  return (
    <div>
{pokemon ? <div>{pokemon.name}</div> : <div>not found</div>}
    </div>
  )
}
