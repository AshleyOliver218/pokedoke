import React from 'react'
import {Link} from 'react-router-dom'
import './Card.css' 
import { useState } from 'react'

export default function Card({pokemon}) {
  const {name, url, id} = {
    name: pokemon.name,
    url: `https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`,
    id: ""
  }
  
// console.log(pokemon)
  
    // console.log(pokemon)
  return (
    <div className="pokeCard">
        
       <Link className='slink' to= {`/pokemon/${name}`}>{name}</Link>
        
    </div>
  )
}
