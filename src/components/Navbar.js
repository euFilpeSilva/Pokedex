import React, { useContext } from 'react'
import { Heart } from 'phosphor-react';
import FavoriteContext from '../contexts/favoriteContext';

const Navbar = () => {
const {favoritePokemons} = useContext(FavoriteContext)
const logoImg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

    return (
            <nav className='bg-gray-700 w-[100%] mb-5 pt-3'>
                <div>
                    <img 
                    alt="Logo"
                    src={logoImg}
                    className='navbar-img'
                   />
                </div>
                <div className=' flex gap-2 mt-5 absolute right-5 items-center justify-center'>
                     <div className='absolute right-4'>
                         {favoritePokemons.length}
                     </div>
                <Heart size={42} color="red" weight="fill" />
                </div>
            </nav>

    )
}

export default Navbar;