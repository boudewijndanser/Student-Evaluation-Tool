//src/containers/signup.js
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import '../styling/pages.css'


class Signup extends Component {
    
      render() {
          return (
             <Router> 
              <div>
                 <h1>Signup!</h1>                 
              </div>
             </Router>
          )
      }
}

export default (Signup)