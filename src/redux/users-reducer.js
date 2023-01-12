import {usersAPI} from "../API/api"
import { updateObjectInArray } from "../utils/objects-helpers";
const FOLLOW = "FOLLOW";
const UNFOLLOW  = "UNFOLLOW";
const SET_USERS  = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS _FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
	users: [
		// {id: 1, following: false, photoUser: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS87Gr4eFO7Pt2pE8oym4dxXnxGZYL2Pl_N5A&usqp=CAU", fullName: "Andrey", status: "I'm boss", location: {city: "Charlotte", country: "USA"}},
		// {id: 2, following: true, photoUser: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-C6XlLDyom3ZA-YU98RZsMIx50qwU8xzlmtiK261de3VveBy0QBgOsFNac3Yb69WsBU&usqp=CAU", fullName: "Mark", status: "Bring the best of your authentic self to every opportunity.", location: {city: "Ekaterinburg", country: "Russia"}},
		// {id: 3, following: false, photoUser: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwsUeMCO-OWwtei37A6FYy6QFCb1m_2XD5EiACkcJaBjk7_Du5owYUs7nwDI2KOpGAEw4&usqp=CAU", fullName: "Anna", status: "Stay hungry, stay foolish.", location: {city: "Tokyo", country: "Japan"}},
		// {id: 4, following: true, photoUser: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa8Luglga9J2R3Bxt_PsWZISUHQWODD6_ZTAJ5mIQgxYCAE-YbkY81faTqp-hSA_jVPTs&usqp=CAU", fullName: "Helen", status: "Clarity trumps persuasion", location: {city: "Deli", country: "India"}},
	],
	pageSize: 10,
	totalItemsCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {

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

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId	});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setUsersPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalItemsCount) => ({type: SET_TOTAL_USERS_COUNT, totalItemsCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const getUsers = (page, pageSize) => {
	return async (dispatch) => {
	dispatch(toggleIsFetching(true));
	dispatch(setUsersPage(page))
		const data = await usersAPI.getUsers(page, pageSize);
			dispatch(toggleIsFetching(false));
			dispatch(setUsers(data.items));
			dispatch(setTotalUsersCount(data.totalCount));
	}
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
	dispatch(toggleFollowingProgress(true, userId));
	let response = await apiMethod(userId)
		if (response.data.resultCode === 0) {
			dispatch(actionCreator(userId));
		}
		dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
	return async (dispatch) => {
		const apiMethod = usersAPI.follow.bind(usersAPI);
		followUnfollowFlow(dispatch, userId, apiMethod, followSuccess);
	}
};

export const unFollow = (userId) => {
	return async (dispatch) => {
		const apiMethod = usersAPI.unFollow.bind(usersAPI);
		followUnfollowFlow(dispatch, userId, apiMethod, unFollowSuccess);
	}
}

export default usersReducer;