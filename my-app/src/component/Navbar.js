import React from 'react'
import {logo} from '../../public/log512.png'

export const Navbar = () => {
  return (
    <div className='w-full bg-info'>
        <div>
            <img src={logo} alt='logo' />
        </div>    
    </div>
  )
}



export default Navbar;