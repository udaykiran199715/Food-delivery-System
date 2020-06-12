import React from 'react'

export default function TopBar() {
    return(
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-2 '>
                    <img src='logo.png' />
                </div>
                <div className='col-7 offset-2 mt-4'>
                    <h1 className='display-4 font-weight-bolder text-serif' style={{ color:'brown'}} >Packed Yummies</h1>
                    {/* sansserif */}
                </div>

            </div>

            <hr/>
        </div>
    )
}