import { GetItemsType, ResponseType, instance } from "./api";

export const usersAPI = {
	getUsers(currentPage: number, pageSize: number) {
		return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
			.then(res => res.data);
	},
	follow(userId: number) {
		return instance.post<ResponseType>(`follow/${userId}`, {}).then(res => res.data)
	},
	unFollow(userId: number) {
		return instance.delete(`follow/${userId}`).then(res => res.data) as Promise <ResponseType>
	},
};
