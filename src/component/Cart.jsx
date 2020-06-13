import React from 'react'
import Navbar from './Restaurants components/Navbar'
import Footer from './Footer'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import BillCard from './BillCard'

class Cart extends React.Component {
    render() {
        let { isAuth,cartArr } = this.props
        if (!isAuth) {
            return (
                <Redirect to='/login' />
            )
        }

        let total = cartArr?.reduce((acc,cum) => Number(acc.itemPrice)+Number(cum.itemPrice))

        return (
            <div>
                <Navbar />
                <div style={{textAlign  :'center',margin:"100px "}}> <>{cartArr?.map(item =>  <BillCard data={item} />)}
                <p style={{fontSize:'20px'}}>Total Bill: {total}</p>
                <button className='px-5 py-3 bg-success'>Proceed to pay </button>
                </>
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
    isAuth: state.isAuth
})

export default connect(mapStateToProps, null)(Cart)

