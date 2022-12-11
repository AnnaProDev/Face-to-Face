import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import state from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<App 
	state={state} />
);
