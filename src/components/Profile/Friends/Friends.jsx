import style from "./Friends.module.css";

const FriendsIcon = (props) => {
	return <div className={style.icon}>
		<img alt="friends-icon" src={props.img}></img>
		<p className={style.name}>{props.name}</p>
	</div>
}

const Friends = (props) => {

	const friendName = props.store.friendsList.map (friend => <FriendsIcon 
		name = {friend.name} key={friend.id} id = {friend.id} img = {friend.img}/>)

	return (
    <div>
      <h3> My friends</h3>
      <div className={style.wrapper}>{friendName}</div>
    </div>
  );

}

export default Friends;