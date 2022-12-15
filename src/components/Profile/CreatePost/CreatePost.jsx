import style from "../Profile.module.css"
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state"


const CreatePost = (props) => {
		const newPostElement = React.createRef();

		const addPost = () => {
			props.dispatch(addPostActionCreator());
		};

		const onPostChange = () => {
			const text = newPostElement.current.value;
			let action = updateNewPostTextActionCreator(text);
			props.dispatch(action);
		};

		return (
			<form className={style.post_form}>
				<span className="material-symbols-outlined">account_circle</span>
				<textarea value={props.profilePage.newPostText} onChange={onPostChange} ref={newPostElement} placeholder="What's on your mind..." type="text" className={style.post_input} />
				<button onClick={addPost} className={style.post_button}></button>
			</form>
		);
	}


export default CreatePost;