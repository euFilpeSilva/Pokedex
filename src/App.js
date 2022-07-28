import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import  Pokedex  from './components/Pokedex';
import { getPokemons, getPokemonData } from './api';


const App =() => {
  const [loading, setLoading] = useState(false) 
  const [pokemons, setPokemons] = useState([]) 

 const fetchPokemons = async () => {
  try {
    setLoading(true)
    const result = await getPokemons()
    const promises = result.results.map(async (pokemon) => {
      return await getPokemonData(pokemon.url)
    })

    const results = await Promise.all(promises)
    setPokemons(results);
    setLoading(false);
  } catch (error) {
    console.log("fetchPokemons error", error);
  }
 }

  useEffect(() => {
    console.log('Carregou');
    fetchPokemons();
  },[])

  return (
    <div>
        <Navbar/>
        <Searchbar />
        <Pokedex pokemons={pokemons} loading={loading}/>
      <div className='App'>
      </div>
    </div>
  )
}

export default App;
