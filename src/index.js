import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'))

export let rerenderEntireTree = (state) => {
root.render(
	<App 
	state={state} 
	dispatch ={store.dispatch.bind(store)}
	/>)
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

