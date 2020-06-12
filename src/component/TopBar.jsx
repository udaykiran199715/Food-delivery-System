import React from 'react'

export default function TopBar() {
    return(
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-2 '>
                    <img src='logo.png' />
                </div>
                <div className='col-7 offset-2 mt-4'>
                    <h1 className='display-4 font-weight-bolder' style={{fontFamily:'sans-serif'}} >Packed Yummies</h1>
                </div>

            </div>

            <hr/>
        </div>
    )
}