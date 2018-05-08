//src/containers/batches.js
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'

//Styling
import '../styling/pages.css'
import Button from 'material-ui-next/Button'

class Batches extends Component {
    componentWillMount() {
        if (this.props.authenticated) {
          console.log('--> Batches: We are authenticated..!')
        }
      }
      render() {
        const {users, authenticated} = this.props
        if (!authenticated) return (
			<Redirect to="/login" />
		)
          return (
             <Router> 
              <div>
                 <h1>Batches!</h1>
                 <div>
                 <Button size="medium" color="secondary" variant="raised">Add batch</Button>
                 
                    </div>               
              </div>
             </Router>
          )
      }
}

const mapStateToProps = state => ({
    authenticated: state.currentUser !== null
  })
  
  export default connect(mapStateToProps)(Batches)