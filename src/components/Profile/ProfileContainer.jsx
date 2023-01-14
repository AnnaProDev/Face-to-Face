import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {getUserProfile, getStatus, updateStatus, savePhoto} from "../../redux/profile-reducer"
import {	useLocation, useNavigate,	useParams,} from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

export function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		 let location = useLocation();
		 let navigate = useNavigate();
		 let params = useParams();
		 return (
			  <Component
					{...props}
					router={{ location, navigate, params }}
			  />
		 );
	}
	return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

	refreshProfile() {
		let userId = this.props.router.params.userId;
		if (!userId) {
			userId = this.props.authUserId;
			// if(!userId) {
			// 	this.props.history.push("login");
			// }
		};
		this.props.getUserProfile(userId);
		this.props.getStatus(userId);
	}

	componentDidMount() {
		this.refreshProfile()
	}

	componentDidUpdate(prevProps, prevState, snapshot){
		if (this.props.router.params.userId !== prevProps.router.params.userId) {
		this.refreshProfile()
		}
	}


	render() {
		return (
			<Profile {...this.props}
			isOwner={!this.props.router.params.userId} 
			profile={this.props.profile} 
			status={this.props.status} 
			updateStatus={this.props.updateStatus}
			savePhoto={this.props.savePhoto}/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		profilePage: state.profilePage,
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		authUserId: state.auth.id,
		isAuth: state.auth.isAuth,
	}
}

export default compose(
	withAuthRedirect,
	connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
	withRouter,
) (ProfileContainer);