import React, {PureComponent} from 'react'
import Button from 'material-ui-next/Button';
import TextField from 'material-ui-next/TextField'
import Card from 'material-ui-next/Card'


export default class AddStudentToBatch extends PureComponent {
    constructor() {
		super()
		this.state = {
			firstName: '',
            lastName: '',
            photoUrl: ''
		}
		
	}

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
    }

    handleChange = (e) => {
        const {name, value} = e.target

        this.setState({
            [name] : value
        })
      };

    render() {
        const initialValues = this.props.initialValues || {}
        const { lastName, firstName, photoUrl } = this.state
        const isEnabled = firstName.length > 2 && lastName.length > 2 && photoUrl.length > 10
        
        return(
            <div >
            <Card className="createCard">
                <form onSubmit={this.handleSubmit}>
                <TextField
                    id='firstName'
                    name='firstName'
                    label='firstname'
                    value={this.state.firstName || initialValues.firstName || ''}
                    onChange={this.handleChange}
                    className="formFields"
                />
                <TextField
                    id='lastName'
                    name='lastName'
                    label='lastname'
                    value={this.state.lastName || initialValues.lastName || ''}
                    onChange={this.handleChange}
                    className="formFields"
                />
                <TextField
                  id='photoUrl'
                  name='photoUrl'
                  label='Add a photo url'
                  value={this.state.photoUrl || initialValues.photoUrl || ''}
                  onChange={this.handleChange}
                  className="formFields"
                  />
                  <br />
                <Button type='submit' disabled={!isEnabled} className="buttonSpacer" variant="raised"color="primary">Create student</Button>
            </form>
            </Card>
            </div>)
        
    }
}