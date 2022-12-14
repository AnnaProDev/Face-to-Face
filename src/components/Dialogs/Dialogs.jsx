import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {

	const newMessageElement = React.createRef();

	const onMessageChange = () => {
		const text = newMessageElement.current.value;
		props.dispatch({ type:"UPDATE-NEW-MESSAGE-TEXT", newText: text});
	}


	let dialogsElements = props.state.dialogsUsers.map(dialog =>
		dialog = <DialogItem name={dialog.name} id={dialog.id}/>
	);

	let messagesElements = props.state.dialogsMessages.map(
    (message) => (message = <Message text={message.text} />)
  );

	return ( 
	<div className={style.wrapper}>
		 <form className={style.message_form}>
        <textarea value={props.state.newMessageText} onChange={onMessageChange} ref={newMessageElement} placeholder="Text here..." type="text" className={style.message_input}></textarea>
        <button onClick={props.dispatch({type: "ADD-MESSAGE"})} className={style.message_button}><span class="material-symbols-outlined">send</span></button>
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