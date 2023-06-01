import profileReducer, { actions } from "./profile-reducer";

let state = {
	postsMessage: [
		{id: 1, text: "If you can’t be kind, at least be vague.", likesCount: 12,},
		{id: 2, text: "Imagination is more important than knowledge",likesCount: 78},
		{id: 3, text: "The time is always right to do what is right.",likesCount: 46},
		{id: 4, text: "Always forgive your enemies; nothing annoys them so much.",likesCount: 3},
		{id: 5, text: "Never go to bed mad. Stay up and fight",likesCount: 39},
	],
	friendsList: [
		{id: 1, name: "Andrew", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS87Gr4eFO7Pt2pE8oym4dxXnxGZYL2Pl_N5A&usqp=CAU"},
		{id: 2, name: "Mark", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-C6XlLDyom3ZA-YU98RZsMIx50qwU8xzlmtiK261de3VveBy0QBgOsFNac3Yb69WsBU&usqp=CAU"},
		{id: 3, name: "Olga", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwsUeMCO-OWwtei37A6FYy6QFCb1m_2XD5EiACkcJaBjk7_Du5owYUs7nwDI2KOpGAEw4&usqp=CAU"},
		{id: 4, name: "Maria", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa8Luglga9J2R3Bxt_PsWZISUHQWODD6_ZTAJ5mIQgxYCAE-YbkY81faTqp-hSA_jVPTs&usqp=CAU"},
	],
	profile: null,
	status: "",
	newPostText: ""	
};

it("length of postMessage should be incremented", () => {
	const action = actions.addPostActionCreator("test-post");

	const newState = profileReducer(state, action);

	expect(newState.postsMessage.length).toBe(6);
})

it("text of postMessage should be correct", () => {
	const action = actions.addPostActionCreator("test-post");

	const newState = profileReducer(state, action);

	expect(newState.postsMessage[5].text).toBe("test-post");
})
