//src/containers/student.js
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'

//Actions & components
import { getStudent } from '../actions/students'

//Styling
import '../styling/pages.css'
import Button from 'material-ui-next/Button'
import Card, { CardActions, CardContent, CardHeader, CardMedia } from 'material-ui-next/Card'
import Typography from 'material-ui-next/Typography'

class Student extends Component {
    componentWillMount() {
        if (this.props.authenticated) {
          if (this.props.student === null || this.props.student.id !== this.props.match.params.id) this.props.getStudent(this.props.match.params.id)
            }
        }
        renderStudent= (student) => {
            const { history } = this.props
            
            return (
            <Card key={student.id} className="studentCard">
                    <CardMedia
                        // className={classes.media}
                        image={student.photoUrl}
                        title={student.firstName} />
                <CardContent>
                    <CardHeader title={`${student.firstName} ${student.lastName}`}/>
                    <Typography variant="subheading">{student.id}</Typography>
                </CardContent>
                    <CardActions>
                     
                </CardActions>
            </Card>)
        }
   
      render() {
        const { student, authenticated, history } = this.props
        // if (!authenticated) return (
		// 	    <Redirect to="/login" />
        // )
        if (student === null) return null
          return (
             <Router> 
              <div>
                 <h1>Edit or score {student.firstName}</h1>
                 { student && this.renderStudent(student)}
              </div>
              <div>
              {<Button size="small" color="primary"variant="raised" onClick={() => history.push(`/student/${student.id +1}`)} > Next! </Button>}
                  </div>
             </Router>
          )
      }
}

const mapStateToProps = state => ({
    authenticated: state.currentUser !== null,
    student: state.student
  })
  
  export default connect(mapStateToProps, { getStudent })(Student)