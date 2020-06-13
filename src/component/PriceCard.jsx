import React from 'react'

export default function PriceCard(props) {
    let { name} = { props }
    console.log(name)
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <h3 className='fontweight-bold'>{name}</h3>
                    <p className='text-muted'>₹ {''}</p>
                </div>
                <div className='col-2 offset-1'>
                    <button className='btn text-success'>ADD</button>
                </div>
            </div>
        </div>
    )
}