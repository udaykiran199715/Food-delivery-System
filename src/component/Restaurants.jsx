import React from 'react'
import {connect} from 'react-redux'
import Navbar from './Restaurants components/Navbar'
import InfoCard from './Restaurants components/InfoCard'
import Footer from './Footer'

 function Restaurants(props) {
     let {productArr} = props
    return (
        <div className='container-fluid'>
             <Navbar />
             <div className='container-fluid my-5' style={{backgroundColor:'lightcyan'}}>
                 <div className='row'>
                 {productArr?.map(item => <InfoCard data={item} />)}
                 </div>
             </div>
             <Footer />

        </div>
    )
}

const mapStateToProps = state => ({
    productArr: state.productArr
})

export default connect(mapStateToProps,null)(Restaurants)
