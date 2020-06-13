import React from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Footer from '../Footer'
import PriceCard from '../PriceCard'


class RestaurantInfo extends React.Component {
    render() {
        let { match, productArr } = this.props
        // console.log(this.props.match)
        const item = productArr.find(item => item.name === match.params.name)

        if (!item) {
            return <div>Error 404 Not Found</div>
        }
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
                        <div className='col-2 text-white mt-5' style={{ border: "1px solid white" }}>
                            <h4>OFFER</h4>
                            <i className='fas fa-percentage mt-3 ' style={{ fontSize: '25px' }}> <small class='textCenter ml-2' style={{ fontSize: '15px' }}>33% off up to ₹50 + ₹25 to ₹100<br /> cashback with PayTM | Use...</small></i>
                            <i className='fas fa-percentage mt-3 ' style={{ fontSize: '25px' }}> <small class='textCenter ml-2' style={{ fontSize: '15px' }}>20% off upto ₹200 with Citi<br /> Bank Cards, once per week | Us...</small></i>
                        </div>

                    </div>

                    <div className='container my-5'>
                        <h1 style={{ marginLeft: '200px' }}>Biryani:</h1>

                        <p style={{ marginLeft: '200px' }}>{item.items.biryani.length} Items</p>
                        {/* {item.items.biryani.map(elem => <PriceCard data={elem} name={elem.itemName} price ={elem.itemPrice}/>)} */}
                        {item.items.biryani.map(elem => <div className='container '>
                            <div className='row'>
                                <div className='col-3 offset-2'>
                                    <h5 className='fontweight-bold'>{elem.itemName}</h5>
                                    <p className='text-muted'>₹ {elem.itemPrice}</p>
                                </div>
                                <div className='col-2 offset-1'>
                                    <button className='btn text-success ' style={{ border: '1px solid green' }}>ADD</button>
                                </div>
                            </div>
                        </div>)}
                        <hr style={{ border: '2px solid black', margin: '0px 170px' }} />

                        <h1 style={{ marginLeft: '200px' }} className='mt-5'>Family Packs:</h1>

                        <p style={{ marginLeft: '200px' }}>{item.items.familyPacks.length} Items</p>
                        {/* {item.items.biryani.map(elem => <PriceCard data={elem} name={elem.itemName} price ={elem.itemPrice}/>)} */}
                        {item.items.familyPacks.map(elem => <div className='container '>
                            <div className='row'>
                                <div className='col-3 offset-2'>
                                    <h5 className='fontweight-bold'>{elem.itemName}</h5>
                                    <p className='text-muted'>₹ {elem.itemPrice}</p>
                                </div>
                                <div className='col-2 offset-1'>
                                    <button className='btn text-success ' style={{ border: '1px solid green' }}>ADD</button>
                                </div>
                            </div>
                        </div>)}
                        <hr style={{ border: '2px solid black', margin: '0px 170px' }} />

                        <h1 style={{ marginLeft: '200px' }} className='mt-5'>Starters:</h1>

                        <p style={{ marginLeft: '200px' }}>{item.items.starters.length} Items</p>
                        {/* {item.items.biryani.map(elem => <PriceCard data={elem} name={elem.itemName} price ={elem.itemPrice}/>)} */}
                        {item.items.starters.map(elem => <div className='container '>
                            <div className='row'>
                                <div className='col-3 offset-2'>
                                    <h5 className='fontweight-bold'>{elem.itemName}</h5>
                                    <p className='text-muted'>₹ {elem.itemPrice}</p>
                                </div>
                                <div className='col-2 offset-1'>
                                    <button className='btn text-success ' style={{ border: '1px solid green' }}>ADD</button>
                                </div>
                            </div>
                        </div>)}
                        <hr style={{ border: '2px solid black', margin: '0px 170px' }} />

                        <h1 style={{ marginLeft: '200px' }} className='mt-5'>Breads:</h1>

                        <p style={{ marginLeft: '200px' }}>{item.items.breads.length} Items</p>
                        {/* {item.items.biryani.map(elem => <PriceCard data={elem} name={elem.itemName} price ={elem.itemPrice}/>)} */}
                        {item.items.breads.map(elem => <div className='container '>
                            <div className='row'>
                                <div className='col-3 offset-2'>
                                    <h5 className='fontweight-bold'>{elem.itemName}</h5>
                                    <p className='text-muted'>₹ {elem.itemPrice}</p>
                                </div>
                                <div className='col-2 offset-1'>
                                    <button className='btn text-success ' style={{ border: '1px solid green' }}>ADD</button>
                                </div>
                            </div>
                        </div>)}
                        <hr style={{ border: '2px solid black', margin: '0px 170px' }} />
                    </div>

                </div>

                <Footer />

            </div>
        )
    }
}

const mapStateToProps = state => ({
    productArr: state.productArr,
    city: state.city
})

export default connect(mapStateToProps, null)(RestaurantInfo)

