import axios from 'axios';
import React, { useEffect, useState } from 'react'
import getRandomNumber from '../customhooks/useRandom';
import Navbar from './Navbar';
import Residents from './Residents';
export const Locations = () => {
    //locacion
    const [location, setLocation] = useState()
//info de buscador
const [searchInput, setSearchInput] = useState('')
//sugerencias
const [suggestedList, setSuggestedList] = useState()

    useEffect( () => {
    const randomLoc = getRandomNumber()
    const URL = `https://rickandmortyapi.com/api/location/${randomLoc}`
    axios.get(URL)
    .then(res => setLocation(res.data))
    .catch(err => console.log(err))

    }, [])
//console.log(location);
const handleSubmit = event => {
event.preventDefault()
setSearchInput(event.target.idLocation.value)
}

console.log(searchInput);
return (
    <div>
        <div>
        <form onSubmit={handleSubmit}>
            <input placeholder='type a location' id='idLocation' type="text" />
            <button>Search</button>
        </form>
        </div>
        <Navbar searchInput={searchInput}/>
        <div>
            <h2>Location: {location?.name} Id: {location?.id}</h2>
            <h3>Type: {location?.type}</h3>
            <h3>Dimension: {location?.dimension}</h3>
            <span>Population: {location?.residents.length}</span>
            {location?.residents.map(urlResident => (
                <Residents 
                key={urlResident}
                urlResident={urlResident}/> ) )}
        </div>

    </div>

)
}
export default Locations
