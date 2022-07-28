import React, { useState } from 'react';

const Searchbar = () => {
    const [search, setSearch] = useState("valor")
   const onChangeHandler = (e) => {
    console.log(`pokemon ${e.target.value}`);
    setSearch(e.target.value)
   }

   const onButtonClickHandler = () => {
    console.log(`pokemon ${search}`);
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