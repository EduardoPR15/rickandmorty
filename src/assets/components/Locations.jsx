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
if(Residents === false){
    console.log("ola");
}
//console.log(Residents);
return (
    <div >
    <div className="gunTop">
        <img src="../mi portada.jpg" alt="" />
    </div>
        <div className="Font">
        <form onSubmit={handleSubmit}>
            <input  placeholder='type a location' id='idLocation' type="text"  onChange={handleChange}/>
            <button className="buttonSearch">Search</button>
        </form>
       
        </div> 
        <div className="gun"></div>
        <div className="list">
            <Filterlist suggestedList={suggestedList} setSearchInput={setSearchInput}/>
        
        </div>
        <Navbar searchInput={searchInput}/>

            {
                hasError ?
                <Errordiv/>
                : 
                <>
        <div className='cardLocation'>
            <h2>{location?.name} Id: {location?.id}</h2>
            <h3>Type: {location?.type}</h3>
            <h3>Dimension: {location?.dimension}</h3>
            <span>Population: {location?.residents.length}</span>
        </div>
                    
                    
                
                {
                    Residents ?  
                <div className="BoxResident">
                            {location?.residents.map(urlResident => (
                                <Residents 
                                key={urlResident}
                                urlResident={urlResident}/> ) )}
                        </div>
                            :
                        <div className="prueba1">

                    </div>}
        
        </>
            }
        

    </div>

)
}
export default Locations
