import React from 'react'
import TopBar from './TopBar'
import {login} from '../Redux/Action'
import { TextField } from '@material-ui/core'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            username:'',
            phone:'',
            password:''
        }
    }

    handleChange = e => {
         this.setState({
             [e.target.name] : e.target.value
         })
    }
    render() {
        let {username, phone, password} = this.state
        let {login,isAuth, history} = this.props
        console.log(isAuth)

        if(isAuth) {
            return (
                <Redirect push to='/restaurants' />
            )
        }

        // else {
        //     alert("Invalid Crendentials")
        // }

        return (
            <div >
                <TopBar />
                <div className='container text-center'>
                    <h1 className='display-h4  text-underline'>Login <i class="fas fa-hamburger text-warning ml-5"></i></h1>

                    <div>
                           <div className='mt-5 '>
                                <TextField name='phone' label="Phone  Number" type='text' value={phone} variant='outlined' onChange={(e) => this.handleChange(e)} />
                            </div>
                             <small class='text-muted'>(or)</small>
                            <div className='my-2'>
                                <TextField name='username' label="User Name" type='text' variant='outlined' value={username} onChange={(e) => this.handleChange(e)} />
                            </div>
                            <div className='my-5'>
                                <TextField name='password' label="password" type='password' variant='outlined' value={password} onChange={(e) => this.handleChange(e)}/>
                            </div>
                            <button  class="btn text-white   px-5 py-2" style={{backgroundColor:'brown'}} onClick={() => login(this.state)} >Login</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuth: state.isAuth,
    userArr:state.usersArr
})

const mapDispatchToProps = dispatch => ({
    login  : (payload) => dispatch(login(payload))
 })


export default connect(mapStateToProps,mapDispatchToProps)(Login)