import { stopSubmit } from "redux-form";
import { profileAPI} from "../API/profile-api";
import { ContactsType, FriendsType, PhotosType, PostType } from "../types/types";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";


export type ProfileType = {
	userId: number,
	lookingForAJob: string,
	lookingForAJobDescription: boolean,
	fullName: string,
	contacts?: ContactsType,
	photos: PhotosType
}

const initialState = {
		postsMessage: [
			{id: 1, text: "If you can’t be kind, at least be vague.", likesCount: 12,},
			{id: 2, text: "Imagination is more important than knowledge",likesCount: 78},
			{id: 3, text: "The time is always right to do what is right.",likesCount: 46},
			{id: 4, text: "Always forgive your enemies; nothing annoys them so much.",likesCount: 3},
			{id: 5, text: "Never go to bed mad. Stay up and fight",likesCount: 39},
		] as Array<PostType>,
		friendsList: [
			{id: 1, name: "Andrew", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS87Gr4eFO7Pt2pE8oym4dxXnxGZYL2Pl_N5A&usqp=CAU"},
			{id: 2, name: "Mark", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-C6XlLDyom3ZA-YU98RZsMIx50qwU8xzlmtiK261de3VveBy0QBgOsFNac3Yb69WsBU&usqp=CAU"},
			{id: 3, name: "Olga", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwsUeMCO-OWwtei37A6FYy6QFCb1m_2XD5EiACkcJaBjk7_Du5owYUs7nwDI2KOpGAEw4&usqp=CAU"},
			{id: 4, name: "Maria", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa8Luglga9J2R3Bxt_PsWZISUHQWODD6_ZTAJ5mIQgxYCAE-YbkY81faTqp-hSA_jVPTs&usqp=CAU"},
		] as Array<FriendsType>,
		profile: null as ProfileType | null,
		status: "",
		newPostText: ""		
	};

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case ADD_POST: 
			let newPost = {
				id: 6,
				text: action.newPostText,
				likesCount: 0,
			};
			return {
				...state,
				postsMessage : [...state.postsMessage, newPost], //Copy array postsMessage
			}
		case SET_USER_PROFILE:
				return {...state, profile: action.profile};
		case SET_USER_STATUS:
			return {...state, status: action.status};
		case SAVE_PHOTO_SUCCESS:
			return {...state, profile: {...state.profile, photos: action.photos} as ProfileType};
		default:
			return state;
	}
};

type addPostActionCreatorActionType = {
	type: typeof ADD_POST
	newPostText: string
}
export const addPostActionCreator = (newPostText: string):addPostActionCreatorActionType => ({type: ADD_POST, newPostText});
type setUserProfileActionType = {
	type: typeof SET_USER_PROFILE,
	profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): setUserProfileActionType => ({type: SET_USER_PROFILE, profile});
type setStatusActionType = {
	type: typeof SET_USER_STATUS,
	status: string
}
export const setStatus= (status: string):setStatusActionType => ({type: SET_USER_STATUS, status});
type savePhotoSuccessActionType = {
	type: typeof SAVE_PHOTO_SUCCESS,
	photos: PhotosType
}
export const savePhotoSuccess= (photos: PhotosType):savePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId: number) => async (dispatch: any) => {
const data = await profileAPI.getProfile(userId)
	dispatch(setUserProfile(data));
};
export const getStatus = (userId: number) => async (dispatch: any) => {
const data = await profileAPI.getStatus(userId);
	dispatch(setStatus(data));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
const data = await profileAPI.updateStatus(status)
	if (data.resultCode === 0) {
	dispatch(setStatus(status));
	}
};

export const savePhoto = (file: any) => async (dispatch: any, getState: any) => {
	const data = await profileAPI.savePhoto(file)
		if (data.resultCode === 0) {
		dispatch(savePhotoSuccess(data.data.photos));
		}
	};

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
	const userId = getState().auth.id;
	const data = await profileAPI.saveProfile(profile)
		if (data.resultCode === 0) {
			dispatch(getUserProfile(userId));
		}  else {
			dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}));
			return Promise.reject(data.messages[0]);
			}
	};

export default profileReducer;