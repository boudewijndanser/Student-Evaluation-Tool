//src/containers/signup.js
import React, { PureComponent } from 'react'

//Styling
import '../styling/pages.css'
import Button from 'material-ui-next/Button'

export default class SignupForm extends PureComponent {
	constructor() {
		super()
		this.state = {
			email: '',
            password: '',
            confirmPassword: ''
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

		const { email, password, confirmPassword } = this.state
		const isEnabled = email.length > 0 && password.length > 0 && confirmPassword.length > 0
		
		return (
			<form className="formClass" onSubmit={this.handleSubmit}>
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

				<div className="fieldSpacer">
					<label htmlFor="confirmPassword">Confirm password </label>
					<input type="password" name="confirmPassword" id="confirmPassword" value={
						this.state.confirmPassword || ''
					} onChange={ this.handleChange } />
				</div>

				{
					this.state.password &&
					this.state.confirmPassword &&
					this.state.password !== this.state.confirmPassword &&
					<p style={{color:'red'}}>The passwords do not match!</p>
				}

				<Button disabled={!isEnabled} type="submit" size="medium" color="secondary" variant="raised" >Sign me up!</Button>
			</form>
		)
	}
}
