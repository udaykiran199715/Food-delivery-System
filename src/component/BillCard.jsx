// import React from 'react'
// import {connect} from 'react-redux'
// import { addQuantity, subQuantity } from '../Redux/Action'
// import PriceCard from './PriceCard'


// class BillCard extends React.Component {
    

//     render() {
//         let { cartArr, subQuantity,addQuantity} = this.props
//         return (
//           <div className='container'>
//               {cartArr?.map(elem=> <PriceCard item ={elem} />)}

//           </div>
//         )
//     }

// }

// const mapStateToProps = state => ({
//     cartArr:state.cartArr
// })

// const mapDispatchToProps = dispatch => ({
//     addQuantity  : (payload) => dispatch(addQuantity(payload)),
//     subQuantity  : (payload) => dispatch(subQuantity(payload))
//  })


// export default connect(mapStateToProps,mapDispatchToProps)(BillCard)

