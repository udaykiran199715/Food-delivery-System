import React from 'react'
import Navbar from './Restaurants components/Navbar'
import Footer from './Footer'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PriceCard from './PriceCard'
import BillCard from './BillCard'

class Cart extends React.Component {
    render() {
        let { isAuth,cartArr , quantity} = this.props
        if (!isAuth) {
            return (
                <Redirect to='/login' />
            )
        }

        console.log(cartArr, quantity)


// console.log(cartArr)
        // let total = cartArr?.reduce((acc,cum) => Number(acc.itemPrice)+Number(cum.itemPrice))
        if(cartArr.length != 0) {
            var total = 0

        }else{
            return (
                <>
                <Navbar />
                <div className='text-center my-5' style={{fontSize:'25px', color:'red'}} >
                        No items added in the cart
                </div>
                <Footer />
                </>
            )
        }
        return (
            <div>
                <Navbar />
                <BillCard/>
                <Footer />
            </div>
        )
    }
}


// const mapDispatchToProps = dispatch => ({
//     selectCity  : (payload) => dispatch(selectCity(payload))
//  })



const mapStateToProps = state => ({
    cartArr: state.cartArr,
    isAuth: state.isAuth,
    quantity: state.quantity
})

export default connect(mapStateToProps, null)(Cart)

