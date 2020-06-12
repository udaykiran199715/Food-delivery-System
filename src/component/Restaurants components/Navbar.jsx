import React from 'react'
import {Link} from 'react-router-dom'


export default function Navbar() {
    return(
        <div className='container'>


<nav class="navbar navbar-expand-lg navbar-light bg-light">
<img src="logo.png" className="navbar-brand" alt='Packed Yummies' />

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
  {/* Navabar */}
        </div>
    )
}