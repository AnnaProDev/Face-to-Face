import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import {usersAPI} from "../API/api"
import { UserType } from "../types/types";
import { updateObjectInArray } from "../utils/objects-helpers";
import { AppStateType } from "./redux-store";
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

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

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

type ActionsTypes = FollowSuccessActionType | UnFollowSuccessActionType | SetUsersActionType|
SetUsersPageActionType | SetTotalUsersCountActionType | ToggleIsFetchingActionType |ToggleFollowingProgressActionType

type FollowSuccessActionType = {
	type: typeof FOLLOW, 
	userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionType => ({type: FOLLOW, userId});
type UnFollowSuccessActionType = {
	type: typeof UNFOLLOW 
	userId: number
}
export const unFollowSuccess = (userId: number):UnFollowSuccessActionType => ({type: UNFOLLOW, userId});
type SetUsersActionType = {
	type: typeof SET_USERS 
	users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({type: SET_USERS, users});
type SetUsersPageActionType = {
	type: typeof SET_CURRENT_PAGE 
	currentPage: number
}
export const setUsersPage = (currentPage: number): SetUsersPageActionType => ({type: SET_CURRENT_PAGE, currentPage});
type SetTotalUsersCountActionType = {
	type: typeof SET_TOTAL_USERS_COUNT 
	totalItemsCount: number
}
export const setTotalUsersCount = (totalItemsCount: number): SetTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, totalItemsCount});
type ToggleIsFetchingActionType = {
	type: typeof TOGGLE_IS_FETCHING 
	isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching});
type ToggleFollowingProgressActionType = {
	type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
	isFetching: boolean
	userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressActionType => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getUsers = (page: number, pageSize: number): ThunkType => {
	return async (dispatch) => {
	dispatch(toggleIsFetching(true));
	dispatch(setUsersPage(page))
		const data = await usersAPI.getUsers(page, pageSize);
			dispatch(toggleIsFetching(false));
			dispatch(setUsers(data.items));
			dispatch(setTotalUsersCount(data.totalCount));
	}
};

const _followUnfollowFlow = async (
	dispatch: DispatchType, 
	userId: number, 
	apiMethod: any, 
	actionCreator: (userId: number) => FollowSuccessActionType | UnFollowSuccessActionType) => {
	dispatch(toggleFollowingProgress(true, userId));
	let response = await apiMethod(userId)
		if (response.data.resultCode === 0) {
			dispatch(actionCreator(userId));
		}
		dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId: number): ThunkType => {
	return async (dispatch) => {
		const apiMethod = usersAPI.follow.bind(usersAPI);
		_followUnfollowFlow(dispatch, userId, apiMethod, followSuccess);
	}
};

export const unFollow = (userId: number): ThunkType => {
	return async (dispatch) => {
		const apiMethod = usersAPI.unFollow.bind(usersAPI);
		_followUnfollowFlow(dispatch, userId, apiMethod, unFollowSuccess);
	}
}

export default usersReducer;