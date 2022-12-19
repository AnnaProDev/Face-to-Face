import { connect } from "react-redux";
import { followAC, unFollowAC, setUsersAC, setUsersPageAC } from "../../redux/users-reducer";
import Users from "./Users";


const mapStateToProps = (state) => {

	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
	}
}

const mapDispatchToProps = (dispatch) => {

	return {
		follow: (userId) => {
			dispatch(followAC(userId));
		},
		unFollow: (userId) => {
			dispatch(unFollowAC(userId))
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		},
		setCurrentPage: (currentPage) => {
			dispatch(setUsersPageAC(currentPage))
		},
		// setTotalUsersCount: (totalCount) => {
		// 	dispatch(setTotalUsersCountAC(totalCount))
		// }
	}
}

const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;