import { updateNewPostTextActionCreator, addPostActionCreator } from "../../../redux/profile-reducer";
import { connect } from "react-redux";
import CreatePost from "./CreatePost";


const mapStateToProps = (state) => {
	return {
		newPostText: state.profilePage.newPostText
	}
}

const mapDispatchToProps = (dispatch) => {
	debugger
	return {
		AddPost: () => {
			dispatch(addPostActionCreator())
		},
		PostChange: (text) => {
			let action = updateNewPostTextActionCreator(text);
			dispatch(action);
		},
	}
}

const CreatePostContainer = connect (mapStateToProps, mapDispatchToProps)(CreatePost);

export default CreatePostContainer;