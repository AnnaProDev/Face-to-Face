const ADD_MESSAGE = "ADD-MESSAGE";

type DialogType = {
	id: number,
	name: string
}

type MessageType = {
	id: number,
	text: string
}

const initialState = {
	dialogsMessages: [
		{id: 1, text: "Hello! How are you?"},
		{id: 2, text: "Hello!",},
		{id: 3, text: "Hohoho!",},
		{id: 4, text: "I'm good!",},
		{id: 5, text: "Ku-ku",},
	] as Array<MessageType>,
	dialogsUsers: [
		{id: 1, name: "Anna",},
		{id: 2, name: "Andrey",},
		{id: 3, name: "Mark",},
		{id: 4, name: "Amaliya",},
		{id: 5, name: "Olga",},
	] as Array<DialogType>,
};

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {

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

type AddMessageActionCreatorType = {
	type: typeof ADD_MESSAGE,
	newMessageBody: string
}

export const addMessageActionCreator = (newMessageBody: string): AddMessageActionCreatorType => ({type: ADD_MESSAGE, newMessageBody});

export default dialogsReducer;