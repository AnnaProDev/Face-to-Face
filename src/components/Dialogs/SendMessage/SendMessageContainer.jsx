import { actions} from "../../../redux/dialogs-reducer";
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
		onAddMessage: (newMessageBody) => {
			dispatch(actions.addMessageActionCreator(newMessageBody))
		},
	}
}

export default compose(
	connect (mapStateToProps, mapDispatchToProps)
)(SendMessage);