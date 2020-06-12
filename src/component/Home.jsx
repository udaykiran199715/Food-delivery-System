import React from 'react'
import { Link } from 'react-router-dom'

let suggestions = ['Hungry', 'Cooking gone wrong', 'Unexpected guests', 'Movie marathon', 'Game night', 'Late nigh at office']

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
        let {index} = this.state
        if (x === suggestions.length) {
            this.setState({ index: index = 0 })
        }
    return(
        suggestions[x]+'?'
    )
    }

    componentWillUnmount() {
        clearInterval(this.handleSuggestions)
    }
    render() {
        return (
            <div>
                <div className='  container-fluid'>
                    <div className='row'>
                        <div className='col-5 mt-5 offset-1'>
                            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                <img src='logo.png' className='navbar-brand' width='200' alt='Logo' />
                                <div class="collapse navbar-collapse ml-5 mt-5" id="navbarNavDropdown">
                                    <ul class="navbar-nav">
                                        <li class="nav-item ">
                                            <Link class="nav-link border border-success mx-1  text-dark" href="#">Login</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link border border-warning mx-1 text-dark" href="#">Sign up</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link><p class="nav-link border border-info mx-1  text-dark text-decoration-none" href="#">Partner With Us!</p></Link>
                                        </li>

                                    </ul>
                                </div>
                            </nav>

                            <div className='mt-3'>
                                <h1 className='font-weight-bold'>{this.displaySuggestion(this.state.index)}</h1>
                                <h4 className='text-secondary'>Order food from favourite restaurants near you.</h4>

                            </div>

                            <div className='mt-5'>
                                <input className='px-4 py-3' style={{fontSize:'20px'}} placeholder='Enter your delivery location'/>
                                <button style={{backgroundColor:'brown', color:'white', fontSize:'20px'}} className='py-3 px-3'>FIND FOOD</button>
                            </div>

                            <div className='mt-5'>
                                <p className='text-muted'>POPULAR CITIES IN INDIA</p>
                                <p></p>
                            </div>
                        </div>
                        <div className='col-6'>
                            <img src='homeImage.jpg' width='100%' alt='homeImage' className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Home
