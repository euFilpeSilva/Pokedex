import React, { useContext } from 'react';
import { Heart } from 'phosphor-react';
import FavoriteContext from '../contexts/favoriteContext'

const Pokemon = (props) => {
    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext)
    const {pokemon} = props
    const onHeartClick = () => {
       updateFavoritePokemons(pokemon.name)
    }
    const hearth = favoritePokemons.includes(pokemon.name) ? <Heart size={30} color="red" weight="fill" /> : <Heart size={30} color="black" weight="fill" />

    console.log("pokemon", pokemon);
    return(
            <div className=' w-full bg-red-400'>
                <div className='pokemon-card bg-gray-700'>
                    <div className='pokemon-image-container'>
                        <img alt={pokemon.name} src={pokemon.sprites.front_default} className="pokemon-image" />
                    </div>
                    <div className="card-body">
                        <div className='card-top'>
                            <h3> {pokemon.name} </h3>
                            <div> {pokemon.id} </div>
                        </div>
                        <div className='card-bottom'>
                            <div className='pokemon-type'>
                                <div> {pokemon.types.map((type, index) => {
                                    return(
                                        <div key={index} className="pokemon-type-text"> { type.type.name } </div>
                                    )
                                })}
                                </div>
                                <button className='pokemon-heart-btn' onClick={onHeartClick}>
                                    {hearth}
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
    )
}
export default Pokemon;