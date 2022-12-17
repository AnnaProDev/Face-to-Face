import Friends from "./Friends/Friends";
import Info from "./Info/Info";
import Post from "./Post/Post";
import style from "./Profile.module.css"
import React from "react";
import CreatePostContainer from "./CreatePost/CreatePostContainer";

const Profile = (props) => {

const state = props.profilePage;

	return (
		<div className={style.wrapper}>
		<Friends store={state}/>
		<CreatePostContainer />
    <div className={style.content}>
      <img
        className={style.wall}
        alt="dandelion"
        src="https://skinali.photo-clip.ru/images/phocagallery/kategor-skinali/Raznoe/thumbs/phoca_thumb_l_skinali%202805.jpg"
      ></img>
      <Info />
      <Post store={state}/>
    </div>
	 </div>
  );
}

export default Profile;