import style from "./Post.module.css";
import MyPost from "./MyPost/MyPost";
import React from "react";
import { InitialStateType } from "../../../redux/profile-reducer";
import { PostType } from "../../../types/types";

type PropsType = {
	store: InitialStateType,
	post: Array<PostType>
}

const Post: React.FC<PropsType> = (props) => {

	let postsElements = 
	props.store.postsMessage.map(post => <MyPost key={post.id} message={post.text} likesCount={post.likesCount}/>);

  return (
    <div className={style.post}>
      <div className={style.item}>
			{postsElements}
      </div>
    </div>
  );
};

export default Post;
