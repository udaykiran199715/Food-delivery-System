import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  let cities = ['Bangalore', 'Chennai', 'Hyderabad', 'Mumbai']
  return (

    <div className='container-fluid mt-3 shadow'>

      <div className='d-flex flex-row'>
        <div style={{ marginLeft: "200px" }} >
          <img src="logo.png" className="navbar-brand" alt='Packed Yummies' />
        </div>

        <div style={{ marginTop: "70px", fontSize: "25px" }}>
          <select className='px-4 py-2 bg-white'>
            <option>select city</option>
            {cities.map(item => (
              <option>{item}</option>
            ))}
          </select>
        </div>
        <div className='' style={{ marginTop: "70px", fontSize: "25px", marginLeft: "250px" }}>
          <div className='d-flex flex-row'>
            <div ><Link><i class="fas fa-search mx-4" style={{ color: 'brown' }}><span className='ml-3'>Search</span></i></Link> </div>
            <div ><Link><i class="fas fa-percentage mx-4" style={{ color: 'brown' }}><span className='ml-3'>Offers</span></i></Link> </div>
            <div ><Link><i class="fas fa-hands-helping mx-4" style={{ color: 'brown' }}><span className='ml-3'>Help</span></i></Link> </div>
            <div ><Link><i class="fas fa-id-badge mx-4" style={{ color: 'brown' }}><span className='ml-3'>Sign in</span></i></Link> </div>
            <div ><Link><i class="fas fa-shopping-cart mx-4" style={{ color: 'brown' }}><span className='ml-3'>Cart</span></i></Link> </div>
          </div>
        </div>

      </div>

    </div>
  )
}