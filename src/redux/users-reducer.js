const FOLLOW = "FOLLOW";
const UNFOLLOW  = "UNFOLLOW";
const SET_USERS  = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
// const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

const initialState = {
	users: [
		// {id: 1, following: false, photoUser: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS87Gr4eFO7Pt2pE8oym4dxXnxGZYL2Pl_N5A&usqp=CAU", fullName: "Andrey", status: "I'm boss", location: {city: "Charlotte", country: "USA"}},
		// {id: 2, following: true, photoUser: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-C6XlLDyom3ZA-YU98RZsMIx50qwU8xzlmtiK261de3VveBy0QBgOsFNac3Yb69WsBU&usqp=CAU", fullName: "Mark", status: "Bring the best of your authentic self to every opportunity.", location: {city: "Ekaterinburg", country: "Russia"}},
		// {id: 3, following: false, photoUser: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwsUeMCO-OWwtei37A6FYy6QFCb1m_2XD5EiACkcJaBjk7_Du5owYUs7nwDI2KOpGAEw4&usqp=CAU", fullName: "Anna", status: "Stay hungry, stay foolish.", location: {city: "Tokyo", country: "Japan"}},
		// {id: 4, following: true, photoUser: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa8Luglga9J2R3Bxt_PsWZISUHQWODD6_ZTAJ5mIQgxYCAE-YbkY81faTqp-hSA_jVPTs&usqp=CAU", fullName: "Helen", status: "Clarity trumps persuasion", location: {city: "Deli", country: "India"}},
	],
	pageSize: 5,
	totalUsersCount: 10,
	currentPage: 1,
};

const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOW: 
			return { 
				...state, 
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return {...user, following: true}
					}
					return user
				}),
			}
		case UNFOLLOW:
			return { 
				...state, 
				users: state.users.map(user => {
					if (user.id === action.userId) {
						return {...user, following: false}
					}
					return user
				}),
			}
		case SET_USERS: {
			return {...state, users: action.users}
		}
		case SET_CURRENT_PAGE: {
			return {...state, currentPage: action.currentPage}
		}
		// case SET_TOTAL_USERS_COUNT: {
		// 	return {...state, totalUserCount: action.totalUserCount}
		// }
		default: 
			return state;			
	}
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId	});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setUsersPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
// export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})

export default usersReducer;