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
      <Info profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
		<CreatePostContainer />
      <Post store={props.profilePage}/>
	 </div>
  );
}

export default Profile;