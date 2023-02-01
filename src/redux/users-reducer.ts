import {usersAPI} from "../API/api"
import { UserType } from "../types/types";
import { updateObjectInArray } from "../utils/objects-helpers";
const FOLLOW = "FOLLOW";
const UNFOLLOW  = "UNFOLLOW";
const SET_USERS  = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS _FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
	users: [] as Array<UserType>,
	pageSize: 10,
	totalItemsCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: [] as Array<number>, //array of usersId
};

type InitialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialStateType => {

	switch (action.type) {
		case FOLLOW: 
			return { 
				...state, 
				users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
			}
		case UNFOLLOW:
			return { 
				...state, 
				users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
			}
		case SET_USERS: {
			return {...state, users: action.users}
		}
		case SET_CURRENT_PAGE: {
			return {...state, currentPage: action.currentPage}
		}
		case SET_TOTAL_USERS_COUNT: {
			return {...state, totalItemsCount: action.totalItemsCount}
		}
		case TOGGLE_IS_FETCHING: {
			return {...state, isFetching: action.isFetching}
		}
		case TOGGLE_IS_FOLLOWING_PROGRESS: {
			return {
				...state, 
				followingInProgress: action.isFetching 
				? [...state.followingInProgress, action.userId] 
				: state.followingInProgress.filter(id => id !== action.userId)
			}
		}
		default: 
			return state;			
	}
};

type followSuccessActionType = {
	type: typeof FOLLOW 
	userId: number
}
export const followSuccess = (userId: number): followSuccessActionType => ({type: FOLLOW, userId});
type unFollowSuccessActionType = {
	type: typeof UNFOLLOW 
	userId: number
}
export const unFollowSuccess = (userId: number):unFollowSuccessActionType => ({type: UNFOLLOW, userId});
type setUsersActionType = {
	type: typeof SET_USERS 
	users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): setUsersActionType => ({type: SET_USERS, users});
type setUsersPageActionType = {
	type: typeof SET_CURRENT_PAGE 
	currentPage: number
}
export const setUsersPage = (currentPage: number): setUsersPageActionType => ({type: SET_CURRENT_PAGE, currentPage});
type setTotalUsersCountActionType = {
	type: typeof SET_TOTAL_USERS_COUNT 
	totalItemsCount: number
}
export const setTotalUsersCount = (totalItemsCount: number): setTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, totalItemsCount});
type toggleIsFetchingActionType = {
	type: typeof TOGGLE_IS_FETCHING 
	isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching});
type toggleFollowingProgressActionType = {
	type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
	isFetching: boolean
	userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): toggleFollowingProgressActionType => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const getUsers = (page: number, pageSize: number) => {
	return async (dispatch: any) => {
	dispatch(toggleIsFetching(true));
	dispatch(setUsersPage(page))
		const data = await usersAPI.getUsers(page, pageSize);
			dispatch(toggleIsFetching(false));
			dispatch(setUsers(data.items));
			dispatch(setTotalUsersCount(data.totalCount));
	}
};

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
	dispatch(toggleFollowingProgress(true, userId));
	let response = await apiMethod(userId)
		if (response.data.resultCode === 0) {
			dispatch(actionCreator(userId));
		}
		dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId: number) => {
	return async (dispatch: any) => {
		const apiMethod = usersAPI.follow.bind(usersAPI);
		followUnfollowFlow(dispatch, userId, apiMethod, followSuccess);
	}
};

export const unFollow = (userId: number) => {
	return async (dispatch: any) => {
		const apiMethod = usersAPI.unFollow.bind(usersAPI);
		followUnfollowFlow(dispatch, userId, apiMethod, unFollowSuccess);
	}
}

export default usersReducer;