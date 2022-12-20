import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
		.then(response => {
			this.props.setUserProfile(response.data);
		});
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile}/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		profilePage: state.profilePage,
		profile: state.profilePage.profile
	}
}


export default connect (mapStateToProps, {setUserProfile})(ProfileContainer);