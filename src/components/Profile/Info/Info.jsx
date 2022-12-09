import style from "./Info.module.css";

const Icon = () => {
	return <div>
	<img alt="iconAvatar" src="https://static.vecteezy.com/system/resources/thumbnails/002/275/847/small/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"></img>
	</div>
}


const Info = (props) => {

	return ( 
	<div className={style.info}>
    <div className={style.icon}>
		<Icon />
	 </div>
	 <div>
		About myself
	 </div>
  </div>
  )
}

export default Info;