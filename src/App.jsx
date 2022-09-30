import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import Locations from './assets/components/Locations';
import Navbar from './assets/components/Navbar';


function App() {



  return (
    <div className="App">
      <Navbar />
      <Locations />
    </div>
  )
}

export default App
