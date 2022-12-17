import { updateNewMessageTextActionCreator, addMessageActionCreator } from "../../../redux/dialogs-reducer";
import SendMessage from "./SendMessage";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
	return {
		newMessageText: state.dialogsPage.newMessageText
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onAddMessage: () => {
			dispatch(addMessageActionCreator())
		},
		MessageChange: (text) => {
			let action = updateNewMessageTextActionCreator(text);
			dispatch(action);
		},
	}
}

const SendMessageContainer = connect (mapStateToProps, mapDispatchToProps)(SendMessage);

export default SendMessageContainer;