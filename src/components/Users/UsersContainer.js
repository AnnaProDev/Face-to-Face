import React from "react";
import { connect } from "react-redux";
import { follow, unFollow, setUsers, setUsersPage, setTotalUsersCount, toggleIsFetching } from "../../redux/users-reducer";
import Users from "./Users";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
		.then(response => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(response.data.items);
			// this.props.setTotalUsersCount(response.data.totalCount);
		});
	}
	
	onPageChanged = (pageNumber) => {
		this.props.setUsersPage(pageNumber);
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
		.then(response => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(response.data.items);

		});
	}

	render() { 
    return <>
	 { this.props.isFetching ? <Preloader /> : null}
    <Users
      totalUsersCount={this.props.totalUsersCount}
      users={this.props.users}
      pageSize={this.props.pageSize}
      setUsersPage={this.props.currentPage}
      onPageChanged={this.onPageChanged}
      follow={this.props.follow}
      unFollow={this.props.unFollow}
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
	}
}

// const mapDispatchToProps = (dispatch) => {

// 	return {
// 		follow: (userId) => {
// 			dispatch(followAC(userId));
// 		},
// 		unFollow: (userId) => {
// 			dispatch(unFollowAC(userId))
// 		},
// 		setUsers: (users) => {
// 			dispatch(setUsersAC(users))
// 		},
// 		setCurrentPage: (currentPage) => {
// 			dispatch(setUsersPageAC(currentPage))
// 		},
// 		setTotalUsersCount: (totalCount) => {
// 			dispatch(setTotalUsersCountAC(totalCount))
// 		},
// 		toggleIsFetching: (isFetching) => {
// 			dispatch(toggleIsFetchingAC(isFetching))
// 		}
// 	}
// }

export default connect (mapStateToProps, {
	follow,	unFollow, setUsers, setUsersPage, setTotalUsersCount,	toggleIsFetching,
})(UsersContainer);