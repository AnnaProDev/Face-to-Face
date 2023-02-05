import style from "../Dialogs.module.css";

const Message = (text: string) => {
	return <div className={style.message}>
	<p>{text}</p>
 </div>
}

export default Message;