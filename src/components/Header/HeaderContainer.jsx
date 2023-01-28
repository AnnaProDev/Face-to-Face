import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { compose } from "redux";
import { logout } from "../../redux/auth-reducer";

const HeaderContainer = (props) => {
		return (
			<Header {...props}/>
		)
	}

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login,
		// logout: state.auth.logout
	}
}

export default compose(
	connect(mapStateToProps, {logout})
)(HeaderContainer);