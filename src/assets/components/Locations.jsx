import axios from 'axios';
import React, { useEffect, useState } from 'react'
import getRandomNumber from '../customhooks/useRandom';
import Errordiv from './Errordiv';
import Filterlist from './Filterlist';
import Navbar from './Navbar';
import Residents from './Residents';
export const Locations = () => {
    //locacion
    const [location, setLocation] = useState()
//info de buscador
const [searchInput, setSearchInput] = useState('')
//sugerencias
const [suggestedList, setSuggestedList] = useState()
//error
const [hasError, setHasError] = useState(false)

    useEffect( () => {
    let id = getRandomNumber()
    if(searchInput){ 
        id = searchInput
        }
    const randomLoc = getRandomNumber()
    const URL = `https://rickandmortyapi.com/api/location/${id}`
    axios.get(URL)
    .then(res =>  {setHasError(false)
        setLocation(res.data)} )
    .catch(err => setHasError(true))

    }, [searchInput])
//console.log(location);
const handleSubmit = event => {
event.preventDefault()
setSearchInput(event.target.idLocation.value)
}
const handleChange = event =>{
    
    if(event.target.value === ''){
       return setSuggestedList()
    }
    const URL = `https://rickandmortyapi.com/api/location?name=${event.target.value}`
    axios.get(URL)
    .then(res => setSuggestedList(res.data.results) )
    .catch(err => console.log(err))
}

//console.log(suggestedList);
return (
    <div >
        
        <div>
        <form onSubmit={handleSubmit}>
            <input placeholder='type a location' id='idLocation' type="text"  onChange={handleChange}/>
            <button>Search</button>
        </form>
        <div>
            <Filterlist suggestedList={suggestedList} setSearchInput={setSearchInput}/>
        </div>
        </div>
        <Navbar searchInput={searchInput}/>

            {
                hasError ?
                <Errordiv/>
                : 
                <>
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
        </>
            }
        

    </div>

)
}
export default Locations
