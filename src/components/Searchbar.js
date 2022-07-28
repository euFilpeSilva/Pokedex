import React, { useState } from 'react';
import { searchPokemon } from '../api';

const Searchbar = () => {
    const [search, setSearch] = useState("valor")
    const [pokemon, setPokemon] = useState()

    const onChangeHandler = (e) => {
    setSearch(e.target.value)

   }

    const onButtonClickHandler = () => {
        onSearchHandler(search)
   }

   const onSearchHandler = async (pokemon) => {  
    const result = await searchPokemon(pokemon)
    setPokemon(result)
   }

    return(
       <div className='searchbar-container'>
           <div className='searchbar'>
                <input placeholder="Buscar pokemon" onChange={onChangeHandler}/>              
           </div> 
           <div >
                <button className='search-btn' onClick={ onButtonClickHandler }> Buscar </button>
           </div>
           {pokemon ? (
            <div>
                <div>{pokemon.name}</div>
                <div>Peso: {pokemon.weight}</div>
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
            </div>
           ): null}
       </div>
    )
}

export default Searchbar;