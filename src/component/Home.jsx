import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

let suggestions = ['Hungry', 'Cooking gone wrong', 'Unexpected guests', 'Movie marathon', 'Game night', 'Late night at office']

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            index: 0
        }
    }

    componentDidMount() {
        console.log(this.state.index)

        this.handleSuggestions = setInterval(() => {
            this.setState({ index: this.state.index + 1 })
        }, 3000)
    }

    displaySuggestion = (x) => {
        let { index } = this.state
        if (x === suggestions.length) {
            this.setState({ index: index = 0 })
        }
        return (
            suggestions[x] + '?'
        )
    }

    componentWillUnmount() {
        clearInterval(this.handleSuggestions)
    }
    render() {
        return (
            <div>
                <div className=' container-fluid'>
                    <div className='row'>
                        <div className='col-4 mt-5 offset-1'>
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <img src='logo.png' className='navbar-brand' width='200' alt='Logo' />
                                <div className="collapse navbar-collapse ml-3 mt-5" id="navbarNavDropdown">
                                    <ul className="navbar-nav">
                                        <li className="nav-item ">
                                            <Link className="nav-link border border-success mx-1  text-dark" to='/login'>Login</Link>

                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link border border-warning mx-1 text-dark" href="#">Sign up</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link><p className="nav-link border border-info mx-1  text-dark text-decoration-none" href="#">Partner With Us!</p></Link>
                                        </li>

                                    </ul>
                                </div>
                            </nav>

                            <div className='mt-3'>
                                <h1 className='font-weight-bold'>{this.displaySuggestion(this.state.index)}</h1>
                                <h4 className='text-secondary'>Order food from favourite restaurants near you.</h4>

                            </div>

                            <div className='mt-5'>
                                <input type='text' className='px-4 py-3' style={{ fontSize: '20px' }} placeholder='Enter your delivery location' />
                                <button style={{ backgroundColor: 'brown', color: 'white', fontSize: '20px' }} className='py-3 px-3'>FIND FOOD</button>
                            </div>

                            <div className='mt-5'>
                                <p className='text-muted'>POPULAR CITIES IN INDIA</p>
                                <h6>Ahmedabad <nbr className='text-secondary'>Bangalore</nbr> Chennai <nbr className='text-secondary'>Delhi</nbr> Gurgaon <nbr className='text-secondary'>Hyderabad</nbr> Kolkata <nbr className='text-secondary'>Mumbai</nbr>  Pune  <nbr className='text-secondary'>& more</nbr> </h6>
                            </div>
                        </div>
                        <div className='col-7'>
                            <img src='backgroundImage.jpg' width='100%' alt='homeImage' className='img-fluid' />
                        </div>
                    </div>
                </div>

                <div style={{ backgroundColor: 'grey', textAlign: 'center' }}>
                    <div className='row'>
                        <div className='col-2 offset-2'>
                           <img height='300px' src='minimumOrder.png' alt='No minimum Order' />
                           <div className='mt-4'>
                               <h4 className='text-white'>No Minimum Order</h4>
                               <p className='text-white'>order in for yourself or for the group, <br/>with no restrictions on order value</p>
                           </div>
                        </div>
                        <div className='col-2 offset-1'>
                        <img height='300px' src='orderTracking.png' alt='order Tracking' />
                        <div className='mt-4'>
                               <h4 className='text-white'>Live Order Tracking</h4>
                               <p className='text-white'>Know where your order is at all times, <br/>from the restaurant to your doorstep</p>
                           </div>
                        </div>
                        <div className='col-2 offset-1'>
                            <img height='300px' src='fastDelivery.png' alt='fast Delivery' />
                            <div className='mt-4'>
                               <h4 className='text-white'>Lighting Fast Delivery</h4>
                               <p className='text-white'>Experience Packed Yummie's,  <br/> superfast delivery for food delivered fresh & on time</p>
                           </div>
                        </div>
                    </div>

                </div>

            <Footer />
            </div >
        )
    }
}

export default Home
