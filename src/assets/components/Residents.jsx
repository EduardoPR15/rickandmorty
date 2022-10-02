import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Residents = ({urlResident}) => {

const [resident, setResident] = useState()
useEffect(() => {
    axios.get(urlResident)
    .then(res =>setResident(res.data))
    .catch(err => console.log(err))
},[])
let status = resident?.status
let dinamicClass = ""
//console.log(status);
function status1(status) {
    let dinamicClass = ""

if (status === "Alive") {
let dinamicClass = "Alive"
return dinamicClass
 }
if (status === "unknown") {
    let dinamicClass = "Unknown"
    return dinamicClass
}
 if (status === "Dead") {
   let dinamicClass ="Dead"
    return dinamicClass
}
return dinamicClass
}

const functionClass = status1(status)
//console.log(functionClass);
return (
    
    <div className='cardResident'>
 
        <div className={functionClass}>
             <h3>{resident?.status}</h3> </div>
        <div className='residentImage'>
                <img src={resident?.image} alt="" />
        </div>

        <div>
            <ul>
                <li>Name: {resident?.name} id: {resident?.id}</li>
                <li>origin: {resident?.origin.name}</li>
                <li>species: {resident?.species}</li>
                <li>type: {resident?.type}</li>
                <li>Gender: {resident?.gender}</li>
                <li>Episodes: {resident?.episode.length}</li>
            </ul>
        </div>
        
    </div>
    
)
}

export default Residents