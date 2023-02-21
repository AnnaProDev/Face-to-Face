import { GetItemsType, instance } from "./api";



export const usersAPI = {
	getUsers(currentPage: number, pageSize: number) {
		return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data);
	},
	follow(userId: number) {
		return instance.post(`follow/${userId}`, {})
	},
	unFollow(userId: number) {
		return instance.delete(`follow/${userId}`)
	},
};
