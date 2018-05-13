//src/containers/student.js
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'

//Actions & components
import { getStudent } from '../actions/students'
import ColorScore from '../components/colorScore'

//Styling
import '../styling/pages.css'
//import Button from 'material-ui-next/Button'
import Card, { CardActions, CardContent } from 'material-ui-next/Card'
import Typography from 'material-ui-next/Typography'

class Student extends Component {
    componentWillMount() {
        if (this.props.authenticated) {
          if (this.props.student === null || this.props.student.id !== this.props.match.params.id) this.props.getStudent(this.props.match.params.id)
            }
        }
        renderStudent= (student) => {
            
            return (
            <Card key={student.id} className="studentCard">
                 <img src={student.photoUrl} alt={student.firstName} />
                <CardContent>
                    <div className="studentTitle">{`${student.firstName} ${student.lastName}`}</div>
                    {student.evaluations.length > 0 && <ColorScore color={student.evaluations[0].color}/>}
                    {!student.evaluations[0] && <ColorScore color={"grey"}/>}
                    {student.evaluations.length > 0 && student.evaluations[0].remark && 
                    <Typography variant="subheading"><div className="status">Status:</div> <div className="status2"><b>{student.evaluations[0].remark}</b></div></Typography>}
                </CardContent>
                    <CardActions>
                        {/* <Button size="small" variant="raised"color="primary" onClick={() => this.props.removeStudent(student.id,this.props.student.batch.id )}>Send home</Button> */}
                </CardActions>
            </Card>)
        }
        
      render() {
        const { student, authenticated } = this.props
        if (!authenticated) return (
			    <Redirect to="/login" />
        )
        if (student === null) return null
          return (
             <Router> 
              <div>
                 <h1>How is {student.firstName} {student.lastName} doing?</h1>
                 { student && this.renderStudent(student)}
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