import { updateNewMessageTextActionCreator, addMessageActionCreator } from "../../../redux/dialogs-reducer";
import SendMessage from "./SendMessage";
import { connect } from "react-redux";
import { compose } from "redux";


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

export default compose(
	connect (mapStateToProps, mapDispatchToProps)
)(SendMessage);