import React, { PureComponent } from 'react'

//Styling
import '../styling/pages.css'
import Button from 'material-ui-next/Button'

export default class LoginForm extends PureComponent {
	constructor() {
		super()
		this.state = {
			email: '',
			password: ''
		}
		
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
		const { email, password } = this.state
		const isEnabled = email.length > 0 && password.length > 0

		return (
			
			<form className="formClass"onSubmit={this.handleSubmit}>
				<div className="fieldSpacer">
					<label htmlFor="email">Email </label>
					<input type="email" name="email" id="email" value={
						this.state.email || ''
					} onChange={ this.handleChange } />
				</div>

				<div className="fieldSpacer">
					<label htmlFor="password">Password </label>
					<input type="password" name="password" id="password" value={
						this.state.password || ''
					} onChange={ this.handleChange } />
				</div>
				

				<Button disabled={!isEnabled} type="submit" size="medium" color="secondary" variant="raised" >Let's go!</Button>
			</form>
		)
	}
}
