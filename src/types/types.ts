export type PostType = {
	id: number,
	text: string,
	likesCount: number
}
export type FriendsType = {
	id: number,
	name: string,
	img: string
}
export type ContactsType = {
	gitHub: string,
	vk: string,
	facebook: string,
	instagram: string,
	twitter: string,
	website: string,
	youtube: string,
	mainLink: string
}
export type PhotosType = {
	small: string | null,
	large: string | null,
}
export type UserType = {
	id: number,
	name: string,
	status: string,
	photos: PhotosType,
	followed: boolean,
}