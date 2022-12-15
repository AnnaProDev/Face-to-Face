const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE: 
			let newMessage = {
				id: 6,
				text: state.newMessageText,
			};
			state.dialogsMessages.push(newMessage);
			state.newMessageText = ""; 
			return state;
		case UPDATE_NEW_MESSAGE_TEXT:
			state.newMessageText = action.newText;
			return state;
		default: 
			return state;
			
	}
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextActionCreator = (text) => ({
		type: UPDATE_NEW_MESSAGE_TEXT,
		newText: text,
	});

export default dialogsReducer;