import React from "react"
import style from "./Users.module.css"
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

class Users extends React.Component{

	render() {

		return (
			
      <div className={style.users}>
			<Paginator 
				currentPage={this.props.currentPage}
				onPageChanged={this.props.onPageChanged}
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
			/>
			<User users = {this.props.users}
				followingInProgress = {this.props.followingInProgress}
				unFollow = {this.props.unFollow}
				follow = {this.props.follow}
			/>
      </div>
    );
	}
} 

export default Users;