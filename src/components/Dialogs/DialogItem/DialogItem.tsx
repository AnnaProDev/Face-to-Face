import style from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type PropsType = {
	id: number,
	name: string,
}

const DialogItem: React.FC<PropsType> = (id, name) => {
	return <div className={style.item}>
	<NavLink to={"dialog/1" + id}> {name} </NavLink>
 </div>
}

export default DialogItem;