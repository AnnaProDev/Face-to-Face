import style from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
	return <div className={style.item}>
	<NavLink to={"dialog/1" + props.id}>{props.name}</NavLink>
 </div>
}

const Message = (props) => {
	return <div className={style.message}>
	<p>{props.text}</p>
 </div>
}

const Dialogs = (props) => {

	let dialogsUsers =[
		{id: 1, name: "Anna",},
		{id: 2, name: "Andrey",},
		{id: 3, name: "Mark",},
		{id: 4, name: "Amaliya",},
		{id: 5, name: "Olga",},
	];

	let dialogsMessages =[
		{id: 1, text: "Hello! How are you?"},
		{id: 2, text: "Hello!",},
		{id: 3, text: "Hohoho!",},
		{id: 4, text: "I'm good!",},
		{id: 5, text: "Ku-ku",},
	];


	return (
    <div className={style.dialogs}>
      <div className={style.items}>
		<DialogItem name={dialogsUsers[0].name} id={dialogsUsers[0].id}/>
		<DialogItem name={dialogsUsers[1].name} id={dialogsUsers[1].id}/>
		<DialogItem name={dialogsUsers[2].name} id={dialogsUsers[2].id}/>
		<DialogItem name={dialogsUsers[3].name} id={dialogsUsers[3].id}/>
		<DialogItem name={dialogsUsers[4].name} id={dialogsUsers[4].id}/>
      </div>
      <div className={style.messages}>
			<Message text={dialogsMessages[0].text}/>
			<Message text={dialogsMessages[1].text}/>
			<Message text={dialogsMessages[2].text}/>
			<Message text={dialogsMessages[3].text}/>
			<Message text={dialogsMessages[4].text}/>
      </div>
    </div>
  );
}

export default Dialogs;