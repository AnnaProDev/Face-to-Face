import { Field, InjectedFormProps, reduxForm } from "redux-form";
import style from "../Profile.module.css";
import { Textarea } from "../../common/FormsControls/FormsControls";

type CreatePostPropsType = {
	AddPost: (newPostText: string) => void
}

const CreatePost: React.FC<CreatePostPropsType> = (props) => {

const addNewPost = (values: AddPostFormValuesType) => {
	props.AddPost(values.newPostText)
}
  return <CreatePostFormRedux onSubmit={addNewPost}/>;
};

type PropsType= {
}

export type AddPostFormValuesType = {
	newPostText: string
}

const CreatePostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (props) => {

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

const CreatePostFormRedux = reduxForm<AddPostFormValuesType, PropsType>({form: "post"})(CreatePostForm)

export default CreatePost;
