import style from "./Info.module.css";
import Preloader from "../../common/Preloader/Preloader"
import InfoStatus from "./InfoStatus";
import user_photo  from "./../../../img/user_icon.png"

const Info = (props) => {


	if (!props.profile) {
		return <Preloader />
	}
	
	return (
    <div className={style.info}>
      <div className={style.profile}>
        <div className={style.photos}>
          <img alt="photoUser" src={props.profile.photos.large || user_photo}></img>
        </div>
        <div className={style.text}>
          <div>
            <h3>{props.profile.fullName}</h3>
          </div>
          <div>{props.profile.aboutMe || "I'm Front-End Developer"}</div>
          <div className={style.status}>
            Open for work: {props.profile.lookingForAJob ? (
              <span
                style={{ color: "green" }}
                className="material-symbols-outlined"
              >
                priority
              </span>
            ) : (
              <span
                style={{ color: "red" }}
                className="material-symbols-outlined"
              >
                indeterminate_check_box
              </span>
            )}
          </div>
          <div>{props.profile.lookingForAJobDescription || "I'm passionate about my business"}</div>
        </div>
			<InfoStatus status={props.status || "Just keep swimming"} updateStatus={props.updateStatus}/>
      </div>
    </div>
  );
}

export default Info;