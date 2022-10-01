import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import Locations from './assets/components/Locations';
import Navbar from './assets/components/Navbar';


function App() {



  return (
    <div className="App">
      <iframe src="https://giphy.com/embed/n5GXsYKoe1F3eFcRgq" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/rick-morty-portal-gun-shoot-funny-alex-bradt-n5GXsYKoe1F3eFcRgq"></a></p>

      <Locations />
    </div>
  )
}

export default App
