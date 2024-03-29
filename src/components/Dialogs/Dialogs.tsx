import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import SendMessageContainer from "./SendMessage/SendMessageContainer";
import React from "react";
import { InitialStateType } from "../../redux/dialogs-reducer";
import { DialogType, MessageType } from "../../types/types";
// import { Navigate } from "react-router-dom";

type PropsType = {
	dialogsPage: InitialStateType,
	dialogsUsers: Array<DialogType>,
	dialogsMessages: Array<MessageType>
		
}

const Dialogs: React.FC<PropsType> = (props) => {

	const state = props.dialogsPage;

	const dialogsElements = state.dialogsUsers.map(
    (dialog => <DialogItem key={dialog.id} name={dialog.name}  id={dialog.id} />)
  );

	const messagesElements = state.dialogsMessages.map(
    (message => <Message key={message.id} text={message.text} />)
  );

	return ( 
	<div className={style.wrapper}>
		<SendMessageContainer onAddMessage={function (newMessageBody: string): void {
				throw new Error("Function not implemented.");
			} }/>
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