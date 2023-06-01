import { stopSubmit } from "redux-form";
import { securityAPI } from "../API/security-api";
import {authAPI} from "../API/auth-api";
import {ResultCodeForCaptchaEnum, ResultCodesEnum } from "../API/api"
import { BaseThunkType, InferActionsTypes } from "./redux-store";

const initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false as boolean,
  captchaUrl: null as string | null, //if null, then captcha is not required
};

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
   case "SN/auth/SET_USER_DATA":
	case "SN/auth/GET_CAPTCHA_URL_SUCCESS":
      return { ...state, ...action.payload }
    default:
      return state;
  }
};

export const actions = {
	setAuthUserData: (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
		type: "SN/auth/SET_USER_DATA",	payload: { id, email, login, isAuth },
	 } as const),
	 getCaptchaUrlSuccess: (captchaUrl: string) => ({
		type: "SN/auth/GET_CAPTCHA_URL_SUCCESS", payload: { captchaUrl }
	} as const)
};

export const getAuthUserData = ():ThunkType => async (dispatch) => {
  const response = await authAPI.me();
  console.log(response.data.data)
    if (response.data.resultCode === ResultCodesEnum.Success) {
      let { id, email, login } = response.data.data;
      dispatch(actions.setAuthUserData(id, email, login, true));
    }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string):ThunkType => async (dispatch) => {

const response = await authAPI.login(email, password, rememberMe, captcha);
	if (response.data.resultCode === ResultCodesEnum.Success) {
	dispatch(getAuthUserData());
	//success, get auth data
	} else {
	if (response.data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired){
		dispatch(getCaptchaUrl())
	}
	let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
	dispatch(stopSubmit("login", {_error: message}));
	}
};

export const logout = ():ThunkType => async (dispatch) => {

const response = await authAPI.logout();
	if (response.data.resultCode === ResultCodesEnum.Success) {
	dispatch(actions.setAuthUserData(null, null, null, false))
	} 
};

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {

	const data = await securityAPI.getCaptchaUrl();
	const captchaUrl = data.url;
	dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
	};

export default authReducer;

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | ReturnType <typeof stopSubmit>>