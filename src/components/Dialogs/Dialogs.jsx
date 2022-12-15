import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import { updateNewMessageTextActionCreator, addMessageActionCreator } from "../../redux/dialogs-reducer";

const Dialogs = (props) => {


	const addMessage = () => {
		props.dispatch(addMessageActionCreator())
	}

	const onMessageChange = (event) => {
		const text = event.target.value;
		props.dispatch(updateNewMessageTextActionCreator(text));
		event.preventDefault();
	}


	let dialogsElements = props.state.dialogsUsers.map((dialog) =>
		dialog = (<DialogItem name={dialog.name} id={dialog.id}/>)
	);

	let messagesElements = props.state.dialogsMessages.map(
    (message) => (message = <Message text={message.text} id={message.id} />)
  );

	return ( 
	<div className={style.wrapper}>
		 <form className={style.message_form}>
        <textarea value={props.state.newMessageText} onChange={onMessageChange} placeholder="Text here..." type="text" className={style.message_input}></textarea>
        <button onClick={addMessage} className={style.message_button}><span className="material-symbols-outlined">send</span></button>
      </form>
		<div className={style.dialogs}>
			<div className={style.items}>
				{dialogsElements}
			</div>
			<div className={style.messages}>
				{messagesElements}
			</div>
		</div>
	</div>

  );
}

export default Dialogs;