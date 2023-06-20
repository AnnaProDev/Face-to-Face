import { Field, InjectedFormProps, reduxForm } from "redux-form";
import style from "../Dialogs.module.css";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { required, maxLength } from "../../../utils/validators";

type NewMessageFormType = {
	newMessageBody: string,
}

type NewMessageFormValuesType = {
	newMessageBody: string
	component: string,
	name: string,
	type: string,
	placeholder: string,
	validate: string,
	className: string
}

type PropsType = {};

const SendMessage = (props: any) => {
	const addNewMessage = (values: NewMessageFormType) => {
		props.onAddMessage(values.newMessageBody)
	}
	return <AddMessageFormRedux onSubmit={addNewMessage}/>
};

const maxLength50 = maxLength(50)

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType>  
= (props) => {

  return (
    <form className={style.message_form} onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name={"newMessageBody"}
        type={"text"}
        placeholder="Text here..."
		  validate={[required, maxLength50]}
        className={style.message_input}
      />
      <button className={style.message_button}>
        <span className="material-symbols-outlined">send</span>
      </button>
    </form>
  );
};

const AddMessageFormRedux = reduxForm<NewMessageFormValuesType>({ form: "dialogSendMessageForm" })(
  AddMessageForm
);

export default SendMessage;
