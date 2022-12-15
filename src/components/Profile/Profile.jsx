import Friends from "./Friends/Friends";
import Info from "./Info/Info";
import Post from "./Post/Post";
import style from "./Profile.module.css"
import React from "react";
import CreatePost from "./CreatePost/CreatePost";

const Profile = (props) => {
debugger


	return (
		<div className={style.wrapper}>
		<Friends store={props.store}/>
		<CreatePost store={props.store}/>
    <div className={style.content}>
      <img
        className={style.wall}
        alt="dandelion"
        src="https://skinali.photo-clip.ru/images/phocagallery/kategor-skinali/Raznoe/thumbs/phoca_thumb_l_skinali%202805.jpg"
      ></img>
      <Info />
      <Post store={props.store}/>
    </div>
	 </div>
  );
}

export default Profile;