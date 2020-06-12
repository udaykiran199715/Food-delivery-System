import React from 'react'

export default function Footer() {
    return(
        <div className='' style={{backgroundColor:'black'}}>
        <div className='row ' >
            <div className='col-2 offset-2'>
                <p className='mb-3 text-secondary font-weight-bold'>COMPANY</p>
                 <p className='text-white'>About us</p>
                 <p className='text-white'>Team</p>
                 <p className='text-white'>Carrers</p>
                 <p className='text-white'>Bug Bounty</p>
                 <p className='text-white'>Packed Super</p>
                 <p className='text-white'>Packed Daily</p>
            </div>
            <div className='col-2 '>
                <p className='mb-3 text-secondary font-weight-bold'>CONTACT</p>
                 <p className='text-white'>Help & Support</p>
                 <p className='text-white'>Partner with us</p>
                 <p className='text-white'>Ride with us</p>

            </div>
            <div className='col-2'>
                <p className='mb-3 text-secondary font-weight-bold'>LEGAL</p>
                 <p className='text-white'>Terms & Conditions</p>
                 <p className='text-white'>Refund and Cancellation</p>
                 <p className='text-white'>Privacy Policy</p>
                 <p className='text-white'>Cookie Policy</p>
                 <p className='text-white'>Offer Terms</p>
            </div>
            <div className='col-2'>
                 <div className='mb-3'>
                     <img src='appStore.png' width='200px' className='border-rounded'/>
                 </div>
                 <div className='mb-3'>
                     <img src='playStore.png'  width='200px' className='border-rounded'/>
                 </div>
            </div>
        </div>
    </div>
    )
}