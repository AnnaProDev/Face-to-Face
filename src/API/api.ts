import axios from "axios";
import { UserType } from "../types/types";

export type GetItemsType = {
	items: Array<UserType>
	totalCount: number
	error: string | null
}

export enum ResultCodeForCaptchaEnum {
	CaptchaIsRequired = 10
}

export enum ResultCodesEnum {
	Success = 0,
	Error = 1,
}

export type ResponseType<D = {}, RC = ResultCodesEnum> = {
	data: D
	resultCode: RC
	messages: Array<string>
}

export const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "46de6c55-53db-4e06-b9fc-98f05054e167"
	}
})

