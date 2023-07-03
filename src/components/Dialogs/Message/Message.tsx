import style from "../Dialogs.module.css";

type PropsType = {
	text: string
}

const Message: React.FC<PropsType> = (text: any) => {
	return <div className={style.message}>
	<p>  { text } </p>
 </div>
}

export default Message;