import Friends from "./Friends/Friends";
import Info from "./Info/Info";
import Post from "./Post/Post";
import style from "./Profile.module.css"

const Profile = (props) => {

	return (
		<div className={style.wrapper}>
		<Friends friendsList={props.state.friendsList}/>
		<h3>Posts</h3>
    <div className={style.content}>
      <img
        className={style.wall}
        alt="dandelion"
        src="https://skinali.photo-clip.ru/images/phocagallery/kategor-skinali/Raznoe/thumbs/phoca_thumb_l_skinali%202805.jpg"
      ></img>
      <Info />
      <Post postsMessage={props.state.postsMessage}/>
    </div>
	 </div>
  );
}

export default Profile;