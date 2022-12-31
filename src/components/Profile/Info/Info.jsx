import style from "./Info.module.css";
import Preloader from "../../common/Preloader/Preloader"
import InfoStatus from "./InfoStatus";

const Info = (props) => {


	if (!props.profile) {
		return <Preloader />
	}
	
	return (
    <div className={style.info}>
      <div className={style.profile}>
        <div className={style.photos}>
          <img alt="photoUser" src={props.profile.photos.large}></img>
        </div>
        <div className={style.text}>
          <div>
            <h3>{props.profile.fullName}</h3>
          </div>
          <div>{props.profile.aboutMe}</div>
          <div className={style.status}>
            Open for work:{" "}
            {props.profile.lookingForAJob ? (
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
          <div>{props.profile.lookingForAJobDescription}</div>
        </div>
			<InfoStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
  );
}

export default Info;