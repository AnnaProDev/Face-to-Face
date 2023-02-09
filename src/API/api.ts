import axios from "axios";
import { ProfileType } from "../redux/profile-reducer";

const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "46de6c55-53db-4e06-b9fc-98f05054e167"
	}
})

export const usersAPI = {
	getUsers(currentPage: number, pageSize: number) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data);
	},
	follow(userId: number) {
		return instance.post(`follow/${userId}`, {})
	},
	unFollow(userId: number) {
		return instance.delete(`follow/${userId}`)
	},
};

export const profileAPI = {
	getProfile(userId: number) {
		return instance.get(`profile/${userId}`)
	},
	getStatus(userId: number) {
		return instance.get(`profile/status/${userId}`)
	},
	updateStatus(status: string) {
		return instance.put(`profile/status`, {status: status})
	},
	savePhoto(photoFile: any) {
		const formData = new FormData();
		formData.append("image", photoFile);
		return instance.put(`profile/photo`, formData)
	},
	saveProfile(profile: ProfileType) {
		return instance.put(`profile`, profile)
	}
};

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

export const securityAPI = {
	getCaptchaUrl() {
		return instance.get(`security/get-captcha-url`)
	}
}