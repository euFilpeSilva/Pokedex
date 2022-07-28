import React from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';


const App =() => {
  return (
    <div className='App'>
        <Navbar/>
        <Searchbar/>
    </div>
  )
}

export default App;
