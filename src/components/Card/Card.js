import React from 'react'
import {Link} from 'react-router-dom'

import './Card.css' 

export default function Card({pokemon}) {
  const {name, url, id} = {
    name: pokemon.name,
    url: `https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`,
    id: ""
  }
  

  return (
    <div className="pokeCard">
        
       <Link className='slink' to= {`/pokemon/${name}`}>{name}</Link>
        
    </div>
  )
}
