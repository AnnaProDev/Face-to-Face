import { connect } from "react-redux";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {

	return {
		dialogsPage: state.dialogsPage,
	}
}


const DialogsContainer = connect (mapStateToProps)(Dialogs);

export default DialogsContainer;