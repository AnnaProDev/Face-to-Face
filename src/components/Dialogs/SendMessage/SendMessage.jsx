import style from "../Dialogs.module.css";

const SendMessage = (props) => {
	debugger
	const addMessage = () => {
		props.onAddMessage()
	}

	const onMessageChange = (event) => {
		const text = event.target.value;
		props.MessageChange(text);
	}

return (
		 <form className={style.message_form}>
		 <textarea value={props.newMessageText} onChange={onMessageChange} placeholder="Text here..." type="text" className={style.message_input}></textarea>
		 <button onClick={addMessage} className={style.message_button}><span className="material-symbols-outlined">send</span></button>
	  </form>
)
}

export default SendMessage;


