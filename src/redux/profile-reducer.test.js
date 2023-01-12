import profileReducer, { addPostActionCreator } from "./profile-reducer";

let state = {
	postsMessage: [
		{id: 1, text: "If you can’t be kind, at least be vague.", likesCount: 12,},
		{id: 2, text: "Imagination is more important than knowledge",likesCount: 78},
		{id: 3, text: "The time is always right to do what is right.",likesCount: 46},
		{id: 4, text: "Always forgive your enemies; nothing annoys them so much.",likesCount: 3},
		{id: 5, text: "Never go to bed mad. Stay up and fight",likesCount: 39},
	],
};

it("length of postMessage should be incremented", () => {
	const action = addPostActionCreator("test-post");

	const newState = profileReducer(state, action);

	expect(newState.postsMessage.length).toBe(6);
})

it("text of postMessage should be correct", () => {
	const action = addPostActionCreator("test-post");

	const newState = profileReducer(state, action);

	expect(newState.postsMessage[5].text).toBe("test-post");
})
