import GetAllPokemon from '../services/GetAllPokemon'
import { useState, useEffect } from 'react'
import './PokemonList.css'
//import {Link} from 'react-router-dom'

export default function PokemonList() {
  const [pokemon,setPokemon] = useState(null)
 
  useEffect(() => {
    GetAllPokemon().then(response => {
      setPokemon(response.results)
      
    })
  }, [])
   console.log(pokemon)

  return (
    <div className='Pokemon List'>
         
          { pokemon ? pokemon.map((ele, i) => (<div className='Card' key={i}>{ele.name}</div>)) : <div>Not Found</div>}  
   
    
     </div>
  )
}
