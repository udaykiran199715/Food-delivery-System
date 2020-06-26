import React from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Footer from '../Footer'
import { addtoCart, addQuantity, subQuantity } from '../../Redux/Action'
import PriceCard from '../PriceCard'
import { Redirect } from 'react-router-dom'


class RestaurantInfo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            checkFlag: false
        }
    }




    handleCheckOut = () => {
        this.setState({
            checkFlag:true
        })
       
    }

    render() {
        let { match, productArr, isAuth, addtoCart, cartArr, addQuantity, subQuantity, total } = this.props
        // console.log(this.props.match)
        const item = productArr.find(item => item.name === match.params.name)

        if (!item) {
            return <div>Error 404 Not Found</div>
        }

        if(this.state.checkFlag) {
            
        return (
            <Redirect to='/cart' />
        )
        }

        // if(!isAuth) {
        //     return (
        //         <Redirect to ='/login' />
        //     )

        // }else {
        //     addtoCart()
        // }
        // console.log(item.items[0].category)
         console.log(cartArr)

        return (
            <div>
                <Navbar />

                <div className='container-fluid' >
                    <div className='row ' style={{ backgroundColor: 'rgb(4, 4, 39)' }}>
                        <div className='col-3 offset-1'>
                            <img width='500px' src={item.image} className='img-fluid p-4' alt='Restaurant Image' />
                        </div>
                        <div className='col-4'>
                            <h3 className='text-truncate text-white mt-5'>{item.name}</h3>
                            <p className='text-secondary'>{item.types}</p>
                            <p className='text-secondary'>{item.address}</p>
                            <div className='d-flex flex-row'>
                                <div className='text-white px-4' style={{ borderRight: '1px solid white' }}>
                                    <i class="fas fa-star ">{item.star}</i><br />
                                    <small className='text-secondary'>{item.ratings} ratings</small>
                                </div>
                                <div className='text-white px-4' style={{ borderRight: '1px solid white' }}>
                                    <p>{item.status}<br /><small className='text-secondary'>Delivery</small></p>
                                </div>
                                <div className='text-white px-2' >
                                    <p className='font-weight-bold'>{item.cost}<br /><small className='text-secondary'>Cost for two</small></p>

                                </div>


                            </div>
                        </div>
                        <div className='col-2 text-white my-5' style={{ border: "1px solid white" }}>
                            <h4>OFFER</h4>
                            <i className='fas fa-percentage mt-3 ' style={{ fontSize: '25px' }}> <small class='textCenter ml-2' style={{ fontSize: '15px' }}>33% off up to ₹50 + ₹25 to ₹100<br /> cashback with PayTM | Use...</small></i>
                            <i className='fas fa-percentage mt-3 ' style={{ fontSize: '25px' }}> <small class='textCenter ml-2' style={{ fontSize: '15px' }}>20% off upto ₹200 with Citi<br /> Bank Cards, once per week | Us...</small></i>
                        </div>

                    </div>

                    <div className='container my-5'>
                        <div className='d-flex flex-row'>
                            <div style={{ flex: 3 }}>
                                <h1 className='mb-4 ' style={{ marginLeft: '150px' }}>Biryanies:</h1>

                                {/* <p style={{ marginLeft: '200px' }}>{item.items.biryani.length} Items</p> */}
                                {/* {item.items.biryani.map(elem => <PriceCard data={elem} name={elem.itemName} price ={elem.itemPrice}/>)} */}
                                {item.items.filter(ele => ele.category === "Biryani" && ele).map(elem => <div className='container '>
                                    <div className='row'>
                                        <div className='col-3 offset-2'>
                                            <h5 className='fontweight-bold'>{elem.itemName}</h5>
                                            <p className='text-muted'>₹ {elem.itemPrice}</p>
                                        </div>
                                        <div className='col-2 offset-1'>
                                            {elem.qty === 0 ?
                                                <button className='btn text-success ' onClick={() => addtoCart(elem.id)} style={{ border: '1px solid green' }}>ADD</button>
                                                : <button className='btn font-weight-bold text-success' style={{ border: '1px solid green' }}><span className='mr-2 text-secondary' onClick={() => subQuantity(elem.id)} style={{ fontSize: '20px' }}>-</span>{elem.qty}<span className='ml-2 text-success' onClick={() => addQuantity(elem.id)} style={{ fontSize: '20px' }}>+</span></button>
                                            }
                                        </div>
                                    </div>
                                </div>)}
                                <hr style={{ border: '2px solid black', margin: '0px 170px', marginRight: '300px' }} />

                                <h1 className='my-4 ' style={{ marginLeft: '150px' }}>Family Packs:</h1>

                                {/* <p style={{ marginLeft: '200px' }}>{item.items.familyPacks.length} Items</p> */}
                                {item.items.filter(ele => ele.category === "FamilyPacks" && ele).map(elem => <div className='container'>
                                    <div className='row'>
                                        <div className='col-3 offset-2'>
                                            <h5 className='fontweight-bold'>{elem.itemName}</h5>
                                            <p className='text-muted'>₹ {elem.itemPrice}</p>
                                        </div>
                                        <div className='col-2 offset-1'>
                                            {elem.qty === 0 ?
                                                <button className='btn text-success ' onClick={() => addtoCart(elem.id)} style={{ border: '1px solid green' }}>ADD</button>
                                                : <button className='btn font-weight-bold text-success' style={{ border: '1px solid green' }}><span className='mr-2 text-secondary' onClick={() => subQuantity(elem.id)} style={{ fontSize: '20px' }}>-</span>{elem.qty}<span className='ml-2 text-success' onClick={() => addQuantity(elem.id)} style={{ fontSize: '20px' }}>+</span></button>
                                            }
                                        </div>
                                    </div>
                                </div>)}
                                <hr style={{ border: '2px solid black', margin: '0px 170px', marginRight: '300px' }} />

                                <h1 className='my-4' style={{ marginLeft: '150px' }}>Starters:</h1>

                                {/* <p style={{ marginLeft: '200px' }}>{item.items.starters.length} Items</p> */}
                                {item.items.filter(ele => ele.category === "Starters" && ele).map(elem => <div className='container '>
                                    <div className='row'>
                                        <div className='col-3 offset-2'>
                                            <h5 className='fontweight-bold'>{elem.itemName}</h5>
                                            <p className='text-muted'>₹ {elem.itemPrice}</p>
                                        </div>
                                        <div className='col-2 offset-1'>
                                            {elem.qty === 0 ?
                                                <button className='btn text-success ' onClick={() => addtoCart(elem.id)} style={{ border: '1px solid green' }}>ADD</button>
                                                : <button className='btn font-weight-bold text-success' style={{ border: '1px solid green' }}><span className='mr-2 text-secondary ' onClick={() => subQuantity(elem.id)} style={{ fontSize: '20px' }}>-</span>{elem.qty}<span className='ml-2 text-success' onClick={() => addQuantity(elem.id)} style={{ fontSize: '20px' }}>+</span></button>
                                            }
                                        </div>
                                    </div>
                                </div>)}
                                <hr style={{ border: '2px solid black', margin: '0px 170px', marginRight: '300px' }} />

                                <h1 className='my-4 ' style={{ marginLeft: '150px' }}>Breads:</h1>

                                {/* <p style={{ marginLeft: '200px' }}>{item.items.breads.length} Items</p> */}
                                {item.items.filter(ele => ele.category === "Breads" && ele).map(elem => <div className='container '>
                                    <div className='row'>
                                        <div className='col-3 offset-2'>
                                            <h5 className='fontweight-bold'>{elem.itemName}</h5>
                                            <p className='text-muted'>₹ {elem.itemPrice}</p>
                                        </div>
                                        <div className='col-2 offset-1'>
                                            {elem.qty === 0 ?
                                                <button className='btn text-success ' onClick={() => addtoCart(elem.id)} style={{ border: '1px solid green' }}>ADD</button>
                                                : <button className='btn font-weight-bold text-success' style={{ border: '1px solid green' }}><span className='mr-2 text-secondary' onClick={() => subQuantity(elem.id)} style={{ fontSize: '20px' }}>-</span>{elem.qty}<span className='ml-2 text-success' onClick={() => addQuantity(elem.id)} style={{ fontSize: '20px' }}>+</span></button>
                                            }
                                        </div>
                                    </div>
                                </div>)}
                                <hr style={{ border: '2px solid black', margin: '0px 170px', marginRight: '300px' }} />

                                <h1 className='my-4 ' style={{ marginLeft: '150px' }}>Desserts:</h1>
                                {/* <p style={{ marginLeft: '200px' }}>{item.items.desserts.length} Items</p> */}
                                {item.items.filter(ele => ele.category === "Desserts" && ele).map(elem => <div className='container '>
                                    <div className='row'>
                                        <div className='col-3 offset-2'>
                                            <h5 className='fontweight-bold'>{elem.itemName}</h5>
                                            <p className='text-muted'>₹ {elem.itemPrice}</p>
                                        </div>

                                        <div className='col-2 offset-1'>
                                            {elem.qty === 0 ?
                                                <button className='btn text-success ' onClick={() => addtoCart(elem.id)} style={{ border: '1px solid green' }}>ADD</button>
                                                : <button className='btn font-weight-bold text-success' style={{ border: '1px solid green' }}><span className='mr-2 text-secondary' onClick={() => subQuantity(elem.id)} style={{ fontSize: '20px' }}>-</span>{elem.qty}<span className='ml-2 text-success' style={{ fontSize: '20px' }} onClick={() => addQuantity(elem.id)}>+</span></button>
                                            }
                                        </div>
                                    </div>
                                </div>)}
                            </div>

                            <div >
                                {cartArr.length === 0 &&
                                    <div>
                                        <h2 className=' mb-5 font-weight-bold text-secondary'>Cart Empty</h2>
                                        {/* <small>{}</small> */}
                                        <img src='/cartEmpty.png' width='300px' height='250px' alt='Cart Empty'></img>
                                        <p className='text-secondary mt-3'>Good food is always cooking!<br /> Go ahead, order some yummy <br /> items from the menu.</p>
                                    </div>}
                                {cartArr.length !== 0 &&
                                    <div style={{ backgroundColor: '#f7fff7' }}>
                                        <h2 className=' mb-5 font-weight-bold '>Cart</h2>
                                        {cartArr?.map(elem => <div key={elem.id} className='container'>
                                            <PriceCard item={elem} />

                                        </div>)}
                                        <div>
                                            <h6 className='font-weight-bold ml-4'>Subtotal <nbr style={{marginLeft:'190px'}}>₹{total}</nbr></h6>
                                            <small className='ml-4'>Extra charges may apply</small>
                                        </div>
                                        <div className='text-center'>
                                            <button className='btn bg-success text-white px-5 py-2 mt-2' onClick={()=> this.handleCheckOut()}>CHECKOUT<i className="fas fa-long-arrow-alt-right mx-2"></i></button>

                                        </div>
                                    </div>}

                            </div>
                        </div>

                    </div>

                </div>

                <Footer />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    productArr: state.productArr,
    city: state.city,
    isAuth: state.isAuth,
    cartArr: state.cartArr,
    total:state.total
})

const mapDispatchToProps = dispatch => ({
    addtoCart: (payload) => dispatch(addtoCart(payload)),
    addQuantity: (payload) => dispatch(addQuantity(payload)),
    subQuantity: (payload) => dispatch(subQuantity(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantInfo)

