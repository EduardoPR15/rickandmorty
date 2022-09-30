import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Residents = ({urlResident}) => {

const [resident, setResident] = useState()
useEffect(() => {
    axios.get(urlResident)
    .then(res =>setResident(res.data))
    .catch(err => console.log(err))
},[])
console.log(resident);
return (
    <div>Residents
        <h2></h2>
        <div> <h3>{resident?.status}</h3> </div>
        <div>
<img src={resident?.image} alt="" />
        </div>

       <div>
        <ul>
            <li>Name: {resident?.name} id: {resident?.id}</li>
            <li>origin: {resident?.origin.name}</li>
            <li>species: {resident?.species}</li>
            <li>type: {resident?.type}</li>
            <li>Gender: {resident?.gender}</li>
        </ul>
        </div>
    </div>
)
}

export default Residents