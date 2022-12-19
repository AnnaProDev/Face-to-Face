import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import SendMessageContainer from "./SendMessage/SendMessageContainer";

const Dialogs = (props) => {

	const state = props.dialogsPage;

	let dialogsElements = state.dialogsUsers.map(
    (dialog) => (dialog = <DialogItem key={dialog.id} name={dialog.name}  id={dialog.id} />)
  );

	let messagesElements = state.dialogsMessages.map(
    (message) => (message = <Message key={message.id} text={message.text} id={message.id} />)
  );

	return ( 
	<div className={style.wrapper}>
		<SendMessageContainer />
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