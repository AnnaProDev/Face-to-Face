import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unFollow,
  getUsers,
} from "../../redux/users-reducer";
import {
  getAllUsers,
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
} from "../../redux/users-selectors"
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { UserType } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";
import { compose } from "redux";

type MapStatePropsType = {
	currentPage: number,
	pageSize: number,
	isFetching: boolean,
	totalUsersCount: number,
	users: Array<UserType>,
	followingInProgress: Array<number>,
}

type MapDispatchPropsType = {
	follow: (userId: number) => void,
	unFollow: (userId: number) => void,
	getUsers: (page:number, pageSize: number) => void,
}

type OwnPropsType = {
	text: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    const { currentPage, pageSize } = this.props;
    this.props.getUsers(currentPage, pageSize);
  }

  onPageChanged = (page: number) => {
    const { pageSize } = this.props;
    this.props.getUsers(page, pageSize);
  };

  render() {
    return <div>
		{this.props.isFetching ? <Preloader /> : null}
		<Users 
			totalItemsCount={this.props.totalUsersCount}
			users={this.props.users}
			pageSize={this.props.pageSize}
			onPageChanged={this.onPageChanged}
			currentPage={this.props.currentPage}
			follow={this.props.follow}
			unFollow={this.props.unFollow}
			followingInProgress={this.props.followingInProgress}
		/>
	</div>
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getAllUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose<React.Component>(
connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
	follow, unFollow,	getUsers,}))(UsersContainer);
