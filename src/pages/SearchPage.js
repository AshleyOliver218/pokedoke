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
          types: response.data.types,
          id: response.data.id,
          abilities: response.data.abilities,
          moves: response.data.moves
        })
        setPokemonFound(true)
      }
    ).catch(err => {
      console.log('nothing found')
      setPokemonFound(false)

    })
  };


  let backimgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png`
  let frontShinyimgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`
  let backShinyimgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${pokemon.id}.png`
  let capital = pokeName.toUpperCase()
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

            <div className="image-display">
              <img alt='pokemon front' src={pokemon.img} />
              <img alt='pokemon back' src={backimgURL} />
              <img alt='shiny front' src={frontShinyimgURL} />
              <img alt='shiny back' src={backShinyimgURL} />
            </div>
            <div className="info-display">
              <h1>{capital} I choose you!</h1>
              <h3>Species: {pokemon.species}</h3>
              <h3>Type: {[pokemon.types.map((types,i)=>{
                return(<div className={types.type.name}>{types.type.name}</div>)
              })]}</h3>
              <h4>Hp: {pokemon.hp}</h4>
              <h4>Attack: {pokemon.attack}</h4>
              <h4>Defense: {pokemon.defense}</h4>
              <div className="AList-container">
                <ul>Abilities unique to {pokeName}: {[pokemon.abilities.map((ability, i) => {
                  return (
                    <li key={i}>{pokemon.abilities[i].ability.name}</li>
                  )
                })]}
                </ul>
              </div>
              <div className="AList-Container">
                <ul>{pokeName}'s Potential Abilities: {[pokemon.moves.map((ability, i) => {
                  return (
                    <li key={i}>{pokemon.moves[i].move.name}</li>
                  )
                })]}

                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
