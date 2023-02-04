import React from "react"
import style from "./Users.module.css"
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import { UserType } from "../../types/types";


type PropsType = {
	totalItemsCount: number, 
	pageSize: number, 
	currentPage: number, 
	onPageChanged: (pageNumber: number) => void, 
	users: Array<UserType>,
	followingInProgress: Array<number>,
	unFollow: (userId: number) => void,
	follow: (userId: number) => void,
}

const Users: React.FC<PropsType>= ({totalItemsCount, pageSize, currentPage, onPageChanged, users, followingInProgress, unFollow, follow}) => {
		return (
      <div className={style.users}>
			<Paginator 
				currentPage = {currentPage}
				onPageChanged = {onPageChanged}
				totalItemsCount = {totalItemsCount}
				pageSize = {pageSize}
			/>
			<User users = {users}
				followingInProgress = {followingInProgress}
				unFollow = {unFollow}
				follow = {follow}
			/>
      </div>
   );
}

export default Users;