import style from "../Profile.module.css"

const CreatePost = (props) => {
debugger
		const onAddPost = () => {
			props.AddPost();
		};

		const onPostChange = (event) => {
			const text = event.target.value;
			props.PostChange(text);
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