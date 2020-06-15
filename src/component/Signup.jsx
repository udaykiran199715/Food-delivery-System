import React from 'react'
import TopBar from './TopBar'
import { TextField } from '@material-ui/core'
import { signup } from '../Redux/Action'
import {connect} from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import Footer from './Footer'

let status = false
class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            username:'',
            phone:'',
            password:'',
            status:false
         }
    }

    handleChange = e => {
         this.setState({
             [e.target.name] : e.target.value
         })
    }

    handleSignup = () => {
         this.props.signup(this.state)
       this.setState({
           state:true
       })

    }
    render() {
console.log(status)

      if(this.state.status == true) {
          return (
            // console.log(this.state)
<Redirect to= '/login' />

            //
          )
      }

        return (
            <div >
                <TopBar />
                <div className='container text-center mb-5'>
                    <h1 className='display-h4  text-underline'>Signup <i class="fas fa-hamburger text-warning ml-5"></i></h1>

                    <div>
                           <div className='my-4'>
                                <TextField name='phone' label="Phone number " type='text' variant='outlined' onChange={(e) => this.handleChange(e)}/>
                            </div>
                            <div className='my-4'>
                                <TextField name='username'  label=" User name" type='text' variant='outlined' onChange={(e) => this.handleChange(e)} />
                            </div>
                            <div className='my-4'>
                                <TextField name='password' label="password" type='password' variant='outlined' onChange={(e) => this.handleChange(e)}/>
                            </div>
                            <button  class="btn text-white  px-5 py-2" style={{backgroundColor:'brown'}} onClick={() => this.handleSignup()} >Signup</button>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signup  : (payload) => dispatch(signup(payload))
 })


export default connect(null,mapDispatchToProps)(Signup)

