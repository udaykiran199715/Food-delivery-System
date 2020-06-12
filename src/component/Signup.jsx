import React from 'react'
import TopBar from './TopBar'
import { TextField } from '@material-ui/core'

class Signup extends React.Component {
    render() {
        return (
            <div >
                <TopBar />
                <div className='container text-center'>
                    <h1 className='display-h4  text-underline'>Signup <i class="fas fa-hamburger text-warning ml-5"></i></h1>

                    <div>
                           <div className='my-4'>
                                <TextField label="Phone number " type='text' variant='outlined' />
                            </div>
                            <div className='my-4'>
                                <TextField label=" Email" type='text' variant='outlined' />
                            </div>
                            <div className='my-4'>
                                <TextField label="password" type='password' variant='outlined'/>
                            </div>
                            <button type="submit" class="btn text-white  px-5 py-2" style={{backgroundColor:'brown'}}>Signup</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup