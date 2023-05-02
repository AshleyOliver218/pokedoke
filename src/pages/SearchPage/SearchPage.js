import "./SearchPage.css";
import { useState } from "react";
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
          moves: response.data.moves,
          game_indices: response.data.game_indices
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
  let otherFrontimgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`
  let homeFrontimgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`
  let otherFrontShinyimgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${pokemon.id}.png`
  let officialimgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
  let officialShinyimgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokemon.id}.png`
  let capital = pokeName.toUpperCase()
  return (
    <div className="Search-page">
      <div className="TitleSection">
        <h1 className="search-pokemon">Search Pokemon:</h1>
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
          <h2 className="search-statement">Search using a valid pokemon name</h2>
        ) : (
          <>
            <div className="image-container">
              <div className="image-display">
                <img className="img-a" alt='pokemon front' src={pokemon.img} width='200px' height='200px' />
                <img className="img-b" alt='pokemon back' src={backimgURL} width='200px' height='200px' />
                <img className="img-c" alt='shiny front' src={frontShinyimgURL} width='200px' height='200px' />
                <img className="img-d" alt='shiny back' src={backShinyimgURL} width='200px' height='200px' />
                <img className="img-e" alt='pokemon front' src={otherFrontimgURL} />
                <img className="img-f" alt='pokemon front' src={homeFrontimgURL} />
                <img className="img-g" alt=' shiny front' src={otherFrontShinyimgURL} />
                <img className="img-h" alt='pokemon front' src={officialimgURL} />
                <img className="img-i" alt='shiny front' src={officialShinyimgURL} />
              </div>
            </div>
            <div className="info-container">
              <div className="info-display">
                <h1 className="chosen-pokemon">{capital} I choose you!</h1>
                <h3>Species: {pokemon.species}</h3>
                <h3 className="type-container">Type: {[pokemon.types.map((types, i) => {
                  return (<h4 className={types.type.name} key={i}>{types.type.name}</h4>)
                })]}</h3>
                <h4>Hp: {pokemon.hp}</h4>
                <h4>Attack: {pokemon.attack}</h4>
                <h4>Defense: {pokemon.defense}</h4>
                <div className="AList-container">
                  <ul>Abilities unique to {capital}: {[pokemon.abilities.map((ability, i) => {
                    return (
                      <li key={i}>{pokemon.abilities[i].ability.name}</li>
                    )
                  })]}
                  </ul>
                </div>
                <div className="AList-Container">
                  <ul>{capital}'s Potential Abilities: {[pokemon.moves.map((ability, i) => {
                    return (
                      <li key={i}>{pokemon.moves[i].move.name}</li>
                    )
                  })]}

                  </ul>
                </div>
                <div className="AList-Container">
                  <ul>{capital}'s Game Appearences: {[pokemon.game_indices.map((game, i) => {
                    return (
                      <li key={i}>{pokemon.game_indices[i].version.name}</li>
                    )
                  })]}

                  </ul>
                </div>
              </div>

            </div>
          </>
        )}
      </div>
    </div>
  );
}
