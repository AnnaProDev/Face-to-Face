import React from "react"
import { connect } from "react-redux";
import { Navigate } from "react-router-dom"
import { AppStateType } from "../redux/redux-store";

const mapStateToPropsForRedirect = (state: AppStateType) => ({
	isAuth: state.auth.isAuth
});

type MapPropsType ={
	isAuth: boolean
}

//Type for WrappedComponent: React.ComponentType<WCP>

export function withAuthRedirect<WCP>(WrappedComponent: any ) {

	const RedirectComponent: React.FC<MapPropsType> = (props) => {
			let {isAuth, ...restProps} = props

			if (!isAuth) return <Navigate to={"/login"} />

			return <WrappedComponent {...restProps as unknown as WCP} />
	}

let ConnectedAuthRedirectComponent = connect<MapPropsType, {}, WCP, AppStateType>(mapStateToPropsForRedirect)
(RedirectComponent);

	return ConnectedAuthRedirectComponent;
}