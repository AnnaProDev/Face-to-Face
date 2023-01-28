import React from "react"
import style from "./Users.module.css"
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {


		return (
			
      <div className={style.users}>
			<Paginator 
				currentPage = {props.currentPage}
				onPageChanged = {props.onPageChanged}
				totalItemsCount = {props.totalItemsCount}
				pageSize = {props.pageSize}
			/>
			<User users = {props.users}
				followingInProgress = {props.followingInProgress}
				unFollow = {props.unFollow}
				follow = {props.follow}
			/>
      </div>
   );
}

export default Users;