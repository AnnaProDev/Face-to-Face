import { actions } from "../../../redux/profile-reducer";
import { connect } from "react-redux";
import CreatePost from "./CreatePost";
import { compose } from "redux";
import { AppStateType } from "../../../redux/redux-store";


const mapStateToProps = (state: AppStateType) => {
	return {
		newPostText: state.profilePage.newPostText
	}
}


const mapDispatchToProps = (dispatch: any) => {

	return {
		AddPost: (newPostText: string) => {
			dispatch(actions.addPostActionCreator(newPostText))
		}
	}
}

export default compose(
	connect (mapStateToProps, mapDispatchToProps)
) (CreatePost);