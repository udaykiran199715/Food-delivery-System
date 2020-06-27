import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Restaurants components/Navbar'
import Footer from './Footer'
import {Redirect} from 'react-router-dom'
import InfoCard from './Restaurants components/InfoCard'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            esc:false
        }
    }

    handleChange = (e) => {
        var x =''
        if (e.target.value.length>=1) {
        //   x=''
            for(let i=0;i<e.target.value.length;i++) {
                if(i==0) {
                    x += e.target.value[0].toUpperCase()
                }else {
                    x+= e.target.value[i]
                }
               
            }
            // e.target.value = e.target.value[0].toUpperCase()
        }
      console.log(x)
        this.setState({ inputValue: x })
    }

    handleClick = () => {
        this.setState({
            esc:true
        })
    }
    render() {
        let { productArr } = this.props
        if(this.state.esc) {
            return (

                <Redirect to='/restaurants' />
            )
        }
        return (
            <div>
                <Navbar />

                <div className='container my-5'>
                    <div className='d-flex flex-row ' >
                        <div className='row mr-5' style={{ border: '1px solid lightgrey', flex: 1 }}>
                            <div className='col-1'>
                                <i class="fas fa-search ml-5 mt-4" style={{ color: 'brown', fontSize: '23px' }} />
                            </div>
                            <div className='col-11'>
                                <input type='text' onChange={(e) => this.handleChange(e)} className='form-control py-4 mt-3 ml-2' style={{ fontSize: '23px', border: 'none' }} placeholder='Search For Restaurants Or Dishes' />
                            </div>
                        </div>
                        <div className='ml-3' >
                            <button className='btn' style={{ border: 'none' }} onClick={()=> this.handleClick()}>
                                <span style={{ fontSize: '30px' }}>X</span>   <br />
                            ESC
                            </button>
                        </div>
                    </div>
                    <div className=' container-fluid' style={{ backgroundColor: '#dee2ff' }}>
                        <div className='container row mt-5'>

                        {/* {productArr?.map(item => item.types.includes(this.state.inputValue)   && this.state.inputValue && <InfoCard key={item.name} data={item} path='restaurants' />) } */}
                        {this.state.inputValue && productArr?.filter(item => {
                            if(item.name.includes(this.state.inputValue) ) {
                                return item
                            }
                            if(item.types.includes(this.state.inputValue)) {
                                return item
                            }
                        }).map(elem => <InfoCard key={elem.name} data={elem} path='restaurants' /> )}
                         </div>
                    
                        {/* { productArr.map(item => item.items.map(elem => elem.itemName.includes(this.state.inputValue)  && item)).map(ele => <div>{ele.name}</div>)} */}
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
