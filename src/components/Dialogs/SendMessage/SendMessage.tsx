import { Field, InjectedFormProps, reduxForm } from "redux-form";
import style from "../Dialogs.module.css";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { required, maxLength } from "../../../utils/validators";
import React from "react";

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

type PropsType = {
	onAddMessage: (newMessageBody: string) => void
};

const SendMessage: React.FC<PropsType> = (props) => {
	const addNewMessage = (values: NewMessageFormType) => {
		props.onAddMessage(values.newMessageBody)
	}
	return <AddMessageFormRedux onSubmit={addNewMessage} onAddMessage={function (newMessageBody: string): void {
		throw new Error("Function not implemented.");
	} }/>
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

const SendMessageMemorized = React.memo(SendMessage)

const AddMessageFormRedux = reduxForm<NewMessageFormValuesType, PropsType>({ form: "dialogSendMessageForm" })(
  AddMessageForm
);

export default SendMessageMemorized;
