import React from 'react'


class BillCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            qty: 1
        }
    }

    render() {
        let { data } = this.props
        return (
            <div className="row" >
                <div className='text-truncate col-3 offset-2' style={{fontSize:'30px'}}>
                    {data.itemName}
                </div>
                <div style={{margin:'1px solid black col-1', fontSize:'20px'}}>
                    <span className='p-2 bg-danger'>-</span> <span className='p-3'>{this.state.qty}</span><span className='p-2 bg-success'>+</span>
                </div>
                <div className='col-1 p-2'  style={{fontSize:'30px'}}>
                    {data.itemPrice}
                </div>
            </div>
        )
    }

}

export default BillCard