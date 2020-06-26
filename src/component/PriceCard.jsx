import React from 'react'
import { connect } from 'react-redux'
import {addQuantity, subQuantity} from '../Redux/Action'

function PriceCard(props) {
    let { item, addQuantity, subQuantity, total} = props
    return (
        <div className='container my-2'>
            <div className='d-flex flex-row '>
                <div className='pr-3' style={{flex:1}}>
                    <p className='font-weight-bold'>{item.itemName}</p>
                </div>
                <div className='pr-3 '>
                <button className=' font-weight-bold text-success' style={{ border: '1px solid grey' }}><span className='mr-2 text-secondary' onClick={()=> subQuantity(item.id)}  >-</span>{item.qty}<span  className='ml-2 text-success'  onClick={()=> addQuantity(item.id)} >+</span></button>
                </div>
                <small className='pl-2'>
                ₹{item.itemPrice}
                </small>
            </div>
          
          
        </div>
    )
}
const mapStateToProps = state => ({
    total:state.total
})

const mapDispatchToProps = dispatch => ({
    addQuantity  : (payload) => dispatch(addQuantity(payload)),
    subQuantity  : (payload) => dispatch(subQuantity(payload))
 })

export default connect(null,mapDispatchToProps)(PriceCard)
