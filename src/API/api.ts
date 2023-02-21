import axios from "axios";
import { UserType } from "../types/types";

export type GetItemsType = {
	items: Array<UserType>
	totalCount: number
	error: string | null
}

export const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "46de6c55-53db-4e06-b9fc-98f05054e167"
	}
})