import Info from "./Info/Info";
import Post from "./Post/Post";
import style from "./Profile.module.css"

const Profile = () => {
	return (
    <div className={style.content}>
      <h2>Content</h2>
      <img
        className={style.wall}
        alt="dandelion"
        src="https://skinali.photo-clip.ru/images/phocagallery/kategor-skinali/Raznoe/thumbs/phoca_thumb_l_skinali%202805.jpg"
      ></img>
      <Info />
      <Post />
    </div>
  );
}

export default Profile;