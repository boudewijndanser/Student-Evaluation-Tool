//src/containers/batch.js
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

//Styling
import '../styling/pages.css'

class Batch extends Component {
    
      render() {
          return (
             <Router> 
              <div>
                 <h1>Batch</h1>                 
              </div>
             </Router>
          )
      }
}

export default (Batch)