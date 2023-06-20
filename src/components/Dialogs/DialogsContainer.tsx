import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";
import { AppStateType } from "../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => {

	return {
		dialogsPage: state.dialogsPage,
		isAuth: state.auth.isAuth,
	}
}

export default compose<React.ComponentType>(
	connect (mapStateToProps),
	withAuthRedirect
)(Dialogs);