//src/components/addBatchDialog.js

import React from 'react'
import Button from 'material-ui-next/Button'
import TextField from 'material-ui-next/TextField'
import Dialog, { DialogActions, DialogContent, DialogContentText, DialogTitle } from 'material-ui-next/Dialog'

export default class AddBatchDialog extends React.Component {
  constructor() {
		super()
		this.state = {
			batchNumber: '',
      startDate: '',
      endDate: '',
      open: false
		}
		
	}

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

  render() {
    const { batchNumber, startDate, endDate } = this.state
    const isEnabled = batchNumber.length > 0 && startDate.length > 0 && endDate.length > 0

    return (
      <div>
        <Button variant="raised" color="secondary" onClick={this.handleClickOpen} >Add batch</Button>
        <br />
        <br />
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add a batch</DialogTitle>
          <DialogContent>
            <DialogContentText>
            Please enter the following information:
            </DialogContentText>
            <form onSubmit={this.handleSubmit}>
            <TextField autoFocus margin="normal" id="batchNumber" name="batchNumber" 
            label="batchNumber" type="number" value={ this.state.batchNumber || ''} onChange={ this.handleChange.bind(this) } required/>
            <br />
            <TextField id="startDate" name="startDate" label="Start date"  type="date" defaultValue="2018-05-24" InputLabelProps={{ shrink: true,}}  onChange={ this.handleChange.bind(this) }required/>
            <TextField id="endDate" name="endDate" label="End date"  type="date" defaultValue="2018-08-12" InputLabelProps={{ shrink: true,}} onChange={ this.handleChange.bind(this) }required/>
            <br />
            <br />
            <br />
            <Button type="submit" disabled={!isEnabled} onClick={this.handleClose} variant="raised" color="secondary">add</Button>
            <Button  onClick={this.handleClose} color="primary">Cancel</Button>
            </form>  
          </DialogContent>
          <DialogActions>
            
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}