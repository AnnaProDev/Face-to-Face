import { Field, reduxForm } from "redux-form";
import style from "../Profile.module.css";
import { Textarea } from "../../common/FormsControls/FormsControls";

const CreatePost = (props) => {

const addNewPost = (values) => {
	props.AddPost(values.newPostText)
}
  return <CreatePostFormRedux onSubmit={addNewPost}/>;
};


const CreatePostForm = (props) => {

	return <form className={style.post_form} onSubmit={props.handleSubmit}>
    <span className="material-symbols-outlined">account_circle</span>
    <Field
		component={Textarea}
		name={"newPostText"}
      placeholder="What's on your mind..."
      type="text"
      className={style.post_input}
    />
    <button className={style.post_button}></button>
  </form>
};

const CreatePostFormRedux = reduxForm({form: "post"})(CreatePostForm)

export default CreatePost;
