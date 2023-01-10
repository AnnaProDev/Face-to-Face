import { useState } from "react";
import style from "../Info/Info.module.css"


const InfoStatusWithHooks = (props) => {

	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(props.status);

	const activateEditMode = () => {
		setEditMode(true);
	};

	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status)
	};

	const onStatusChange = (even) => {
		setStatus(even.currentTarget.value);
	}

	return (
		<div className={style.mystatus}>
			{!editMode &&
				<div >
					<h3 onDoubleClick={activateEditMode}>{props.status || "Just keep swimming"}</h3>
				</div>
			}
			{editMode &&
				<div>
					<input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status} />
				</div>
			}
		</div>
		)

}

export default InfoStatusWithHooks;
