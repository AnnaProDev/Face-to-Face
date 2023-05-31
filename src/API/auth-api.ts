import { instance, ResponseType, ResultCodeForCaptchaEnum, ResultCodesEnum } from "./api";


type MeResponseDataType = {
	id: number
	email:string
	login: string
}

type LoginResponseDataType = {
	UserId: number, 
}

export const authAPI = {
	me() {
		return instance.get<ResponseType<MeResponseDataType>>(`auth/me`)
	},
	login(email: string, password: string, rememberMe = false, captcha: null | string = null ) {
		return instance.post<ResponseType<LoginResponseDataType,  ResultCodesEnum | ResultCodeForCaptchaEnum>>(`auth/login`, {email, password, rememberMe, captcha})
	},
	logout() {
		return instance.delete(`auth/login`)
	},
}