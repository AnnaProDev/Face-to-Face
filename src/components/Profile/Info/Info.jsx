import style from "./Info.module.css";
import Preloader from "../../common/Preloader/Preloader";
import user_photo from "./../../../../src/img/user_icon.png";
import InfoStatusWithHooks from "./InfoStatusWithHooks";
import InfoUserReduxForm , { InfoUser } from "./InfoUser"
import { useState } from "react";

const Info = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

	const [editMode, setEditMode] = useState (false);


	if (!profile) {
		return <Preloader />
	}

	const onSubmit = (formData) => {
		saveProfile(formData).then( ()=>{
			setEditMode(false);
		})

	}
	
	return (
    <div className={style.info}>
      <div className={style.profile}>
			<div className={style.photos}>
				<img alt="photoUser" src={profile.photos.large || user_photo} />
				{ isOwner && 
				<label className={style.input_file}>
				<input type={"file"} onChange ={(e)=>{ savePhoto(e.target.files[0]) }}/>
				Choose the file for upload new photo 
				</label> }
			</div>
			{editMode ? 
			<InfoUserReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> 
			: <InfoUser goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}/>}
			<InfoStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
		<span className={style.status_label}>Click to edit</span>
    </div>
  );
}

export default Info;