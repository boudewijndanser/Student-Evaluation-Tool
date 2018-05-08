//src/containers/student.js
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

//Styling
import '../styling/pages.css'

class Student extends Component {
    
      render() {
          return (
             <Router> 
              <div>
                 <h1>Student</h1>                 
              </div>
             </Router>
          )
      }
}

export default (Student)