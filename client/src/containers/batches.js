//src/containers/batches.js
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import '../styling/pages.css'

class Batches extends Component {
    
      render() {
          return (
             <Router> 
              <div>
                 <h1>Batches!</h1>                 
              </div>
             </Router>
          )
      }
}

export default (Batches)