import React from 'react'
import AppBar from 'material-ui-next/AppBar'

import {BrowserRouter as Router, Route, Redirect, withRouter, NavLink } from 'react-router-dom'
import {userId} from '../collect/jwt'
import {connect} from 'react-redux'
import AccountIcon from 'material-ui-icons/AccountBox'

//Styling
import '../styling/navBar.css'



const NavBar = (props) => {
  const { location, history } = props

  return (
    <AppBar className="navHeader" color="primary">
        <div className="headerTitle">Student Evaluation Tool</div>
        <div className="headerNav">
        <NavLink to="/signup" className="navButton" activeClassName="selected">Signup</NavLink>
        <NavLink to="/login" className="navButton" activeClassName="selected">Login</NavLink>
        <NavLink to="/batches" className="navButton" activeClassName="selected">Batches</NavLink>
        <NavLink to="/batch" className="navButton" activeClassName="selected">Batch</NavLink>
        </div>
    </AppBar>
  )
}

const mapStateToProps = state => ({
  user: state.currentUser && state.users &&
    state.users[userId(state.currentUser.jwt)]
})

export default withRouter((NavBar)
)
