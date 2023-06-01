import { Dispatch } from "react";
import {usersAPI} from "../API/users-api"
import { UserType } from "../types/types";
import { updateObjectInArray } from "../utils/objects-helpers";
import { InferActionsTypes, BaseThunkType } from "./redux-store";

const initialState = {
	users: [] as Array<UserType>,
	pageSize: 10,
	totalItemsCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: [] as Array<number>, //array of usersId
};

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

	switch (action.type) {
		case 'SN/USERS/FOLLOW': 
			return { 
				...state, 
				users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
			}
		case 'SN/USERS/UNFOLLOW':
			return { 
				...state, 
				users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
			}
		case 'SN/USERS/SET_USERS': {
			return {...state, users: action.users}
		}
		case 'SN/USERS/SET_CURRENT_PAGE': {
			return {...state, currentPage: action.currentPage}
		}
		case 'SN/USERS/SET_TOTAL_USERS_COUNT': {
			return {...state, totalItemsCount: action.totalItemsCount}
		}
		case 'SN/USERS/TOGGLE_IS_FETCHING': {
			return {...state, isFetching: action.isFetching}
		}
		case 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS': {
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

export const actions = {
	followSuccess : (userId: number) => ({type: 'SN/USERS/FOLLOW', userId} as const),
	unFollowSuccess : (userId: number)=> ({type: 'SN/USERS/UNFOLLOW', userId} as const),
	setUsers : (users: Array<UserType>) => ({type: 'SN/USERS/SET_USERS', users} as const),
	setUsersPage : (currentPage: number) => ({type: 'SN/USERS/SET_CURRENT_PAGE', currentPage} as const),
	setTotalUsersCount : (totalItemsCount: number) => ({type: 'SN/USERS/SET_TOTAL_USERS_COUNT', totalItemsCount} as const),
	toggleIsFetching : (isFetching: boolean) => ({type: 'SN/USERS/TOGGLE_IS_FETCHING', isFetching} as const),
	toggleFollowingProgress : (isFetching: boolean, userId: number) => ({type: 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId} as const),
}

export const getUsers = (page: number, pageSize: number): ThunkType => {
	return async (dispatch) => {
	dispatch(actions.toggleIsFetching(true));
	dispatch(actions.setUsersPage(page))
		const data = await usersAPI.getUsers(page, pageSize);
			dispatch(actions.toggleIsFetching(false));
			dispatch(actions.setUsers(data.items));
			dispatch(actions.setTotalUsersCount(data.totalCount));
	}
};

const _followUnfollowFlow = async (
	dispatch: Dispatch<ActionsTypes>, 
	userId: number, 
	apiMethod: any, 
	actionCreator: (userId: number) => ActionsTypes) => {
	dispatch(actions.toggleFollowingProgress(true, userId));
	let response = await apiMethod(userId)
		if (response.data.resultCode === 0) {
			dispatch(actionCreator(userId));
		}
		dispatch(actions.toggleFollowingProgress(false, userId));
}

export const follow = (userId: number): ThunkType => {
	return async (dispatch) => {
		const apiMethod = usersAPI.follow.bind(usersAPI);
		_followUnfollowFlow(dispatch, userId, apiMethod, actions.followSuccess);
	}
};

export const unFollow = (userId: number): ThunkType => {
	return async (dispatch) => {
		const apiMethod = usersAPI.unFollow.bind(usersAPI);
		_followUnfollowFlow(dispatch, userId, apiMethod, actions.unFollowSuccess);
	}
}

export default usersReducer;

type InitialStateType = typeof initialState;
type ThunkType = BaseThunkType<ActionsTypes>;
type ActionsTypes = InferActionsTypes<typeof actions>;