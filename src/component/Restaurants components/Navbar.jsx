import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectCity } from '../../Redux/Action'



class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      city: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      city: e.target.value
    })

    this.props.selectCity(e.target.value)
  }


  componentDidMount() {
    this.setState({
      city: this.props.city
    })
  }


  render() {
    let cities = ['Bangalore', 'Chennai', 'Hyderabad', 'Mumbai']
    let { isAuth, usersArr, cartArr } = this.props
    console.log(isAuth, usersArr)
    return (

      <div className='container-fluid mt-3 shadow'>

        <div className='d-flex flex-row'>
          <div style={{ marginLeft: "200px" }} >
            <Link to='/restaurants'><img src="../logo.png" className="navbar-brand" alt='Packed Yummies' /></Link>
          </div>

          <div style={{ marginTop: "70px", fontSize: "25px" }}>
            <select className='px-4 py-2 bg-white' value={this.state.city}
              //onChange={(e) => {selectCity(e.target.value)}}
              onChange={(e) => this.handleChange(e)} >
              <option value='All'>All</option>
              {cities.map(item => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className='' style={{ marginTop: "70px", fontSize: "25px", marginLeft: "250px" }}>
            <div className='d-flex flex-row'>
              <div ><Link><i class="fas fa-search mx-4" style={{ color: 'brown' }}><span className='ml-3'>Search</span></i></Link> </div>
              <div ><Link><i class="fas fa-percentage mx-4" style={{ color: 'brown' }}><span className='ml-3'>Offers</span></i></Link> </div>
              <div ><Link><i class="fas fa-hands-helping mx-4" style={{ color: 'brown' }}><span className='ml-3'>Help</span></i></Link> </div>
              <div ><Link to='/login'><i class="fas fa-id-badge mx-4" style={{ color: 'brown' }}><span className='ml-3'> {isAuth ? "Hello, " + usersArr[0].username : "Sign In"}</span></i></Link> </div>
              <div ><Link to='/cart'><i class="fas fa-shopping-cart mx-4" style={{ color: 'brown' }}><span className='ml-3'>Cart <span className='text-info'>{cartArr.length>=1 &&cartArr.length}</span></span></i></Link> </div>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  city: state.city,
  isAuth: state.isAuth,
  usersArr: state.usersArr,
  cartArr:state.cartArr
})

const mapDispatchToProps = dispatch => ({
  selectCity: (payload) => dispatch(selectCity(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

