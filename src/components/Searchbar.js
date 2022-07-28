import React, { useState } from 'react';

const Searchbar = () => {
    const [search, setSearch] = useState("valor")
   const onChangeHandler = (e) => {
    console.log(`pokemon ${e.target.value}`);
    setSearch(e.target.value)
   }

    return(
       <div className='searchbar-container'>
           <div className='searchbar'>
                <input placeholder="Buscar pokemon" onChange={onChangeHandler}/>
                {search}
           </div> 
       </div>
    )
}

export default Searchbar;