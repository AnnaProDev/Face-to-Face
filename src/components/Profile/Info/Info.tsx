import style from "./Info.module.css";
import Preloader from "../../common/Preloader/Preloader";
import user_photo from "./../../../../src/img/user_icon.png";
import InfoStatus from "./InfoStatus";
import InfoUserReduxForm , { InfoUser } from "./InfoUser"
import { ChangeEvent, useState } from "react";
import { PhotosType } from "../../../types/types";

type ProfileType = {
	profile: ProfileType 
	status: string 
	updateStatus: (status: string) => void
	isOwner: boolean
	savePhoto: (file: File) => void 
	saveProfile: (profile: ProfileType) => Promise<any>
	photos: PhotosType
}

const Info: React.FC<ProfileType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

	const [editMode, setEditMode] = useState (false);


	if (!profile) {
		return <Preloader />
	}

	const onSubmit = (formData: ProfileType) => {


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
				<input type={"file"} onChange ={(e: ChangeEvent<HTMLInputElement>) => { 
					if (e.target.files && e.target.files.length) {
						savePhoto(e.target.files[0]);
					}
					}}/>
				Choose the file for upload new photo 
				</label> }
			</div>
			{editMode ? 
			<InfoUserReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> 
			: <InfoUser goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}/>}
			<InfoStatus status={status} updateStatus={updateStatus} isOwner={isOwner}/>
      </div>
		{isOwner && <span className={style.status_label}>Click to edit</span>}
    </div>
  );
}

export default Info;