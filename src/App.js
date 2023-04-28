import './App.css';
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './pages/Home'
import AllPokemon from './pages/AllPokemon'
import {useState, useEffect} from 'react'
import PokemonList from './components/PokemonList'
import SinglePokemon from './pages/SinglePokemon';
import SearchPage from './pages/SearchPage';
import {pokemonArray, featuredPokemon} from './services/data'

function App() {
 
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pokemon' element={<AllPokemon/>}/>
        <Route path='/pokemon/:name' element={<SinglePokemon/>}/>
        <Route path='/searchpage' element={<SearchPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
