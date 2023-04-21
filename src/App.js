import './App.css';
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './pages/Home'
import AllPokemon from './pages/AllPokemon'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pokemon' element={<AllPokemon/>}/>
      </Routes>
    </div>
  );
}

export default App;
