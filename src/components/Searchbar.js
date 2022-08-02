import React, { useState } from 'react';
import { searchPokemon } from '../api';

const Searchbar = (props) => {
    const {onSearch} = props;
    const [search, setSearch] = useState("valor")
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if(e.target.value.length === 0 ) {
            onSearch(undefined)
        }
    }
    
    const onButtonClickHandler = () => {
        onSearch(search)
    }
    
    
    return(
        <div className='searchbar-container'>
           <div className='searchbar'>
                <input placeholder="Buscar pokemon" onChange={onChangeHandler}/>              
           </div> 
           <div >
                <button className='search-btn' onClick={ onButtonClickHandler }> Buscar </button>
           </div>    
       </div>
    )
}

export default Searchbar;