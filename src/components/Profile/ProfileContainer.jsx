import { connect } from "react-redux";
import Profile from "./Profile";

const mapStateToProps = (state) => {
	return {
		profilePage: state.profilePage,
	}
}


const ProfileContainer = connect (mapStateToProps)(Profile);

export default ProfileContainer;