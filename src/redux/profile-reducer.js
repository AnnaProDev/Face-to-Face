import { profileAPI} from "../API/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

const initialState = {
		postsMessage: [
			{id: 1, text: "If you can’t be kind, at least be vague.", likesCount: 12,},
			{id: 2, text: "Imagination is more important than knowledge",likesCount: 78},
			{id: 3, text: "The time is always right to do what is right.",likesCount: 46},
			{id: 4, text: "Always forgive your enemies; nothing annoys them so much.",likesCount: 3},
			{id: 5, text: "Never go to bed mad. Stay up and fight",likesCount: 39},
		],
		friendsList: [
			{id: 1, name: "Andrew", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS87Gr4eFO7Pt2pE8oym4dxXnxGZYL2Pl_N5A&usqp=CAU"},
			{id: 2, name: "Mark", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-C6XlLDyom3ZA-YU98RZsMIx50qwU8xzlmtiK261de3VveBy0QBgOsFNac3Yb69WsBU&usqp=CAU"},
			{id: 3, name: "Olga", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwsUeMCO-OWwtei37A6FYy6QFCb1m_2XD5EiACkcJaBjk7_Du5owYUs7nwDI2KOpGAEw4&usqp=CAU"},
			{id: 4, name: "Maria", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa8Luglga9J2R3Bxt_PsWZISUHQWODD6_ZTAJ5mIQgxYCAE-YbkY81faTqp-hSA_jVPTs&usqp=CAU"},
		],
		profile: null,
		status: "",		
	};


const profileReducer = (state = initialState, action) => {
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
		default:
			return state;
	}
};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus= (status) => ({type: SET_USER_STATUS, status});

export const getUserProfile = (userId) => async (dispatch) => {
const response = await profileAPI.getProfile(userId)
	dispatch(setUserProfile(response.data));
};
export const getStatus = (userId) => async (dispatch) => {
const response = await profileAPI.getStatus(userId);
	dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
const response = await profileAPI.updateStatus(status)
	if (response.data.resultCode === 0) {
	dispatch(setStatus(status));
	}
};

export default profileReducer;