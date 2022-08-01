import React, { useContext } from 'react'
import { Heart } from 'phosphor-react';
import FavoriteContext from '../contexts/favoriteContext';
import { length } from './../../node_modules/tailwindcss/src/util/dataTypes';

const Navbar = () => {
const {favoritePokemons} = useContext(FavoriteContext)
const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

    return (
            <nav>
                <div>
                    <img 
                    alt="Logo"
                    src={logoImg}
                    className='navbar-img'
                   />
                </div>
                <div>
                {favoritePokemons.length}
                <Heart size={30} color="red" weight="fill" />
                </div>
            </nav>

    )
}

export default Navbar;