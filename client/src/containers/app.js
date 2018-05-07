//src/app.js
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

//Nav & pages
import NavBar from '../components/navBar'
import Signup from './signup'
import Login from './login'
import Batches from './batches'
import Batch from './batch'

//Styling
import '../styling/app.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <NavBar />
          </nav>
          <main style={{marginTop:75}}>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/batches" component={Batches} />
            <Route exact path="/batch" component={Batch} />
            <Route exact path="/" render={ () => <Redirect to="/batches" /> } />
          </main>
          <footer>
            </footer>
        </div>
      </Router>
    )
  }
}

export default App