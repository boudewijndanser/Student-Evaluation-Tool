//src/containers/batch.js
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'

//Actions & components
import { getBatch } from '../actions/batches'
import { getStudents, addStudent, removeStudent } from '../actions/students'
import AddStudentToBatch from '../components/addStudentToBatch'
//import ColorScore from '../components/colorScore'

//Styling
import '../styling/pages.css'
import Button from 'material-ui-next/Button'
import Card, { CardActions, CardContent } from 'material-ui-next/Card'
import Typography from 'material-ui-next/Typography'

class Batch extends Component {
    componentWillMount() {
        if (this.props.authenticated) {
          if (this.props.batch === null || this.props.batch.id !== this.props.match.params.id) this.props.getBatch(this.props.match.params.id)
          if (this.props.students === null) this.props.getStudents()
            }
        }
       
        handleSubmit = (data) => {
            this.props.addStudent(data.firstName, data.lastName, data.photoUrl, this.props.batch.id)
        }


        renderStudents = (student) => {
            const { history } = this.props
            
            return (
                <Card key={student.id} className="studentCard">
                <img src={student.photoUrl} alt={student.firstName} />
            <CardContent>
            <Typography variant="title">{student.firstName}</Typography>
                <Typography variant="subheading">{student.lastName}</Typography>
                {/* <Typography variant="subheading">{student.evaluations[0].color}</Typography> */}
                
            </CardContent>
                    <CardActions>
                    <Button size="small" color="secondary"variant="raised" onClick={() => history.push(`/student/${student.id}`)}> View</Button>
                    <Button size="small" color="primary" onClick={() => this.props.removeStudent(student.id,this.props.batch.id )} > Send home </Button>
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
                 {batch.students && batch.students.map(student => this.renderStudents(student))}
                 {batch && <AddStudentToBatch onSubmit={this.handleSubmit} batch={batch}/>}
                   </div> 
              </div>
             </Router>
          )
      }
}

const mapStateToProps = state => ({
    authenticated: state.currentUser !== null,
    batch: state.batch
  })
  
  export default connect(mapStateToProps, { getBatch, getStudents, addStudent, removeStudent })(Batch)