import style from "./Post.module.css";
import MyPost from "./MyPost/MyPost";
import React from "react";

const Post = (props) => {

	let postsElements = 
	props.store.postsMessage.map(post => <MyPost key={post.id} message={post.text} id={post.id} likesCount={post.likesCount}/>);

  return (
    <div className={style.post}>
      <div className={style.item}>
			{postsElements}
      </div>
    </div>
  );
};

export default Post;
