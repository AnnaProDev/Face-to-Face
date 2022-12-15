import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer"
import CreatePost from "./CreatePost";


const CreatePostContainer = (props) => {

		let state = props.store.getState();

		const addPost = () => {
			props.store.dispatch(addPostActionCreator());
		};

		const onPostChange = (text) => {
			let action = updateNewPostTextActionCreator(text);
			props.store.dispatch(action);
		};

		return (
			<CreatePost 
				updateNewPostText = {onPostChange}
				onAddPost = {addPost}
				newPostText ={state.profilePage}
			/>
		);
	}


export default CreatePostContainer;