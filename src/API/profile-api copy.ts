import { instance } from "./api";
import { ProfileType } from "../redux/profile-reducer";

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