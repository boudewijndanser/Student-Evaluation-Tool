//src/containers/batch.js
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'

//Actions & components
import { getBatch } from '../actions/batches'
//import StudentCard from './studentCard'
//Styling
import '../styling/pages.css'
// import Button from 'material-ui-next/Button'
// import Card, { CardActions, CardContent, CardHeader } from 'material-ui-next/Card'
// import Typography from 'material-ui-next/Typography'

class Batch extends Component {
    componentWillMount() {
        if (this.props.authenticated) {
          if (this.props.batch === null || this.props.batch.id !== this.props.match.params.id) this.props.getBatch(this.props.match.params.id)
            }
        }
    
   
      render() {
        const { batch, authenticated } = this.props
        if (!authenticated) return (
			    <Redirect to="/login" />
        )
        if (batch === null) return null
          return (
             <Router> 
              <div>
                 <h1>Batch #{batch.batchNumber}</h1>
                 <h2>Start date: {batch.startDate}</h2> <h2>End date: {batch.endDate}</h2>
              </div>
             </Router>
          )
      }
}

const mapStateToProps = state => ({
    authenticated: state.currentUser !== null,
    batch: state.batch
  })
  
  export default connect(mapStateToProps, { getBatch })(Batch)