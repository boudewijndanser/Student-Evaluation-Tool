//src/containers/batch.js
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'

//Actions & components
import { getBatch } from '../actions/batches'
import { getStudents } from '../actions/students'

//Styling
import '../styling/pages.css'
import Button from 'material-ui-next/Button'
import Card, { CardActions, CardContent, CardHeader, CardMedia } from 'material-ui-next/Card'
import Typography from 'material-ui-next/Typography'
import { withStyles } from 'material-ui-next/styles';

class Batch extends Component {
    componentWillMount() {
        if (this.props.authenticated) {
          if (this.props.batch === null || this.props.batch.id !== this.props.match.params.id) this.props.getBatch(this.props.match.params.id)
          if (this.props.students === null) this.props.getStudents()
            }
        }
        renderStudents = (student) => {
            const { history } = this.props
            
            return (
                <Card key={student.id} className="studentCard">
                <img src={student.photoUrl} alt={student.firstName} />
            <CardContent>
            <Typography variant="title">{student.firstName}</Typography>
                <Typography variant="subheading">{student.lastName}</Typography>
            </CardContent>
                    <CardActions>
                    <Button size="small" color="secondary"variant="raised" > View</Button>
                    <Button size="small" color="primary" > Send home </Button>
                     
                </CardActions>
            </Card>)
        }
   
      render() {
        const { batch, students, authenticated } = this.props
        if (!authenticated) return (
			    <Redirect to="/login" />
        )
        if (batch === null) return null
        if (students === null) return null
          return (
             <Router> 
              <div>
                 <h1>Batch #{batch.batchNumber}</h1>
                 <h2>Start date: {batch.startDate}</h2> <h2>End date: {batch.endDate}</h2>
                 <div className="batchesDiv">
                 { students && students.map(student => this.renderStudents(student))}
                   </div> 
              </div>
             </Router>
          )
      }
}

const mapStateToProps = state => ({
    authenticated: state.currentUser !== null,
    batch: state.batch,
    students: state.students === null ? null : Object.values(state.students).sort((a, b) => a.id - b.id)
    
  })
  
  export default connect(mapStateToProps, { getBatch, getStudents })(Batch)