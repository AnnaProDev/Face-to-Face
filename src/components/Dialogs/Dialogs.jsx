import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


	let dialogsElements = props.state.dialogsUsers.map(dialog =>
		dialog = <DialogItem name={dialog.name} id={dialog.id}/>
	);

	let messagesElements = props.state.dialogsMessages.map(message => 
		message = <Message text={message.text}/>)

	return (
    <div className={style.dialogs}>
      <div className={style.items}>
			{dialogsElements}
      </div>
      <div className={style.messages}>
			{messagesElements}
      </div>
    </div>
  );
}

export default Dialogs;