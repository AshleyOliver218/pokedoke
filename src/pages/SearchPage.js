import "./SearchPage.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SearchPage() {
  const [pokeName, setPokeName] = useState("");
  const [pokemonFound, setPokemonFound] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
    id: ""
  });

  const searchAllPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`).then(
      (response) => {
        setPokemon({
          name: pokeName,
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
        setPokemonFound(true)
      }
    ).catch(err =>{
      console.log('nothing found')
      setPokemonFound(false)

    })
  };


  let backimgURL=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`
  let frontShinyimgURL =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`
  let backShinyimgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${pokemon.id}.png`
  return (
    <div className="Search-page">
      <div className="TitleSection">
        <h1>Search Pokemon</h1>
        <input
          type="text"
          onChange={(e) => {
            setPokeName(e.target.value);
          }}
        />
        <button onClick={searchAllPokemon}>Search</button>
      </div>
      <div className="DisplaySection">
        {!pokemonFound ? (
          <h2>Search using a valid pokemon name</h2>
        ) : (
          <>
          <h1>{pokemon.name}</h1>
          <img alt='pokemon front' src={pokemon.img}/><img alt='pokemon back' src={backimgURL} /><img alt='shiny front' src={frontShinyimgURL}/><img alt='shiny back' src={backShinyimgURL}/>
          <h3>Species: {pokemon.species}</h3>
          <h3>Type: {pokemon.type}</h3>
          {/* <ul>Abilities: {pokemon.abilities.map((ability, i) => {
              return ( 
                <li></li>)
          })}</ul> */}
          </>
        )}
      </div>
    </div>
  );
}
