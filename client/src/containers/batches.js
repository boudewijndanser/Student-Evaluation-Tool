//src/containers/batches.js
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'

//Actions & components
import { getBatches, addBatch } from '../actions/batches'
import AddBatchDialog from '../components/addBatchDialog'

//Styling
import '../styling/pages.css'
import Button from 'material-ui-next/Button'
import Card, { CardActions, CardContent, CardHeader } from 'material-ui-next/Card'

class Batches extends Component {
    componentWillMount() {
        if (this.props.authenticated) {
          if (this.props.batches === null) this.props.getBatches()
            }
        }
      renderBatch = (batch) => {
        const { history } = this.props
        
        return (
        <Card key={batch.id} className="batchCard">
        <img src="http://www.boudewijndanser.nl/code/students/react.png" alt="ReactJS!" />
            <CardContent>
                <CardHeader title={`Batch # ${batch.batchNumber}`}/>
                <div className="batchDates">Start date: {batch.startDate}</div>
                <div className="batchDates">End date: {batch.endDate}</div>
            </CardContent>
                <CardActions>
                <Button size="small" color="primary"variant="raised" onClick={() => history.push(`/batch/${batch.id}`)} > View batch! </Button> 
            </CardActions>
        </Card>)
    }
    
    handleSubmit = (data) => {
        this.props.addBatch(data.batchNumber, data.startDate, data.endDate)
        
    }
    
      render() {
        const { batches, authenticated } = this.props
        if (!authenticated) return (
			    <Redirect to="/login" />
        )
        if (batches === null) return null

          return (
             <Router> 
              <div>
                 <h1>Look at those beautiful batches!</h1>
                 <div><AddBatchDialog onSubmit={this.handleSubmit} /></div>
                 <div className="batchesDiv">
                 { batches && batches.map(batch => this.renderBatch(batch))}
                   </div>     
              </div>
             </Router>
          )
      }
}

const mapStateToProps = state => ({
    authenticated: state.currentUser !== null,
    batches: state.batches === null ? null : Object.values(state.batches).sort((a, b) => a.id - b.id),
    creation: state.creation
  })
  
  export default connect(mapStateToProps, { getBatches, addBatch })(Batches)