const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

let store = {
	_state: {
		profilePage:{
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
			newPostText: '',
		},
	
		dialogsPage: {
			dialogsMessages: [
				{id: 1, text: "Hello! How are you?"},
				{id: 2, text: "Hello!",},
				{id: 3, text: "Hohoho!",},
				{id: 4, text: "I'm good!",},
				{id: 5, text: "Ku-ku",},
			],
			dialogsUsers: [
				{id: 1, name: "Anna",},
				{id: 2, name: "Andrey",},
				{id: 3, name: "Mark",},
				{id: 4, name: "Amaliya",},
				{id: 5, name: "Olga",},
			],
			newMessageText: "",
		},
	
	},
	_callSubscriber() {
		console.log("Changed");
	},
	getState() {
		return (this._state);
	},
	subscribe (observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		if (action.type === 	ADD_POST) {
			let newPost = {
				id: 6,
				text: this._state.profilePage.newPostText,
				likesCount: 0,
			};
			this._state.profilePage.postsMessage.push(newPost);
			this._state.profilePage.newPostText = ""; 
			this._callSubscriber(this._state);
			action.preventDefault();
		} 	else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		} else if (action.type === ADD_MESSAGE){
			let newMessage = {
				id: 6,
				text: this._state.dialogsPage.newMessageText,
			};
			this._state.dialogsPage.dialogsMessages.push(newMessage);
			this._state.dialogsPage.newMessageText = ""; 
			this._callSubscriber(this._state);
			action.preventDefault();
		} else if (action.type === UPDATE_NEW_MESSAGE_TEXT)
			this._state.dialogsPage.newMessageText = action.newText;
			this._callSubscriber(this._state);
	},

}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({
		type: UPDATE_NEW_POST_TEXT,
		newText: text,
	});

window.state = store;

export default store;