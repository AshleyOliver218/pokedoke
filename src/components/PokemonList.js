import GetAllPokemon from '../services/GetAllPokemon'
import { useState, useEffect } from 'react'
import './PokemonList.css'
import Card from './Card'
import Pagination from '../services/Pagination'
import axios from 'axios'
//import {Link} from 'react-router-dom'

export default function PokemonList() {
  const [pokemon, setPokemon] = useState(null)
  const [currentUrl, setCurrentUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextUrl, setNextUrl] = useState()
  const [previousUrl, setPreviousUrl] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    let cancel
    GetAllPokemon(currentUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c )
    }).then(response => {
      setLoading(false)
      setNextUrl(response.next)
      setPreviousUrl(response.previous)
      setPokemon(response.results)
      // console.log(response.previous)
    })
    return () => {
      cancel()
    }
  }, [currentUrl])
  
  function goToNextPage(){
    setCurrentUrl(nextUrl)
  }
  function goToPrevPage(){
    setCurrentUrl(previousUrl)
  }
 
  
if(loading) return "loading..."
  return (
    <div className='Pokemon-List'>
      <div className='list-container'>
      {pokemon ? pokemon.map((ele, i) => (
        <Card key={i} pokemon={ele}/>)) : <div>Not Found</div>}
      </div> 
      <Pagination
      goToNextPage={nextUrl ? goToNextPage : null}
      goToPrevPage={previousUrl ? goToPrevPage: null}/>
    </div>
  )
}
