import React from 'react'
import {connect} from 'react-redux'
import Navbar from './Restaurants components/Navbar'
import InfoCard from './Restaurants components/InfoCard'
import Footer from './Footer'

 function Restaurants(props) {
     let {productArr,city} = props

    return (
        <div className='container-fluid'>
             <Navbar />
             <div className='container-fluid my-5' style={{backgroundColor:'lightcyan'}}>
                 <div className='row'>
                 {productArr?.filter(item => {
                     if(city === 'All') {
                         return item
                     }
                     else if(item.city === city) {
                         return item
                     }

                 }).map(item => <InfoCard data={item} />)}
                 </div>
             </div>
             <Footer />

        </div>
    )
}


// const mapDispatchToProps = dispatch => ({
//     selectCity  : (payload) => dispatch(selectCity(payload))
//  })



const mapStateToProps = state => ({
    productArr: state.productArr,
    city: state.city
})

export default connect(mapStateToProps,null)(Restaurants)
