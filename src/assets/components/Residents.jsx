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
        <h2>{}</h2>
       
        <ul>
            <li>Name: id:</li>
            <li>origin:</li>
            <li>species</li>
            <li>type:</li>
            <li>planet</li>


        </ul>
    </div>
)
}

export default Residents