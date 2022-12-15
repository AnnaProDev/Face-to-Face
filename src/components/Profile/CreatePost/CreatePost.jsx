import style from "../Profile.module.css"
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer"

const CreatePost = (props) => {

		const onAddPost = () => {
			props.store.dispatch(addPostActionCreator());
		};

		const onPostChange = (event) => {
			const text = event.target.value;
			props.store.dispatch(updateNewPostTextActionCreator(text));
			event.preventDefault();
		};

		return (
			<form className={style.post_form}>
				<span className="material-symbols-outlined">account_circle</span>
				<textarea value={props.newPostText} onChange={onPostChange} placeholder="What's on your mind..." type="text" className={style.post_input} />
				<button onClick={onAddPost} className={style.post_button}></button>
			</form>
		);
	}


export default CreatePost;