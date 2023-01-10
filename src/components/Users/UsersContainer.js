import React from "react";
import { connect } from "react-redux";
import { follow, unFollow, setUsersPage, getUsers } from "../../redux/users-reducer";
import { getAllUsers, getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount } from "../../redux/users-selectors";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	};
	
	onPageChanged = (page) => {
		this.props.getUsers(page, this.props.pageSize);
	};

	render() { 
    return <>
	 { this.props.isFetching ? <Preloader /> : null}
    <Users
      totalUsersCount = {this.props.totalUsersCount}
      users = {this.props.users}
      pageSize = {this.props.pageSize}
      onPageChanged = {this.onPageChanged}
		setUsersPage = {this.setUsersPage}
      follow = {this.props.follow}
      unFollow = {this.props.unFollow}
		followingInProgress = {this.props.followingInProgress}
    />
  </>;
	}
}

// const mapStateToProps = (state) => {

// 	return {
// 		users: state.usersPage.users,
// 		pageSize: state.usersPage.pageSize,
// 		totalUsersCount: state.usersPage.totalUsersCount,
// 		currentPage: state.usersPage.currentPage,
// 		isFetching: state.usersPage.isFetching,
// 		followingInProgress: state.usersPage.followingInProgress,
// 	}
// }

const mapStateToProps = (state) => {

	return {
		users: getAllUsers(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getFollowingInProgress(state),
	}
}

export default connect (mapStateToProps, {follow,	unFollow, setUsersPage, getUsers})(UsersContainer)