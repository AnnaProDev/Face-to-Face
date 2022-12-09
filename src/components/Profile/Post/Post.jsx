import style from "./Post.module.css";

const MyPost = (props) => {
	return (
    <div>
      <p> {props.message}</p>
      <p className={style.like}>
        <span class="material-symbols-outlined">thumb_up</span>
        {props.likesCount}
      </p>
    </div>
  );
};

const Post = (props) => {

	let postMessage =[
		{id: 1, text: "“If you can’t be kind, at least be vague.", likesCount: 12,},
		{id: 2, text: "Imagination is more important than knowledge",likesCount: 78},
		{id: 3, text: "The time is always right to do what is right.",likesCount: 46},
		{id: 4, text: "Always forgive your enemies; nothing annoys them so much.",likesCount: 3},
		{id: 5, text: "Never go to bed mad. Stay up and fight",likesCount: 39},
	];

  return (
    <div className={style.post}>
      <form>
        <input></input>
        <button>Add post</button>
      </form>
      <div className={style.item}>
		<MyPost 
		message={postMessage[0].text} 
		id={postMessage[0].id} 
		likesCount={postMessage[0].likesCount}/>
		<MyPost 
		message={postMessage[1].text} 
		id={postMessage[1].id} 
		likesCount={postMessage[1].likesCount}/>
		<MyPost 
		message={postMessage[2].text} 
		id={postMessage[2].id} 
		likesCount={postMessage[2].likesCount}/>
      </div>
    </div>
  );
};

export default Post;
