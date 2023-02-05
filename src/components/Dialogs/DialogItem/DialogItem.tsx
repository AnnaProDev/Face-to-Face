import style from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";



const DialogItem = (id:number, name: string) => {
	return <div className={style.item}>
	<NavLink to={"dialog/1" + id}>{name}</NavLink>
 </div>
}

export default DialogItem;