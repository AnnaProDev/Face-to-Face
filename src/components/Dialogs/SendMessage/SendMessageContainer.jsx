import { updateNewMessageTextActionCreator, addMessageActionCreator } from "../../../redux/dialogs-reducer";
import SendMessage from "./SendMessage";


const SendMessageContainer = (props) => {

	let state = props.store.getState().dialogsPage;

	const postMessage = () => {
		props.store.dispatch(addMessageActionCreator())
	}

	const messageChange = (text) => {
		props.store.dispatch(updateNewMessageTextActionCreator(text));
	}


return (
	<SendMessage 
	addMessage = { postMessage }
	onMessageChange = { messageChange }
	newMessageText = {state.newMessageText}
	/>
)

}

export default SendMessageContainer;