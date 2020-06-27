import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Restaurants components/Navbar'
import Footer from './Footer'

class Search extends Component {
    render() {
        let {productArr} = this.props
        return (
            <div>
                <Navbar />

                <div className='container my-5'>
                    <div className='d-flex flex-row' >
                        <div className='row mr-5' style={{ border: '1px solid lightgrey', flex:1 }}>
                            <div className='col-1'>
                                <i class="fas fa-search ml-5 mt-4" style={{ color: 'brown', fontSize: '23px' }} />
                            </div>
                            <div className='col-11'>
                                <input type='text' className='form-control py-4 mt-3 ml-2' style={{ fontSize: '23px', border: 'none' }} placeholder='Search For Restaurants Or Dishes' />
                            </div>
                        </div>
                        <div className='ml-3' >
                            <button className='btn' style={{border:'none'}}>
                            <span style={{fontSize:'30px'}}>X</span>   <br/>
                            ESC
                            </button>
                        </div>
                    </div>
                    <div className='mt-5'>
                         {productArr?.map()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    productArr: state.productArr
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
