import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home'
import AllPokemon from './pages/AllPokemon/AllPokemon'
import SinglePokemon from './pages/SinglePokemon/SinglePokemon';
import SearchPage from './pages/SearchPage/SearchPage';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/pokemon' element={<AllPokemon />} />
        <Route path='/pokemon/:name' element={<SinglePokemon />} />
        <Route path='/searchpage' element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
