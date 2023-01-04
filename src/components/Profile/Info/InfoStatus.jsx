import React from "react";
import style from "../Info/Info.module.css"


class InfoStatus extends React.Component {

	state = {
		editMode: false,
		status: this.props.status,
	}

	activateEditMode = () => {
		this.setState( {
			editMode: true
		});
	};

	deactivateEditMode = () => {
		this.setState( {
			editMode: false
		});
		this.props.updateStatus(this.state.status)
	}

	onStatusChange = (even) => {
		this.setState({
			status: even.currentTarget.value
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.status !== this.props.status) {
			this.setState ({
				status: this.props.status
			});
		}
	}

	render () {
		return (
		<div className={style.mystatus}>
			{!this.state.editMode &&
				<div >
					<h3 onDoubleClick={this.activateEditMode}>{this.props.status || "No status"}</h3>
				</div>
			}
			{this.state.editMode &&
				<div>
					<input onBlur={this.deactivateEditMode} onChange={this.onStatusChange} value={this.state.status} autoFocus={true} />
				</div>
			}
		</div>
		)
	}
}


export default InfoStatus;
