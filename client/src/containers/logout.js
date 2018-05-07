import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

//Actions
import { logout } from '../actions/users'

//Styling
import '../styling/pages.css';

class Logout extends PureComponent {
	componentWillMount() {
		this.props.logout()
	}

	render() {
		if (!this.props.currentUser) return (
			<Redirect to="/" />
		)

		return (
			<div>
				<h1>Thank you! Bye bye...</h1>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	authenticated: state.currentUser !== null
})

export default connect(mapStateToProps, {logout})(Logout)
