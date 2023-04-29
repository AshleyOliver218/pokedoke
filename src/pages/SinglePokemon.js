import React from 'react'
import PokeInfo from '../components/PokeInfo'

export default function SinglePokemon({name}) {
  return (
    <div>
      <PokeInfo name={name}/>
    </div>
  )
}
