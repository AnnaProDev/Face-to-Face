import React from "react";
import { connect } from "react-redux";
import { follow, unFollow, setUsersPage, getUsers } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	};
	
	onPageChanged = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize);
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

const mapStateToProps = (state) => {

	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
	}
}

export default compose (
	withAuthRedirect,
	connect (mapStateToProps, {follow,	unFollow, setUsersPage, getUsers}),
)(UsersContainer)