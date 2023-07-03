import Friends from "./Friends/Friends";
import Info from "./Info/Info";
import Post from "./Post/Post";
import style from "./Profile.module.css"
import React from "react";
import CreatePostContainer from "./CreatePost/CreatePostContainer";

const Profile = (props) => {

	return (
		<div className={style.wrapper}>
		<Friends store={props.profilePage}/>
      <Info savePhoto={props.savePhoto} 
		isOwner={props.isOwner} 
		profile={props.profile} 
		status={props.status} 
		updateStatus={props.updateStatus}
		saveProfile={props.saveProfile}/>
		<CreatePostContainer />
      <Post store={props.profilePage}/>
	 </div>
  );
}

export default Profile;