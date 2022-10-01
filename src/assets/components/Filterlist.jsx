import React, { useState } from 'react'

const Filterlist = ({suggestedList, setSearchInput}) => {
    console.log(suggestedList);
const handleClick = id => setSearchInput(id)
  return (
    <div> <h2>list</h2>
    <ul>
        {
            suggestedList?.map(location => (
<li key={location.id } onClick={() => handleClick(location.id)}> {location.id} {location.name}</li> 
            ))
        }
    </ul>

    </div>
  )
}

export default Filterlist