const ADD_MESSAGE = "ADD-MESSAGE";

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
};

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_MESSAGE: 
			let newMessage = {
				id: 6,
				text: action.newMessageBody,
			};
			return {
				...state,
				dialogsMessages : [...state.dialogsMessages, newMessage ],
			};
		default: 
			return state;			
	}
};

export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody});

export default dialogsReducer;