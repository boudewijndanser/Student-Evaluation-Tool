import React from 'react'
import AppBar from 'material-ui-next/AppBar'

import {BrowserRouter as Router, Route, Redirect, withRouter, NavLink } from 'react-router-dom'
import {userId} from '../collect/jwt'
import {connect} from 'react-redux'


//Styling
import '../styling/navBar.css'
import Button from 'material-ui-next/Button'


const NavBar = (props) => {
  const { location, history, user } = props
  return (
    <AppBar className="navHeader" color="primary">
        <div className="headerTitle">Student Evaluation Tool</div>
        <div className="headerNav">
        { location.pathname.indexOf('signup') > 0 && <Button color="secondary" onClick={() => history.push('/login')}>Login</Button> }
        { location.pathname.indexOf('login') > 0 && <Button color="secondary" onClick={() => history.push('/signup')}>Signup</Button> }
        { location.pathname.indexOf('batches/') > 0 && <Button color="secondary" onClick={() => history.push('/batches')}>Batches</Button> }
        { /batches$/.test(location.pathname) && <Button color="secondary" onClick={() => history.push('/logout')}>Logout</Button> }
        </div>
    </AppBar>
  )
}

const mapStateToProps = state => ({
  user: state.currentUser
})  

export default withRouter((NavBar)
)
