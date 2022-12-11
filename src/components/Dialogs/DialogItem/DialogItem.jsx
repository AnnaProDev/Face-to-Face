import style from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
	return <div className={style.item}>
	<NavLink to={"dialog/1" + props.id}>{props.name}</NavLink>
 </div>
}

export default DialogItem;