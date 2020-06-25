import React from 'react'
import Navbar from './Restaurants components/Navbar'
import Footer from './Footer'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
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
                <div className='text-center my-5' style={{fontSize:'25px', color:'red'}}>
                        No items added in the cart
                </div>
                <Footer />
                </>
            )
        }

        return (
            <div>
                <Navbar />
                <div style={{textAlign  :'center',marginTop:"100px "}}>
               {cartArr?.map(item =>  <BillCard data={item} />)}
                 </div>

                 <div className='row text-center mb-4'>
                     <div className='col-5 offset-2'>
                     <p style={{fontSize:'30px', color:'brown'}}>Total Bill:  <nbr style={{marginLeft:'300px'}}>₹ {total * quantity}</nbr></p>
                <button className=' py-2 bg-success ' style={{color:'white', backgroundColor:'brown', fontSize:'20px', margin:'0px'}}>Proceed to pay </button>
                     </div>
                 </div>
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

