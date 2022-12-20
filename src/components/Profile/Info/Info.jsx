import style from "./Info.module.css";
import Preloader from "../../common/Preloader/Preloader"

const Info = (props) => {

	if (!props.profile) {
		return <Preloader />
	}
	
	return (
    <div className={style.info}>
      <img
        className={style.wall}
        alt="dandelion"
        src="https://skinali.photo-clip.ru/images/phocagallery/kategor-skinali/Raznoe/thumbs/phoca_thumb_l_skinali%202805.jpg"
      ></img>
      <div className={style.profile}>
        <div className={style.photos}>
          <img alt="photoUser" src={props.profile.photos.large}
          ></img>
        </div>
		  <div className={style.text}>
		<div><h3>{props.profile.fullName}</h3></div>
      <div>{props.profile.aboutMe}</div>
		<div className={style.status}>Open for work: {props.profile.lookingForAJob 
		? <span style={{color:"green"}} className="material-symbols-outlined">priority</span>
		: <span style={{color:"red"}} className="material-symbols-outlined">indeterminate_check_box</span>}
		</div>
		<div>{props.profile.lookingForAJobDescription}</div>
		</div>
      </div>

    </div>
  );
}

export default Info;