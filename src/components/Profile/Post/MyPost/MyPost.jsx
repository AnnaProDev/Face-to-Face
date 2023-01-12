import style from "../../Post/Post.module.css";
import React from "react";

const MyPost = (props) => {

	return (
    <div>
      <p> {props.message}</p>
      <p className={style.like}>
        <span className="material-symbols-outlined">thumb_up</span>
        {props.likesCount}
      </p>
    </div>
  );
};

export default MyPost;