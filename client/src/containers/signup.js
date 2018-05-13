//src/containers/signup.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

//Components & actions
import { signup } from '../actions/users'
import SignupForm from '../components/signupForm'

//Styling
import '../styling/pages.css'

class Signup extends PureComponent {
	handleSubmit = (data) => {
		this.props.postSignup(data.email, data.password)
	}

	render() {
		if (this.props.signup.success) return (
			<Redirect to="/" />
		)

		return (
			<div>
				<h1>Sign up</h1>
				<SignupForm onSubmit={this.handleSubmit} />
				<p style={{color:'red'}}>{ this.props.signup.error }</p>
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		signup: state.signup
	}
}

export default connect(mapStateToProps, {postSignup: signup})(Signup)
