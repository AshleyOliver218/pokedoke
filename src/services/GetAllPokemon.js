import React from 'react'
import axios from 'axios'



  const GetAllPokemon = async() => {
    try {
     const response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
     return response.data
    }catch(e){
       console.error(e)
    }
   }

 export default GetAllPokemon

