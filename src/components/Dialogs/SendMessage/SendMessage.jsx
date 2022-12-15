import style from "../Dialogs.module.css";


const SendMessage = (props) => {

	const addMessage = () => {
		props.postMessage()
	}

	const onMessageChange = (event) => {
		const text = event.target.value;
		props.messageChange(text)
		event.preventDefault();
	}


return (
		 <form className={style.message_form}>
		 <textarea value={props.newMessageText} onChange={onMessageChange} placeholder="Text here..." type="text" className={style.message_input}></textarea>
		 <button onClick={addMessage} className={style.message_button}><span className="material-symbols-outlined">send</span></button>
	  </form>
)

}

export default SendMessage;


