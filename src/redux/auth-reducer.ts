import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../API/api";

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA ";
const GET_CAPTCHA_URL_SUCCESS = "samurai-network/auth/GET_CAPTCHA_URL_SUCCESS"

// export type InitialStateType2 = {
// 	id: number | null,
// 	email: string | null,
// 	login: string | null,
// 	isAuth: boolean,
// 	captchaUrl: string | null,
// }

const initialState = {
  id: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false as boolean,
  captchaUrl: null as string | null, //if null, then captcha is not required
};

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
   case SET_USER_DATA:
	case GET_CAPTCHA_URL_SUCCESS:
      return { ...state, ...action.payload }
    default:
      return state;
  }
};

type SetAuthUserDataActionType = {
	type: typeof SET_USER_DATA,
	payload:	{	
			id: number | null, 
			email: string | null, 
			login: string | null, 
			isAuth: boolean
		}
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});

type GetCaptchaUrlSuccessActionType = {
	type: typeof GET_CAPTCHA_URL_SUCCESS
	payload:	{ captchaUrl: string }
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({
	type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl }
 });

export const getAuthUserData = () => async (dispatch: any) => {
  const response = await authAPI.me();
  console.log(response.data.data)
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: any) => async (dispatch: any) => {

const response = await authAPI.login(email, password, rememberMe, captcha);
	if (response.data.resultCode === 0) {
	dispatch(getAuthUserData());
	//success, get auth data
	} else {
	if (response.data.resultCode === 10){
		dispatch(getCaptchaUrl())
	}
	let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
	dispatch(stopSubmit("login", {_error: message}));
	}
};

export const logout = () => async (dispatch: any) => {

const response = await authAPI.logout();
	if (response.data.resultCode === 0) {
	dispatch(setAuthUserData(null, null, null, false))
	} 
};

export const getCaptchaUrl = () => async (dispatch: any) => {

	const response = await securityAPI.getCaptchaUrl();
	const captchaUrl = response.data.url;
	dispatch(getCaptchaUrlSuccess(captchaUrl))
	};

export default authReducer;
