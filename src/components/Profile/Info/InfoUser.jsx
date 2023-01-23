import { reduxForm } from "redux-form";
import {
  createField,
  Input,
  Textarea,
} from "../../common/FormsControls/FormsControls";
import style from "./Info.module.css";

export const InfoUser = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div className={style.profile}>
      <div className={style.text}>
        <div className={style.text_wrapper}>
		  <span className="material-symbols-outlined">person</span>
      	<h3 className={style.name}>{profile.fullName}</h3>
        </div>
        <div className={style.text_wrapper}>
		  <span className="material-symbols-outlined">badge</span>
		  <div>{profile.aboutMe || "I'm Front-End Developer"}</div>
		  </div>
        <div className={style.text_wrapper}>
		  <span className="material-symbols-outlined">work</span>
          <div>Open for work:</div>
          {profile.lookingForAJob ? (
            <span
              style={{ color: "green" }} className="material-symbols-outlined"> priority</span>
          ) : (
            <span
              style={{ color: "red" }}
              className="material-symbols-outlined"
            >
              indeterminate_check_box
            </span>
          )}
        </div>
        <div className={style.text_wrapper}> 
		  <span className="material-symbols-outlined">computer</span>
		  <div> My skills: </div>
          {profile.lookingForAJobDescription ||
            "JavaScript, React.JS"}
        </div>
        {/* <div>
          Contacts:{" "}
          {Object.keys(profile.contacts).map((key) => {
            return (
              <Contact
                key={key}
                contactTitle={key}
                contactValue={profile.contacts[key]}
              />
            );
          })}
        </div> */}
		  {isOwner && <button className={style.text_button} onClick={goToEditMode}>Edit profile</button>}
      </div>
    </div>
  );
};

export const InfoUserForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit} className={style.profile}>
      <div className={style.text}>
        {error && <div className={style.form_error}>{error}</div>}
        <div>
          <div className={style.text_wrapper}>
			 <span className="material-symbols-outlined">person</span>
			 {createField("Full name", "fullName", [], Input)}
			 </div>
        </div>
        <div className={style.text_wrapper}>
		  <span className="material-symbols-outlined">badge</span>
		  {createField("About me", "aboutMe", [], Textarea)}
		  </div>
        <div className={style.text_wrapper}>
		  <span class="material-symbols-outlined">work</span>
          <div>Open for work:</div>
          {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
        </div>
        <div className={style.text_wrapper}> 
		  <span className="material-symbols-outlined">computer</span>
          {createField(
            "My professional skills",
            "lookingForAJobDescription",
            [],
            Textarea
          )}
        </div>

        {/* <div>
          Contacts:{" "}
          {Object.keys(profile.contacts).map((key) => {
            return (
              <div key={key} className={style.contacts}>
                {key}: {createField("", "contacts." + key, [], Input)}
              </div>
            );
          })}
        </div> */}		 
		   <button className={style.text_button}>Save</button>
      </div>
    </form>
  );
};

const InfoUserReduxForm = reduxForm({ form: "edit-profile" })(InfoUserForm);

// const Contact = ({ contactTitle, contactValue }) => {
//   return (
//     <div>
//       {contactTitle}: {contactValue}
//     </div>
//   );
// };

export default InfoUserReduxForm;
