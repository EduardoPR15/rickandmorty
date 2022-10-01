import React, { useState } from 'react'
import botonsubmit from './Locations'

const Searchform = ({searchInput, handleSubmit}) => {


console.log(handleSubmit);
return (
    <div>
        <form onSubmit={handleSubmit}>
            <input placeholder='type a location' id='idLocation' type="text" />
            <button>Search</button>
        </form>
    </div>
)
}

export default Searchform