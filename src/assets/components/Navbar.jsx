import React, { useState } from 'react'
import Searchform from './Searchform'

const Navbar = ({searchInput}) => {

return (
    <div className='Navbar'>
        <h1>Navbar</h1>
        {/* <Searchform searcInput={searchInput} /> */}
        <a href="#Home">Home</a>
    </div>
)
}

export default Navbar