import { addPostActionCreator } from "../../../redux/profile-reducer";
import { connect } from "react-redux";
import CreatePost from "./CreatePost";
import { compose } from "redux";


const mapStateToProps = (state) => {
	return {
		newPostText: state.profilePage.newPostText
	}
}

const mapDispatchToProps = (dispatch) => {

	return {
		AddPost: (newPostText) => {
			dispatch(addPostActionCreator(newPostText))
		}
	}
}

export default compose(
	connect (mapStateToProps, mapDispatchToProps)
) (CreatePost);