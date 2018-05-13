//src/containers/login.js
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

//Components & actions
import { login } from '../actions/users'
import LoginForm from '../components/loginForm'

//Styling
import '../styling/pages.css';

class Login extends PureComponent {
	handleSubmit = (data) => {
		this.props.login(data.email, data.password)
	}

	render() {
		if (this.props.currentUser) return (
			<Redirect to="/" />
		)

		return (
			<div>
				<h1>Login</h1>
				<LoginForm onSubmit={this.handleSubmit} />
				{ this.props.error && <span style={{color:'red'}}>{this.props.error}</span> }
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		currentUser: state.currentUser,
        error: state.login.error
	}
}

export default connect(mapStateToProps, { login })(Login)
