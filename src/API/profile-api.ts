import { ResponseType, instance } from "./api";
import { ProfileType } from "../redux/profile-reducer";
import { PhotosType } from "../types/types";

type SavePhotoResponseDataType = {
	photos: PhotosType
}

export const profileAPI = {
	getProfile(userId: number) {
		return instance.get<ProfileType>(`profile/${userId}`).then(res => res.data)
	},
	getStatus(userId: number) {
		return instance.get(`profile/status/${userId}`).then(res => res.data)
	},
	updateStatus(status: string) {
		return instance.put<ResponseType>(`profile/status`, {status: status}).then(res => res.data)
	},
	savePhoto(photoFile: File) {
		const formData = new FormData();
		formData.append("image", photoFile);
		return instance.put<ResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData).then(res => res.data);
	},
	saveProfile(profile: ProfileType) {
		return instance.put<ResponseType>(`profile`, profile).then(res => res.data)
	}
};