import React from 'react'
import {Link} from 'react-scroll';
import logo from '../images/logo512.png';

function Navbar() {
  return (
    <div className='container'>
        
        <div class="nav">
          <div class="nav-header">
            <div class="nav-title">
            <Link to='main' className='logo'>
            <img src={logo} alt='logo' />
          </Link>
            </div>
          </div>
          <div class="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          
          <div class="nav-links">
            <Link href="#about" target="_blank">Github</Link>
            <Link href="http://stackoverflow.com/users/4084003/" target="_blank">Stackoverflow</Link>
            <Link href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</Link>
            <Link href="https://codepen.io/jo_Geek/" target="_blank">Codepen</Link>
            <Link href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar;