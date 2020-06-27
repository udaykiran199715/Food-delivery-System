import React from 'react'
import { connect } from 'react-redux'
import { addQuantity, subQuantity } from '../Redux/Action'
import PriceCard from './PriceCard'


class BillCard extends React.Component {


    render() {
        let { cartArr, rest, total } = this.props
        let grandTotal = Math.ceil(total + 34 + ((5 / 100) * total))
        return (
            <div className='container-fluid' style={{ backgroundColor: '#dee2ff' }}>


                <div className='container-fluid py-5'>
                    <div className='row' >
                        <div className='col-6 offset-2'>

                        </div>
                        <div className='col-3' style={{ backgroundColor: 'white' }}>
                            <div className='d-flex flex-row'>
                                <div>
                                    <img src={rest.image} className='img-fluid p-2' width='120px' height='100px' alt="image" />
                                </div>
                                <div className='ml-3 mt-3'>
                                    <h5 className='font-weight-bold'>{rest.name}</h5>
                                    <hr style={{ border: '1px solid black' }} />
                                </div>

                            </div>

                            {cartArr?.map(elem => <PriceCard item={elem} />)}
                            <div>
                                <p className='font-weight-bold'>Bill details</p>
                                <div className='d-flex flex-row'>
                                    <div style={{ flex: 2 }}>
                                        <p>Item Total</p>
                                    </div>
                                    <div>
                                        <p>₹{total}</p>
                                    </div>
                                </div>
                                <div className='d-flex flex-row'>
                                    <div style={{ flex: 2 }}>
                                        <p>Delivery Fee</p>
                                    </div>
                                    <div>
                                        <p>₹34</p>
                                    </div>
                                </div>
                                <hr style={{ border: '1px solid lightgrey' }} />
                                <div className='d-flex flex-row'>
                                    <div style={{ flex: 2 }}>
                                        <p>Taxes and Charges</p>
                                    </div>
                                    <div>
                                        <p>₹{(5 / 100) * total}</p>
                                    </div>
                                </div>
                                <hr style={{ border: '2px solid black' }} />
                                <div className='d-flex flex-row'>
                                    <div style={{ flex: 2 }}>
                                        <h6 className='font-weight-bold'>TO PAY</h6>
                                    </div>
                                    <div>
                                        <p className='font-weight-bold'>₹{grandTotal}</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )


    }
}

const mapStateToProps = state => ({
    cartArr: state.cartArr,
    rest: state.rest,
    total: state.total
})

// const mapDispatchToProps = dispatch => ({
//     addQuantity  : (payload) => dispatch(addQuantity(payload)),
//     subQuantity  : (payload) => dispatch(subQuantity(payload))
//  })


export default connect(mapStateToProps, null)(BillCard)

