import { actions} from "../../../redux/dialogs-reducer";
import { AppStateType } from "../../../redux/redux-store";
import SendMessage from "./SendMessage";
import { connect } from "react-redux";
import { compose } from "redux";


const mapStateToProps = (state: AppStateType) => {
	return {
		newMessageText: state.dialogsPage.newMessageBody
	}
}

export default compose(
	connect (mapStateToProps, { ...actions})
)(SendMessage);