import React from 'react'
import PokemonList from '../../components/PokemonList/PokemonList'
import './AllPokemon.css'

export default function AllPokemon({ pokemon }) {


  return (
    <div className='the-list-container'>
      <PokemonList />
    </div>
  )
}
