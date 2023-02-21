import { instance } from "./api";

export enum ResultCodesEnum {
	Success = 0,
	Error = 1,
	
}

export enum ResultCodeForCaptcha {
	CaptchaIsRequired = 10
}

type MeResponseType = {
	data: {id: number, email:string, login: string},
	resultCode: ResultCodesEnum,
	messages: Array<string>
}

type LoginResponseType = {
	data: {
		UserId: number, 
	},
	resultCode: ResultCodesEnum | ResultCodeForCaptcha,
	messages: Array<string>
}

export const authAPI = {
	me() {
		return instance.get<MeResponseType>(`auth/me`)
	},
	login(email: string, password: string, rememberMe = false, captcha: null | string = null ) {
		return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha})
	},
	logout() {
		return instance.delete(`auth/login`)
	},
}