import axios from 'axios';
import React, { useEffect, useState } from 'react'
import getRandomNumber from '../customhooks/useRandom';
import Residents from './Residents';
export const Locations = () => {
    const [location, setLocation] = useState()


    useEffect( () => {
    const randomLoc = getRandomNumber()
    const URL = `https://rickandmortyapi.com/api/location/${randomLoc}`
    axios.get(URL)
    .then(res => setLocation(res.data))
    .catch(err => console.log(err))

    }, [])
console.log(location);
return (
    <div>
        <h2>Location: {location?.name} Id: {location?.id}</h2>
        <h3>Type: {location?.type}</h3>
        <h3>Dimension: {location?.dimension}</h3>
        <span>Population: {location?.residents.length}</span>
        {location?.residents.map(urlResident => (
            <Residents 
            key={urlResident}
            urlResident={urlResident}/>
        ) )}
        <div>
        </div>

    </div>

)
}
export default Locations
