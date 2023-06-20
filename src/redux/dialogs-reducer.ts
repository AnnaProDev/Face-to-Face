import { InferActionsTypes } from './redux-store';

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
	newMessageBody: ''
};

export const actions = {
	addMessage: (newMessageBody: string) => ({type: "SN/DIALOGS/ADD-MESSAGE", newMessageBody} as const)
};

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {

	switch (action.type) {
		case "SN/DIALOGS/ADD-MESSAGE": 
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

export default dialogsReducer;

export type InitialStateType = typeof initialState

type ActionsType = InferActionsTypes<typeof actions>