import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";


let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;