import React from 'react'
import {connect} from 'react-redux'
import { addQuantity, subQuantity } from '../Redux/Action'


class BillCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            qty: 1
        }
    }

    handleReduce = () => {
        let { qty } = this.state
        if (qty >= 1) {
            this.setState({
                qty: qty - 1
            })
        }

        this.props.subQuantity(qty)

    }

    handleIncrease = () => {
        let { qty } = this.state

        this.setState({
            qty: qty + 1

        })
        this.props.addQuantity(qty)
    }

    render() {
        let { data } = this.props
        return (
            <div className="row py-2" >
                <div className='text-truncate col-3 offset-2' style={{ fontSize: '30px' }}>
                    {data.itemName}
                </div>
                <div style={{ margin: '1px solid black col-1 mt-1', fontSize: '20px' }}>
                    <span className='px-2 bg-danger' onClick={() => this.handleReduce()}>-</span> <span className='px-3'>{this.state.qty}</span><span className='px-2 bg-success' onClick={() => this.handleIncrease()}>+</span>
                </div>
                <div className='col-1 ' style={{ fontSize: '20px' }}>
        {data.itemPrice} <small className='text-muted'>x{this.state.qty}</small>
                </div>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    addQuantity  : (payload) => dispatch(addQuantity(payload)),
    subQuantity  : (payload) => dispatch(subQuantity(payload))
 })


export default connect(null,mapDispatchToProps)(BillCard)

