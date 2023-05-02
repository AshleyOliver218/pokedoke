import React from 'react'
import PokeInfo from '../../components/PokeInfo'
import './SinglePokemon.css'

export default function SinglePokemon({ name }) {
  return (
    <div className='PokeInfo-container'>
      <PokeInfo />
    </div>
  )
}
